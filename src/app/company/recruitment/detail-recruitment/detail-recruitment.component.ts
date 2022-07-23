import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';

@Component({
  selector: 'app-detail-recruitment',
  templateUrl: './detail-recruitment.component.html',
  styleUrls: ['./detail-recruitment.component.css']
})
export class DetailRecruitmentComponent implements OnInit {
  recruitmentNews: RecruitmentNews = {};

  constructor(private recruitmentNewsService: RecruitmentNewsService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
        const id = Number(pramMap.get('id'));
        this.getDetail(id);
      }
    )
  }

  ngOnInit() {
  }

  getDetail(id: number) {
    this.recruitmentNewsService.findById(id).subscribe(data => {
      console.log(data);
      this.recruitmentNews = data;
    }, error => {
      console.log(error)
    })
  }
}
