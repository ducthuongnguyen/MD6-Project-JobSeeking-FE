import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/model/company';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {CompanyService} from 'src/app/service/company.service';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';
import Swal from "sweetalert2";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companies: Company[] = [];
  recruitmentNews: RecruitmentNews[] = [];
  recruitment: RecruitmentNews;
  id: any;
  user:User;
  checkRoleNo;
  checkRole;

  constructor(private companyService: CompanyService,
              private recruitmentNewsService: RecruitmentNewsService,
              public userService: UserService) {
  }

  ngOnInit() {
    this.findAllProposedCompany();
    this.findAllProposedNews();
    const role = localStorage.getItem('ROLE');
    if (role == null) {
      this.checkRoleNo = true;
    }
    if (role == "USER"){
      this.checkRole = true;
    }
  }

  findAllProposedCompany() {
    this.companyService.findProposedCompany().subscribe((result: Company[]) => {
      this.companies = result;
    }, error => {
      alert("Lỗi");
    })
  }

  findAllProposedNews() {
    this.recruitmentNewsService.findAllProposedNews().subscribe((result: RecruitmentNews[]) => {
      this.recruitmentNews = result;
    }, error => {
      alert("Lỗi");
    })
  }
  applyRecruitment(id: any) {
    // console.log("/////////")
    const idUser = localStorage.getItem('ID');
    // this.userService.getById(idUser).subscribe(result => {
    //
    //   this.user = result;
    //   console.log("/////////")
    //   console.log(this.user)
    //   this.applyRe(id,this.user);
    // }, error => {
    //   alert("Lỗi");
    // })

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

  messageLogin() {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Bạn cần đăng nhập để ứng tuyển',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
