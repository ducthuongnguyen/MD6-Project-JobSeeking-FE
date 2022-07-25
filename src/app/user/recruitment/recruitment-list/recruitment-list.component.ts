import { Component, OnInit } from '@angular/core';
import {RecruitmentNews} from "../../../model/recruitment-news";
import {RecruitmentNewsService} from "../../../service/recruitment-news.service";

@Component({
  selector: 'app-recruitment-list',
  templateUrl: './recruitment-list.component.html',
  styleUrls: ['./recruitment-list.component.css']
})
export class RecruitmentListComponent implements OnInit {
  recruitmentNews: RecruitmentNews[] = [];

  constructor(private recruitmentNewService: RecruitmentNewsService) { }

  ngOnInit() {
    this.findUnlockRecruitmentNews();
  }

  findUnlockRecruitmentNews() {
    this.recruitmentNewService.findUnlockRecruitmentNews().subscribe((result: RecruitmentNews[]) => {
      // @ts-ignore
      this.recruitmentNews = result;
    }, error => {
      console.log(error);
    });
  }
}
