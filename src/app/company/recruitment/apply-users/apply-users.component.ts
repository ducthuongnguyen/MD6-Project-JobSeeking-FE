import {Component, OnInit} from '@angular/core';
import {RecruitmentNews} from "../../../model/recruitment-news";
import {RecruitmentNewsService} from "../../../service/recruitment-news.service";
import {User} from "../../../model/user";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-apply-users',
  templateUrl: './apply-users.component.html',
  styleUrls: ['./apply-users.component.css']
})
export class ApplyUsersComponent implements OnInit {
  users: User[] = [];
  checkList;
  id: any

  constructor(private recruitmentService: RecruitmentNewsService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit() {
    this.findUserByRecruitment();
  }

  findUserByRecruitment() {
    this.recruitmentService.findById(this.id).subscribe((result: RecruitmentNews) => {
      console.log(result)
      // @ts-ignore
      this.users = result.users;
      if (this.users.length == 0) {
        this.checkList = true;
      }
    }, error => {
      console.log(error);
    });
  }

}
