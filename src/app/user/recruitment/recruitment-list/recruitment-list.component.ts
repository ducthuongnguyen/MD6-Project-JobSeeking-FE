import { Component, OnInit } from '@angular/core';
import {RecruitmentNews} from '../../../model/recruitment-news';
import {RecruitmentNewsService} from '../../../service/recruitment-news.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../../service/authentication.service';
import {Field} from '../../../model/field';
import {FieldService} from '../../../service/field.service';
import {PageEvent} from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruitment-list',
  templateUrl: './recruitment-list.component.html',
  styleUrls: ['./recruitment-list.component.css']
})
export class RecruitmentListComponent implements OnInit {
  recruitmentNews: RecruitmentNews[] = [];
  cities: any[] = [];
  fields: Field[] = [];
  loading: boolean;
  totalElements: number = 0;
  checkList;

  constructor(private recruitmentNewService: RecruitmentNewsService,
              private authenticationService: AuthenticationService,
              private fieldService: FieldService,
              private router: Router) { }

  ngOnInit() {
    this.findUnlockRecruitmentNews();
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

  findUnlockRecruitmentNews() {
    this.recruitmentNewService.findUnlockRecruitmentNews().subscribe((result: RecruitmentNews[]) => {
      // @ts-ignore
      this.recruitmentNews = result;
    }, error => {
      console.log(error);
    });
  }

  onSearch(request) {
    this.loading = true;
    // tslint:disable-next-line:max-line-length
    this.recruitmentNewService.findAllByTitleSalaryExperiencePlaceFieldPage(request, this.searchForm.value.title, this.searchForm.value.from, this.searchForm.value.to, this.searchForm.value.experience, this.searchForm.value.place, this.searchForm.value.fieldId).subscribe((result: RecruitmentNews[]) => {
      this.recruitmentNews = result['content'];
      this.totalElements = result['totalElements'];
      this.loading = false;
      this.router.navigate(['/user/recruitment/list'],
        { queryParams: { title: this.searchForm.value.title } }
      );
      this.searchForm = new FormGroup({
        title: new FormControl(''),
        from: new FormControl(''),
        to: new FormControl(''),
        experience: new FormControl(''),
        place: new FormControl(''),
        fieldId: new FormControl(''),
      });

      // tslint:disable-next-line:triple-equals
      if (this.recruitmentNews.length == 0) {
        this.checkList = true;
      }
    }, error => {
      this.loading = false;
    });
    this.checkList = false;
  }

  private getListRequest(request) {
    this.loading = true;
    this.recruitmentNewService.findPageUnlockRecruitmentNews(request).subscribe(data => {
      this.recruitmentNews = data['content'];
      this.totalElements = data['totalElements'];
      this.loading = false;
      // tslint:disable-next-line:triple-equals
      if (this.recruitmentNews.length == 0) {
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
}
