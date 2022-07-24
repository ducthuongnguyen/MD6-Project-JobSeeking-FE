import {Component, OnInit} from '@angular/core';
import {Company} from '../../../model/company';
import {CompanyService} from '../../../service/company.service';
import {ActivatedRoute} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-pending-approval-list',
  templateUrl: './pending-approval-list.component.html',
  styleUrls: ['./pending-approval-list.component.css']
})
export class PendingApprovalListComponent implements OnInit {
  companies: Company[] = [];


  constructor(private companyService: CompanyService,
              private actRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this.listPendingCompany();

  }

  listPendingCompany() {
    this.companyService.findPendingCompany().subscribe((listCompany: Company[]) => {
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

  approveCompany(id: string) {
    // @ts-ignore
    this.companyService.approveCompany(id).subscribe(() => {
      this.listPendingCompany();
      this.messageApprove();
    }, error => {
      alert("Lỗi");
    })
  }

  ngSubmit() {
    // @ts-ignore
    this.companyService.updateStatus(this.companies.id, this.companies);
  }

  messageApprove() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đã duyệt',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
