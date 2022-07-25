import {Component, OnInit} from '@angular/core';
import {RecruitmentNews} from '../../../model/recruitment-news';
import {CompanyService} from '../../../service/company.service';
import Swal from "sweetalert2";
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {
  recruimentNews: RecruitmentNews[] = [];

  constructor(private companyService: CompanyService,
              private recruitmentService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.listRecruiment();
  }

  listRecruiment() {
    this.recruitmentService.findUnlockRecruitmentNews().subscribe((data: RecruitmentNews[]) => {
      this.recruimentNews = data;
    }, error => {
      console.log("Lỗi");
    })
  }

  proposed(id: string) {
    this.recruitmentService.propose(id).subscribe(() => {
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
      title: 'Thành công!',
      showConfirmButton: false,
      timer: 2000
    })
  }

  updateStatus(id: string) {
    this.recruitmentService.updateStatus(id).subscribe(() => {
      this.messageStatus();
      this.listRecruiment();
    }, error => {
      alert("Lỗi!");
    })
  }

  messageStatus() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Chuyển trạng thái thành công!',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
