import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/model/company';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {CompanyService} from 'src/app/service/company.service';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';
import Swal from "sweetalert2";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companies: Company[] = [];
  recruitmentNews: RecruitmentNews[] = [];
  recruitmentNews1: RecruitmentNews[] = [];
  recruitment: RecruitmentNews;
  id: any;
  user:User;
  checkRoleNo;
  checkRole;
  cities: any[] = [];
  title: string;

  searchForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    cities:new FormControl('')
  });

  constructor(private companyService: CompanyService,
              private recruitmentNewsService: RecruitmentNewsService,
              public userService: UserService,
              private authenticationService:AuthenticationService,
              private recruitmentService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.findAllCity();
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

  findAllCity() {
    this.authenticationService.findAllCity().subscribe(result => {
      this.cities = result;
    }, error => {
      alert("Loi !!!");
    });
  }
  findByTitleWorkingPlace() {
    this.recruitmentService.findByTitleWorkingPlace(this.searchForm.value.title,this.searchForm.value.cities).subscribe(result => {
      // @ts-ignore
      this.recruitmentNews1 = result;
    }, error => {
      alert("Loi !!!")
    });
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
