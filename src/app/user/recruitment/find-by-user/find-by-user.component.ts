import { Component, OnInit } from '@angular/core';
import {Company} from "../../../model/company";
import {CompanyService} from "../../../service/company.service";
import {RecruitmentNews} from "../../../model/recruitment-news";
import {RecruitmentNewsService} from "../../../service/recruitment-news.service";

@Component({
  selector: 'app-find-by-user',
  templateUrl: './find-by-user.component.html',
  styleUrls: ['./find-by-user.component.css']
})
export class FindByUserComponent implements OnInit {

  recruitmentNews: RecruitmentNews[] = [];
  checkList;

  constructor(private recruitmentNewsService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.findAllByUser();
  }

  findAllByUser() {
    const id = localStorage.getItem("ID")
    this.recruitmentNewsService.findAllUser(id).subscribe(result => {
      this.recruitmentNews = result;
      if (this.recruitmentNews.length==0){
        this.checkList = true;
      }
    }, error => {
      alert('Lỗi');
    });
  }

}
