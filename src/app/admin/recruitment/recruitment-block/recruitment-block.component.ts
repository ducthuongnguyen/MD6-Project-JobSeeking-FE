import {Component, OnInit} from '@angular/core';
import {RecruitmentNewsService} from "../../../service/recruitment-news.service";
import {RecruitmentNews} from "../../../model/recruitment-news";
import {CompanyService} from "../../../service/company.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recruitment-block',
  templateUrl: './recruitment-block.component.html',
  styleUrls: ['./recruitment-block.component.css']
})
export class RecruitmentBlockComponent implements OnInit {
  recruitmentNews: RecruitmentNews[] = [];

  constructor(private recruimentService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.listRecruiment();
  }

  listRecruiment() {
    this.recruimentService.findAllLockedRecruitmentNews().subscribe(data => {
      this.recruitmentNews = data;
    })
  }

  updateStatus(id: string) {
    this.recruimentService.updateStatus(id).subscribe(() => {
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
