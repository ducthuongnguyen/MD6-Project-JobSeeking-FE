import {Component, OnInit} from '@angular/core';
import {Company} from "../../../model/company";
import {CompanyService} from "../../../service/company.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
// @ts-ignore
import {PageEvent} from "@angular/material/paginator";
import Swal from "sweetalert2";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  totalElements: number = 0;
  loading: boolean;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.findAllUnlockCompany();
  }

  findAllUnlockCompany() {
    this.companyService.findAllUnlockCompany().subscribe((result: Company[]) => {
      this.companies = result;
    }, error => {
      alert("Lỗi");
    })
  }

  updateStatus(id: string) {
    this.companyService.updateStatus(id).subscribe(() => {
      this.messageStatus();
      this.findAllUnlockCompany();
    }, error => {
      alert("Lỗi");
    })
  }

  proposeCompany(id: string) {
    this.companyService.proposeCompany(id).subscribe(() => {
      this.messagePropose();
      this.findAllUnlockCompany();
    }, error => {
      alert("Lỗi");
    })
  }

  messageStatus() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đã khóa doanh nghiệp',
      showConfirmButton: false,
      timer: 2000
    })
  }

  messagePropose() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thành công',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
