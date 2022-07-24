import {Component, OnInit} from '@angular/core';
import {Company} from '../../../model/company';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-company-block',
  templateUrl: './company-block.component.html',
  styleUrls: ['./company-block.component.css']
})
export class CompanyBlockComponent implements OnInit {
  companies: Company[] = [];


  constructor(private companyService: CompanyService,
              private router: Router,
              private actRouter: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.listBlockCompany();

  }

  listBlockCompany() {
    this.companyService.findBlockCompany().subscribe((listCompany: Company[]) => {
      console.log(listCompany)
      this.companies = listCompany;
    }, error => {
      alert("loi")
    });
  }

  updateStatus(id: string) {
    this.companyService.updateStatus(id).subscribe(() => {
      this.messageUnlock();
      this.listBlockCompany();
    }, error => {
      alert("Lỗi");
    })
  }

  messageUnlock() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đã mở khóa doanh nghiệp',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
