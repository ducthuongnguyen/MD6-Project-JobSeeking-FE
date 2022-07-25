import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';
import Swal from "sweetalert2";
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";

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
      this.checkRoleNo = true;
    }
    if (role == "USER"){
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

  alertLogin() {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Bạn cần đăng nhập để ứng tuyển',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
