import { Component, OnInit } from '@angular/core';
import {RecruitmentNews} from "../../../model/recruitment-news";
import {RecruitmentNewsService} from "../../../service/recruitment-news.service";
import Swal from "sweetalert2";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-recruitment-by-company',
  templateUrl: './recruitment-by-company.component.html',
  styleUrls: ['./recruitment-by-company.component.css']
})
export class RecruitmentByCompanyComponent implements OnInit {

  recruitmentNews: RecruitmentNews[] = [];
  checkList;
  id: any;

  constructor(private recruitmentService: RecruitmentNewsService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
        this.id = pramMap.get('id');
      }
    )
  }


  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.recruitmentService.findAllByCompanyId(this.id).subscribe((result: RecruitmentNews[]) => {
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
