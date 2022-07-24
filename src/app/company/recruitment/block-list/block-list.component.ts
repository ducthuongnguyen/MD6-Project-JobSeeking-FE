import { Component, OnInit } from '@angular/core';
import {RecruitmentNews} from "../../../model/recruitment-news";
import {RecruitmentNewsService} from "../../../service/recruitment-news.service";

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent implements OnInit {
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
