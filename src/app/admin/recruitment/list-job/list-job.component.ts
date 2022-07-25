import {Component, OnInit} from '@angular/core';
import {RecruitmentNews} from '../../../model/recruitment-news';
import {CompanyService} from '../../../service/company.service';
import Swal from "sweetalert2";
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {
  recruimentNews: RecruitmentNews[] = [];
  totalElements: number = 0;
  loading: boolean;

  constructor(private companyService: CompanyService,
              private recruitmentService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.getListRequest({page: 0, size: 5});

  }

  private getListRequest(request) {
    this.loading = true;
    this.recruitmentService.findPageUnlockRecruitmentNews(request).subscribe(data => {
      this.recruimentNews = data['content'];
      console.log('data[content]--------', data['content']);
      this.totalElements = data['totalElements'];
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  nextPage(event: PageEvent) {
    console.log('event=====', event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    console.log('request[size]=====', request['size']);
    this.getListRequest(request);

    // this.getSearchRequest(request,this.name);
  }

  proposed(id: string) {
    this.recruitmentService.propose(id).subscribe(() => {
      this.messagePropose();
      this.getListRequest({page: 0, size: 5});

    }, error => {
      alert("Lỗi");
    })
  }

  messagePropose() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thành công!',
      showConfirmButton: false,
      timer: 2000
    })
  }

  updateStatus(id: string) {
    this.recruitmentService.updateStatus(id).subscribe(() => {
      this.messageStatus();
      this.getListRequest({page: 0, size: 5});
    }, error => {
      alert("Lỗi!");
    })
  }

  messageStatus() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Chuyển trạng thái thành công!',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
