import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  getDetail(){

  }
}
