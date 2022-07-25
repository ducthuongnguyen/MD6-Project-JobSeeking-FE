import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../service/company.service';
import {Company} from '../../../model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    // this.findUnlockCompany();
  }

  // findUnlockCompany() {
  //   this.companyService.findUnlockCompany().subscribe(result => {
  //     this.companies = result;
  //   }, error => {
  //     alert("Lỗi");
  //   });
  // }

}
