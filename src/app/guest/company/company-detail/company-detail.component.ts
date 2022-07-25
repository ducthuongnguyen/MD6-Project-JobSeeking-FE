import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Company} from "../../../model/company";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  constructor(private companyService: CompanyService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
        const id = pramMap.get('id');
        this.getDetail(id);
      }
    )
  }

  ngOnInit() {
  }

  getDetail(id: string) {
    this.companyService.getById(id).subscribe(data => {
      this.company = data;
    }, error => {
      alert("Lỗi!")
    })
  }

}
