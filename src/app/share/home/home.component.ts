import {Component, OnInit} from '@angular/core';
import {Company} from 'src/app/model/company';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {CompanyService} from 'src/app/service/company.service';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companies: Company[] = [];
  recruitmentNews: RecruitmentNews[] = [];
  recruitment: RecruitmentNews;

  constructor(private companyService: CompanyService,
              private recruitmentNewsService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.findAllProposedCompany();
    this.findAllProposedNews();
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

  messageLogin() {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Bạn cần đăng nhập để ứng tuyển',
      showConfirmButton: false,
      timer: 2000
    })
  }
  //
  // seeDetail(id: string) {
  //   this.recruitmentNewsService.findById(id).subscribe((data: RecruitmentNews) => {
  //     this.recruitment = data;
  //   }, error => {
  //     alert("Lỗi");
  //   })
  // }
}
