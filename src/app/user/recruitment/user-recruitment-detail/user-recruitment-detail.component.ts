import { Component, OnInit } from '@angular/core';
import {RecruitmentNews} from "../../../model/recruitment-news";
import {RecruitmentNewsService} from "../../../service/recruitment-news.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import Swal from "sweetalert2";
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-user-recruitment-detail',
  templateUrl: './user-recruitment-detail.component.html',
  styleUrls: ['./user-recruitment-detail.component.css']
})
export class UserRecruitmentDetailComponent implements OnInit {

  recruitmentNews: RecruitmentNews = {};
  checkRole;
  user: User;

  constructor(private recruitmentNewsService: RecruitmentNewsService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
        const id = pramMap.get('id');
        this.getDetail(id);
      }
    )
  }

  ngOnInit() {
    const role = localStorage.getItem('ROLE');
    if (role == null) {
      this.checkRole = true;
    }
  }

  getDetail(id: string) {
    this.recruitmentNewsService.findById(id).subscribe(data => {
      this.recruitmentNews = data;
    }, error => {
      alert("Lỗi!")
    })
  }

  alertLogin() {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Bạn cần đăng nhập để ứng tuyển',
      showConfirmButton: false,
      timer: 2000
    })
  }
  applyRecruitment(id: any) {
    const idUser = localStorage.getItem('ID');
    this.userService.getById(idUser).subscribe((result) => {
      this.user = result;
      this.applyRe(id,this.user);
    }, e => {
      console.log(e);
    });
  }

  applyRe(id: any,user: User){
    this.recruitmentNewsService.applyRecruitment(id,user).subscribe((result) => {
      this.messageApply();
    }, error => {
      alert("Lỗi");
    })
  }

  messageApply() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ứng tuyển thành công',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
