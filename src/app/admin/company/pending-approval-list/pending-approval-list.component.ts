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
this.findById();
  }

  listPendingCompany() {
    this.companyService.findAllPendingCompany().subscribe((listCompany:Company[]) => {
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
    this.companyService.updateStatus(this.companies.id, this.companies);
  }

}
