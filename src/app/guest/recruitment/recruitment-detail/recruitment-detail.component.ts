import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';
import Swal from "sweetalert2";
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";
import * as moment from "moment/moment";

@Component({
  selector: 'app-recruitment-detail',
  templateUrl: './recruitment-detail.component.html',
  styleUrls: ['./recruitment-detail.component.css']
})
export class RecruitmentDetailComponent implements OnInit {
  recruitmentNews: RecruitmentNews = {};
  checkRole;
  checkRoleNo;
  user: User;
  check;
  checkApply;
  checkDate;
  idRecruitment;
  obj: any;

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
      this.checkRoleNo = true;
    }
    if (role == "USER"){
      this.checkRole = true;
    }
  }

  getDetail(id: string) {
    const idUser = localStorage.getItem('ID');
    this.recruitmentNewsService.findById(id).subscribe(data => {
      this.recruitmentNews = data;
      this.check = true;
      for (let i = 0; i < this.recruitmentNews.users.length; i++) {
        if (this.recruitmentNews.users[i].id == idUser) {
          this.checkApply = true;
          this.check = false;
        }
      }
      if (moment(this.recruitmentNews.expiredDate) < moment()) {
        this.checkDate = true;
        this.check = false;
      }

    }, error => {
      alert("Lỗi!")
    })
  }
  applyRecruitment(id: any) {
    const idUser = localStorage.getItem('ID');
    this.userService.getById(idUser).subscribe((result) => {
      this.user = result;
      this.applyRe(id, this.user);
    }, e => {
      console.log(e);
    });
  }

  applyRe(id: any, user: User) {
    const idUser = localStorage.getItem('ID');
    this.recruitmentNewsService.applyRecruitment(id, user).subscribe((result) => {
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

  messageApply() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ứng tuyển thành công',
      showConfirmButton: false,
      timer: 2000
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
  saveMessage(obj: any) {
    this.recruitmentNewsService.saveMessage(obj).subscribe(() => {
    }, error => {
      alert('Lỗi message');
    });
  }
}
