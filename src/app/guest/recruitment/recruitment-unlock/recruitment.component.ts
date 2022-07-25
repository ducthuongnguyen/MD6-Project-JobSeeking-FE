import {Component, OnInit} from '@angular/core';
import {RecruitmentNews} from '../../../model/recruitment-news';
import {RecruitmentNewsService} from '../../../service/recruitment-news.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {
  recruitmentNews: RecruitmentComponent[] = [];

  constructor(private recruitmentNewService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.findUnlockRecruitmentNews();
  }

  findUnlockRecruitmentNews() {
    this.recruitmentNewService.findUnlockRecruitmentNews().subscribe((result: RecruitmentNews[]) => {
      // @ts-ignore
      this.recruitmentNews = result;
    }, error => {
      alert(error);
    });
  }
}
