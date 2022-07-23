import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/model/company';
import {CompanyService} from 'src/app/service/company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.findAllProposedCompany();
  }

  findAllProposedCompany() {
    this.companyService.findAllProposedCompany().subscribe((result: Company[]) => {
      console.log(result);
      this.companies = result;
    }, error => {
      alert("Lỗi");
    })
  }
}
