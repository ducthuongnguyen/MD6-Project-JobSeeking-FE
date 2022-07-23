import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import Swal from 'sweetalert2';
import {AuthenticationService} from "../../../service/authentication.service";
import {CompanyService} from "../../../service/company.service";
import {Company} from "../../../model/company";

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {
  // const data = localStorage.getItem('USERID');
  // conts id = localStorage.getItem('COMPANYID');
  city: any[] = [];
  imagePreview: any;
  preview: any;
  image: any;
  company: Company;
  editForm: FormGroup = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    avatar: new FormControl(),
    phoneNumber: new FormControl(),
    introduction: new FormControl(),
  });

  constructor(private authenticationService: AuthenticationService,
              private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getAllCity()
    this.getCompany();
    // this.update();

  }

  getCompany() {
    const id = localStorage.getItem('COMPANYID');
    return this.companyService.getById(id).subscribe(company => {
      this.imagePreview=company.avatar;
      this.preview = company;
      this.company = company;
      this.editForm = new FormGroup({
        name: new FormControl(company.name),
        address: new FormControl(company.address),
        avatar: new FormControl(company.avatar),
        phoneNumber: new FormControl(company.phoneNumber),
        introduction: new FormControl(company.introduction),
      });
    });
  }

  update() {
    const id = localStorage.getItem('COMPANYID');
    const company = this.editForm.value
    this.companyService.update(id, company, this.image).subscribe(() => {

      this.messageUpdate();
    }, e => {
      console.log(e);
    });
  }

  messageUpdate() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Chỉnh sửa thành công',
      showConfirmButton: false,
      timer: 3000
    })
  }
  getAllCity() {
    this.authenticationService.findAllCity().subscribe(result => {
      this.city = result
      document.getElementById('address').style.display = 'block';
    }, error => {
      console.log(error);
    });
  }
  handleChangeImage(e){
    this.image= e.target.files[0];
  }

}
