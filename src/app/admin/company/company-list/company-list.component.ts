import {Component, OnInit} from '@angular/core';
import {Company} from "../../../model/company";
import {CompanyService} from "../../../service/company.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {PageEvent} from "@angular/material/paginator";

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
      this.companies = data['content'];
      console.log('data[content]--------', data['content']);
      this.totalElements = data['totalElements'];
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }
  nextPage(event: PageEvent) {
    console.log('event=====', event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    console.log('request[size]=====', request['size']);
    this.getListRequest(request);
  }



}
