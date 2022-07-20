import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
// @ts-ignore
import Swal from 'sweetalert2';
import {first} from "rxjs/operators";
import {$} from "protractor";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // noEmail = {
  //   message: "email_existed"
  // }
  // createSuccess = {
  //   message: "yes"
  // }

  companyForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    avatar: new FormControl(),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    introduction: new FormControl('', [Validators.required]),
    roles: new FormControl(),
  });
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private companyService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
  }

  register() {
    const company = this.companyForm.value;

    this.companyService.register(company).subscribe((data) => {
      document.getElementById("signupForCompany").click();
      this.messageRegister();
    }, error => {
      alert('Lỗi');
    });
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

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.companyService.login(email, password)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status == 202) {
            this.messageLoginFail();
          }
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          localStorage.setItem('ROLE', data.roles[0].authority);
          localStorage.setItem('EMAIL', data.email);
          localStorage.setItem('COMPANYID', data.id);
          if (data.roles[0].authority == "COMPANY") {
            this.messageLogin();
            document.getElementById("login").click();
            this.router.navigate(['/company/main']);
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
  messageLoginFail() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Tài khoản của bạn sai mật khẩu!',
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

  get address(){
    return this.companyForm.get('address');
  }

  get phoneNumber(){
    return this.companyForm.get('phoneNumber');
  }

  get introduction(){
    return this.companyForm.get('introduction');
  }

  get emailLogin(){
    return this.loginForm.get('email');
  }

  get passwordLogin(){
    return this.loginForm.get('password')
  }

  get confirmPassword(){
    return this.companyForm.get('confirmPassword');
  }
}
