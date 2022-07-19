import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";
// @ts-ignore
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  noEmail = {
    message: "email_existed"
  }
  createSuccess = {
    message: "yes"
  }

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
  constructor(private companyService: AuthenticationService,
              private router: Router,) { }
  ngOnInit(): void {
  }
  submit() {
    const company = this.companyForm.value;


    console.log(company)
    this.companyService.register(company).subscribe((data) => {
     this.openA();
    }, error => {
      alert('Lỗi');
    }) ;
  }
  openA() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đăng ký thành công',
      showConfirmButton: false,
      timer: 3000
    })
  }

}
