import { Component, OnInit } from '@angular/core';
import { RecruitmentNews } from 'src/app/model/recruitment-news';
import { RecruitmentNewsService } from 'src/app/service/recruitment-news.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }
}
