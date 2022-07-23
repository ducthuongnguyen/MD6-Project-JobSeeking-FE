import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
// @ts-ignore
import Swal from 'sweetalert2';
import {first} from "rxjs/operators";
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {Company} from "../../model/company";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  recruitmentNews: RecruitmentNews[] = [];
  idCompany: any;
  checkRole;
  checkRoleAdmin;
  checkRoleUser;
  checkRoleCompany;
  city: any[] = [];
  company: Company = {};
  image: any;

  companyForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
    address: new FormControl('-1'),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    introduction: new FormControl('', [Validators.required]),
    roles: new FormControl(),
  });
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.getAllCity();
    const role = localStorage.getItem('ROLE');
    this.idCompany = localStorage.getItem('COMPANYID')
    if (role == null) {
      this.checkRole = true;
    }
    if (role == "COMPANY") {
      this.checkRoleCompany = true;
    }
    if (role == "ADMIN") {
      this.checkRoleAdmin = true;
    }
    if (role == "USER") {
      this.checkRoleUser = true;
    }

  }
  getAllCity() {
    this.authenticationService.findAllCity().subscribe(result => {
      this.city = result
      document.getElementById('address').style.display = 'block';
    }, error => {
      console.log(error);
    });
  }

  register() {
    const company = this.companyForm.value;

    console.log("image: ", this.image)
    this.authenticationService.register(company, this.image).subscribe((data) => {
      document.getElementById("signupForCompany").click();
      this.messageRegister();
      this.companyForm.reset();
    }, error => {
      alert('Lỗi');
    });
  }

  handleChangeImage(e){
    this.image= e.target.files[0];
  }

  messageRegister() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đăng ký thành công',
      showConfirmButton: false,
      timer: 3000
    })
  }
  findByEmail(email: string) {
    this.authenticationService.findByEmail(email).subscribe(result => {
      this.company = result
    }, error => {
      console.log(error);
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.findByEmail(email);
    if (this.company.status === "LOCK") {
      this.messageLoginEmailLock();
    }
    this.authenticationService.login(email, password)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status == 202) {
            console.log(data.status)
            // @ts-ignore
            this.messageLoginFail();
          }
          localStorage.setItem('ACCESS_TOKEN', data.token);
          localStorage.setItem('ROLE', data.roles[0].authority);
          localStorage.setItem('EMAIL', data.email);
          localStorage.setItem('COMPANYID', data.id);
          if (data.roles[0].authority == "COMPANY") {
            this.messageLogin();
            document.getElementById("login").click();
            this.router.navigate(['/company/company/list']);
            location.reload();
          }
          if (data.roles[0].authority == "ADMIN") {
            this.messageLogin();
            document.getElementById("login").click();
            this.router.navigate(['/admin/company/main']);
            location.reload();
          }
          if (data.roles[0].authority == "USER") {
            this.messageLogin();
            document.getElementById("login").click();
            this.router.navigate(['/user/company/main']);
            location.reload();
          }

        },
        error => {
          alert("Tài khoản của bạn sai mật khẩu!");
        });
  }

  messageLogin() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đăng nhập thành công',
      showConfirmButton: false,
      timer: 3000
    })
  }
  messageLoginEmailLock() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Tài khoản của bạn bị khóa',
      showConfirmButton: false,
      timer: 3000
    })
  }

  messageLoginFail() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Tài khoản của bạn sai email hoặc mật khẩu!',
      showConfirmButton: false,
      timer: 3000
    })
  }

  get email() {
    return this.companyForm.get('email');
  }

  get password() {
    return this.companyForm.get('password');
  }

  get name() {
    return this.companyForm.get('name');
  }

  get address() {
    return this.companyForm.get('address');
  }

  get phoneNumber() {
    return this.companyForm.get('phoneNumber');
  }

  get introduction() {
    return this.companyForm.get('introduction');
  }

  get avatar(){
    return this.companyForm.get('avatar');
  }

  get emailLogin() {
    return this.loginForm.get('email');
  }

  get passwordLogin() {
    return this.loginForm.get('password')
  }

  get confirmPassword() {
    return this.companyForm.get('confirmPassword');
  }

  logout() {
    this.authenticationService.logout();
    this.checkRole = true;
    // this.router.navigate(['home']);
    window.location.replace("http://localhost:4200/home")
    // location.reload();
  }

}
