import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
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
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    avatar: new FormControl(),
    address: new FormControl(),
    phoneNumber: new FormControl(),
    introduction: new FormControl(),
    roles: new FormControl(),
  });
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  constructor(private companyService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
  }

  register() {
    const company = this.companyForm.value;


    console.log(company)
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
            // @ts-ignore
            document.getElementById("status").innerHTML = 'Login Failed! Please try again!'
            return
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
}
