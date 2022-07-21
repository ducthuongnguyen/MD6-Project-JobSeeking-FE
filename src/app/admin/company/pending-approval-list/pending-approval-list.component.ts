import { Component, OnInit } from '@angular/core';
import {Company} from '../../../model/company';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-pending-approval-list',
  templateUrl: './pending-approval-list.component.html',
  styleUrls: ['./pending-approval-list.component.css']
})
export class PendingApprovalListComponent implements OnInit {
  companies: Company[] = [];


  constructor(private companyService: CompanyService,
              private router: Router,
              private actRouter: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.listPendingCompany();

  }

  listPendingCompany() {
    this.companyService.findAllPendingCompany().subscribe((listCompany:Company[]) => {
      console.log(listCompany)
      this.companies = listCompany;
    }, error => {
      alert("loi")
    });
  }


}
