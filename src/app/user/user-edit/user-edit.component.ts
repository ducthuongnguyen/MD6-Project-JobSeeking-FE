import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor( private userService: UserService) { }
  editForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
  });
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    const id = localStorage.getItem("ID");
    return this.userService.getById(id).subscribe(user => {
      this.editForm.patchValue(user);
    });
  }

  update() {
    const id = localStorage.getItem("ID");
    this.userService.update(id,this.editForm.value).subscribe(() => {
      this.messageEditSuccess();
    }, e => {
      console.log(e);
    });
  }
  messageEditSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cập nhật thành công',
      showConfirmButton: false,
      timer: 3000
    })
  }
}
