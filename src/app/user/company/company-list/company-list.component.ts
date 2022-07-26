import { Component, OnInit } from '@angular/core';
import {Company} from "../../../model/company";
import {CompanyService} from "../../../service/company.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = [];


  constructor(private companyService: CompanyService,
              private router: Router,
              private actRouter: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getListCompany();
    this.findById();
    this.ngSubmit();
  }

  getListCompany() {
    this.companyService.findApprovedCompany().subscribe((listCompany:Company[]) => {
      console.log(listCompany)
      this.companies = listCompany;
    }, error => {
      alert("loi")
    });
  }

  findById() {
    this.actRouter.paramMap.subscribe(comId => {
      const id = comId.get('id');
      this.companyService.findCompanyById(id).subscribe(result => {
        // @ts-ignore
        this.companies = result;
      });
    })
  }

  ngSubmit() {
    // @ts-ignore
    this.companyService.updateStatus(this.company.id, this.company);
  }



}
