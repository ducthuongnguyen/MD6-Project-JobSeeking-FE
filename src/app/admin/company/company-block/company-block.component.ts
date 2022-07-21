import { Component, OnInit } from '@angular/core';
import {Company} from '../../../model/company';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

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
    this.companyService.findAllBlockCompany().subscribe((listCompany:Company[]) => {
      console.log(listCompany)
      this.companies = listCompany;
    }, error => {
      alert("loi")
    });
  }

}
