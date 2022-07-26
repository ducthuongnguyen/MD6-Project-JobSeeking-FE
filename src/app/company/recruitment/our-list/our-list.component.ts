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
  checkList;

  constructor(private recruitmentService: RecruitmentNewsService) {
  }


  ngOnInit() {
    this.findAll();
  }

  findAll() {
    const id = localStorage.getItem('ID');
    this.recruitmentService.findAllByCompanyId(id).subscribe((result: RecruitmentNews[]) => {
      console.log(result)
      this.recruitmentNews = result;
      if (this.recruitmentNews.length==0){
        this.checkList = true;
      }
    }, error => {
      console.log(error);
    });
  }

  showEditForm() {

  }

  updateStatus(id: string) {
    this.recruitmentService.updateStatus(id).subscribe(() => {
      this.findAll();
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
