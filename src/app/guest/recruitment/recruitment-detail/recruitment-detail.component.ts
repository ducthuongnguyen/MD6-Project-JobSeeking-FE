import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';

@Component({
  selector: 'app-recruitment-detail',
  templateUrl: './recruitment-detail.component.html',
  styleUrls: ['./recruitment-detail.component.css']
})
export class RecruitmentDetailComponent implements OnInit {
  recruitmentNews: RecruitmentNews = {};

  constructor(private recruitmentNewsService: RecruitmentNewsService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
        const id = pramMap.get('id');
        this.getDetail(id);
      }
    )
  }

  ngOnInit() {

  }

  getDetail(id: string) {
    this.recruitmentNewsService.findById(id).subscribe(data => {
      this.recruitmentNews = data;
      console.log(data)
    }, error => {
      alert("Lỗi!")
    })
  }
}
