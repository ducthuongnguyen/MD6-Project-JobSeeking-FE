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
  checkList;
  constructor(private recruimentService: RecruitmentNewsService) { }

  ngOnInit() {
    this.listRecruiment();
  }
  listRecruiment(){
    this.recruimentService.findAllLockedRecruitmentNews().subscribe(data=>{
      this.cruimentnews=data;
      if (this.cruimentnews.length==0){
        this.checkList = true;
      }
    })
  }
}
