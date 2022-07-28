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
    // this.findUnlockCompany();
    this.getListRequest({page: 0, size: 5});
  }

  private getListRequest(request) {
    this.loading = true;
    this.companyService.findPageUnlockCompany(request).subscribe(data => {
      this.companies = data['content'];
      this.totalElements = data['totalElements'];
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getListRequest(request);

    // this.getSearchRequest(request,this.name);
  }

  updateStatus(id: string) {
    this.companyService.updateStatus(id).subscribe(() => {
      this.messageStatus();
      this.getListRequest({page: 0, size: 5});
    }, error => {
      alert("Lỗi");
    })
  }

  proposeCompany(id: string) {
    this.companyService.proposeCompany(id).subscribe(() => {
      this.messagePropose();
      this.getListRequest({page: 0, size: 5});
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
      title: 'Thay đổi thành công',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
