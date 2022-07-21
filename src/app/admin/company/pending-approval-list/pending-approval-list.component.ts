import {Component, OnInit} from '@angular/core';
import {Company} from '../../../model/company';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-pending-approval-list',
  templateUrl: './pending-approval-list.component.html',
  styleUrls: ['./pending-approval-list.component.css']
})
export class PendingApprovalListComponent implements OnInit {
  companies: Company[] = [];
  id: number;


  constructor(private companyService: CompanyService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {

  }

  ngOnInit() {
    this.listPendingCompany();

  }

  listPendingCompany() {
    this.companyService.findAllPendingCompany().subscribe((listCompany: Company[]) => {
      this.companies = listCompany;
    }, error => {
      alert("loi")
    });
  }

  approveCompany(id: string) {
    // @ts-ignore
    this.companyService.approveCompany(id).subscribe(() => {
      console.log("\\\\\\\\\\\\")
      this.listPendingCompany();
      alert("Duyệt thành công")
      console.log("vao ham")
    }, error => {
      alert("Lỗi");
    })
  }
}
