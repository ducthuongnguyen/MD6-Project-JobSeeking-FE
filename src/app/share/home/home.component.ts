import { Component, OnInit } from '@angular/core';
import {RecruitmentNews} from "../../model/recruitment-news";
import {CompanyService} from "../../service/company.service";
import {RecruitmentNewsService} from "../../service/recruitment-news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cruimentnews:RecruitmentNews[]=[];
  constructor(private recruimentService: RecruitmentNewsService) { }

  ngOnInit() {
    this.listRecruiment();
  }
  listRecruiment(){
    this.recruimentService.findAllProposedRecruitmentNews().subscribe(data=>{
      this.cruimentnews=data;
    })
  }

}
