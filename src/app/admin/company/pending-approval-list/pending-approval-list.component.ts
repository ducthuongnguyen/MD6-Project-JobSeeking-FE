import {Component, OnInit} from '@angular/core';
import {Company} from '../../../model/company';
import {CompanyService} from '../../../service/company.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-pending-approval-list',
  templateUrl: './pending-approval-list.component.html',
  styleUrls: ['./pending-approval-list.component.css']
})
export class PendingApprovalListComponent implements OnInit {
  companies: Company[] = [];
  id: number;


  constructor(private companyService: CompanyService) {

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
      this.listPendingCompany();
      this.messageApprove();
    }, error => {
      alert("Lỗi");
    })
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
