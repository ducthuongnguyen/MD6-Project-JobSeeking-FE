import { Component, OnInit } from '@angular/core';
import {RecruitmentNews} from '../../../model/recruitment-news';
import {CompanyService} from '../../../service/company.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {
  cruimentnews:RecruitmentNews[]=[];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.listRecruiment();
  }
listRecruiment(){
   this.companyService.findAllRecruiment().subscribe(data=>{
     this.cruimentnews=data;
   })
}
}
