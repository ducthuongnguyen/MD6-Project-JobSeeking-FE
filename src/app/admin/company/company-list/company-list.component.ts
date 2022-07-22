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
    this.getListRequest({page: 0, size: 5});
  }

  private getListRequest(request) {
    this.loading = true;
    this.companyService.pageCompany(request).subscribe(data => {
      console.log(data.content)
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
    console.log('request[size]=====', request['size']);
    this.getListRequest(request);
  }

  updateStatus(id: string) {
    // let status = document.getElementById("status").innerHTML;
    this.companyService.updateStatus(id).subscribe(() => {
      // if (status.trim() == "Khóa") {
      //   document.getElementById("status").innerHTML = "Không khóa";
      // } else document.getElementById("status").innerHTML = "Khóa";
      this.messageStatus();
    }, error => {
      alert("Lỗi");
    })
  }

  messageStatus() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đã chuyển trạng thái',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
