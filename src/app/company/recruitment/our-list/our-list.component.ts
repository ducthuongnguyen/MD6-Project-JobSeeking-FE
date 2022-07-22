import {Component, OnInit} from '@angular/core';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-our-list',
  templateUrl: './our-list.component.html',
  styleUrls: ['./our-list.component.css']
})
export class OurListComponent implements OnInit {
  recruitmentNews: RecruitmentNews[] = [];

  constructor(private recruitmentService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.findAll()
  }

  findAll() {
    this.recruitmentService.findAllByCompanyId().subscribe((result: RecruitmentNews[]) => {
      this.recruitmentNews = result;
    }, error => {
      console.log(error);
    });
  }

  showEditForm() {

  }

  updateStatus(id: string) {
    let status = document.getElementById("status").innerHTML;
    this.recruitmentService.updateStatus(id).subscribe(() => {
      if (status.trim() === "KHÓA") {
        document.getElementById("status").innerHTML = "KHÔNG KHÓA";
      } else
        document.getElementById("status").innerHTML = 'KHÓA';
      this.messageStatus();
    }, error => {
      alert("Lỗi");
    });
  }

  messageStatus() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Chuyển trạng thái thành công',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
