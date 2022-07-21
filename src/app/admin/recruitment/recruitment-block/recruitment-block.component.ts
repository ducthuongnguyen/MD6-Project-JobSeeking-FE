import { Component, OnInit } from '@angular/core';
import {RecruitmentNewsService} from "../../../service/recruitment-news.service";
import {RecruitmentNews} from "../../../model/recruitment-news";
import {CompanyService} from "../../../service/company.service";

@Component({
  selector: 'app-recruitment-block',
  templateUrl: './recruitment-block.component.html',
  styleUrls: ['./recruitment-block.component.css']
})
export class RecruitmentBlockComponent implements OnInit {
  cruimentnews:RecruitmentNews[]=[];
  constructor(private cruimentService: RecruitmentNewsService) { }

  ngOnInit() {
    this.listRecruiment();
  }
  listRecruiment(){
    this.cruimentService.findAllLockedRecruitmentNews().subscribe(data=>{
      this.cruimentnews=data;
    })
  }
}
