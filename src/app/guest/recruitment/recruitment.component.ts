import {Component, OnInit} from '@angular/core';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {
  list: RecruitmentComponent[] = [];

  constructor(private recruitmentNewService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.findAllNews();
  }

  findAllNews() {
    this.recruitmentNewService.findAll().subscribe((result: RecruitmentNews[]) => {
      // @ts-ignore
      this.list = result;
    }, error => {
      console.log(error);
    });
  }
}
