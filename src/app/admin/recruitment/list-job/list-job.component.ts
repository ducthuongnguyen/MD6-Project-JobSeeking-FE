import {Component, OnInit} from '@angular/core';
import {RecruitmentNews} from '../../../model/recruitment-news';
import {CompanyService} from '../../../service/company.service';
import Swal from "sweetalert2";
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup} from '@angular/forms';
import {FieldService} from 'src/app/service/field.service';
import {Field} from 'src/app/model/field';
import {AuthenticationService} from 'src/app/service/authentication.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {
  recruimentNews: RecruitmentNews[] = [];
  totalElements: number = 0;
  loading: boolean;
  fields: Field[] = [];
  checkList;
  cities: any[] = [];

  constructor(private companyService: CompanyService,
              private recruitmentService: RecruitmentNewsService,
              private fieldService: FieldService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.getListRequest({page: 0, size: 5});
    this.findAllCity();
    this.findAllField();
  }

  searchForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    experience: new FormControl(''),
    place: new FormControl(''),
    fieldId: new FormControl(''),
  });

  private getListRequest(request) {
    this.loading = true;
    this.recruitmentService.findPageUnlockRecruitmentNews(request).subscribe(data => {
      this.recruimentNews = data['content'];
      this.totalElements = data['totalElements'];
      this.loading = false;
      if (this.recruimentNews.length == 0) {
        this.checkList = true;
      }
    }, error => {
      this.loading = false;
    });
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getListRequest(request);
  }

  proposed(id: string) {
    this.recruitmentService.propose(id).subscribe(() => {
      this.messagePropose();
      this.getListRequest({page: 0, size: 5});
    }, error => {
      alert("Lỗi");
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

  findAllCity() {
    this.authenticationService.findAllCity().subscribe(result => {
      this.cities = result;
    }, error => {
      alert('Loi !!!');
    });
  }

  findAllField() {
    this.fieldService.findAll().subscribe((fields: Field[]) => {
      this.fields = fields;
    }, error => {
      alert('Lỗi');
    });
  }

  onSearch(request) {
    this.loading = true;
    this.recruitmentService.findAllByTitleSalaryExperiencePlaceFieldPage(request,this.searchForm.value.title, this.searchForm.value.from, this.searchForm.value.to, this.searchForm.value.experience, this.searchForm.value.place, this.searchForm.value.fieldId).subscribe((result: RecruitmentNews[]) => {
      this.recruimentNews = result['content'];
      this.totalElements = result['totalElements'];
      this.loading = false;
      this.searchForm = new FormGroup({
        title: new FormControl(''),
        from: new FormControl(''),
        to: new FormControl(''),
        experience: new FormControl(''),
        place: new FormControl(''),
        fieldId: new FormControl(''),
      });
      if (this.recruimentNews.length == 0) {
        this.checkList = true;
      }
      console.log(this.recruimentNews.length)
    }, error => {
      this.loading = false
    });
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

  messagePropose() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thành công!',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
