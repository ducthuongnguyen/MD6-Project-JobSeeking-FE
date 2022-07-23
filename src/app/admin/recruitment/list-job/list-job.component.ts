import {Component, OnInit} from '@angular/core';
import {RecruitmentNews} from '../../../model/recruitment-news';
import {CompanyService} from '../../../service/company.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {
  recruimentNews: RecruitmentNews[] = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.listRecruiment();
  }

  listRecruiment() {
    this.companyService.findAllRecruiment().subscribe(data => {
      this.recruimentNews = data;
    })
  }

  proposed(id: string) {
    this.companyService.proposeCompany(id).subscribe(() => {
      this.messagePropose();
      this.listRecruiment();
    }, error => {
      alert("Lỗi");
    })
  }

  messagePropose() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Đã khóa doanh nghiệp',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
