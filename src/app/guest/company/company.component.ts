import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../service/company.service";
import {Company} from "../../model/company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: Company[] = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.companyService.findAll().subscribe(result => {

      this.company = result;

    }, error => {
      console.log(error);
    });
  }

}
