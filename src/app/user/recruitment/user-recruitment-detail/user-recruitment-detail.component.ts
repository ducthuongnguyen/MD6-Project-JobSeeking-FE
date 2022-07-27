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
  recruitmentNewsApply: RecruitmentNews = {};
  checkRole;
  user: User;
  obj: any;
  checkApply;
  idRecruitment;
  constructor(private recruitmentNewsService: RecruitmentNewsService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
         this.idRecruitment = pramMap.get('id');
      }
    )
  }

  ngOnInit() {
    this.getDetail(this.idRecruitment);
    const role = localStorage.getItem('ROLE');
    if (role == null) {
      this.checkRole = true;
    }
  }

  getDetail(id: string) {
    const idUser = localStorage.getItem('ID');
    this.recruitmentNewsService.findById(id).subscribe(data => {
      this.recruitmentNews = data;
      for (let i = 0; i < this.recruitmentNews.users.length; i++) {
        if (this.recruitmentNews.users[i].id == idUser){
          this.checkApply = true;
        }
      }
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
    const idUser = localStorage.getItem('ID');
      this.recruitmentNewsService.applyRecruitment(id,user).subscribe((result) => {
        this.recruitmentNews = result;
        this.messageApply();
        this.getDetail(this.idRecruitment);
        this.obj = {
          user: {
            id: idUser
          },
          company: {
            id: this.recruitmentNews.company.id
          },
          recruitmentNews: {
            id: this.recruitmentNews.id
          }
        };
        this.saveMessage(this.obj);
    }, error => {
      alert("Lỗi");
    })
    }
    // else {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'info',
    //     title: 'Bạn đã ứng tuyển rồi',
    //     showConfirmButton: false,
    //     timer: 2000
    //   })
    // }

  messageApply() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ứng tuyển thành công',
      showConfirmButton: false,
      timer: 2000
    })
  }

  saveMessage(obj: any) {
    this.recruitmentNewsService.saveMessage(obj).subscribe(() => {
    }, error => {
      alert('Lỗi message');
    }) ;
  }

}
