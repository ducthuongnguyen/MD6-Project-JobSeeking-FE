import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/model/company';
import {CompanyService} from 'src/app/service/company.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.companyService.findAll().subscribe((result: Company[]) => {
      this.companies = result;
      console.log(result);
    }, error => {
      console.log(error);
    })
  }
}
