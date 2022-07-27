import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Field} from 'src/app/model/field';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {AuthenticationService} from 'src/app/service/authentication.service';
import {FieldService} from 'src/app/service/field.service';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {
  recruitmentNews: RecruitmentNews[] = [];
  cities: any[] = [];
  title: string;
  fields: Field[] = [];
  checkList;

  searchForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    experience: new FormControl(''),
    place: new FormControl(''),
    fieldId: new FormControl(''),
  });

  constructor(private recruitmentNewService: RecruitmentNewsService,
              private authenticationService: AuthenticationService,
              private recruitmentService: RecruitmentNewsService,
              private fieldService: FieldService,
              private router: Router) {
  }

  ngOnInit() {
    this.findUnlockRecruitmentNews();
    this.findAllCity();
    this.findAllField();
  }

  findUnlockRecruitmentNews() {
    this.recruitmentNewService.findUnlockRecruitmentNews().subscribe((result: RecruitmentNews[]) => {
      this.recruitmentNews = result;
      this.router.navigate(
        ['/company/recruitment/list']);
      if (this.recruitmentNews.length == 0) {
        this.checkList = true;
      }
    }, error => {
      console.log(error);
    });
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


  onSearch() {
    const title = this.searchForm.value.title;
    const from = this.searchForm.value.from;
    const to = this.searchForm.value.to;
    const experience = this.searchForm.value.experience;
    const place = this.searchForm.value.place;
    const fieldId = this.searchForm.value.fieldId;
    this.recruitmentService.findAllByTitleSalaryExperiencePlaceField(title, from, to, experience, place, fieldId).subscribe((result: RecruitmentNews[]) => {
      this.recruitmentNews = result;
      this.router.navigate(
        ['/company/recruitment/list'],
        {
          queryParams: {title: title, from: from, to: to, experience: experience, place: place, fieldId: fieldId}
        });
      if (this.recruitmentNews.length == 0) {
        this.checkList = true;
      }
    }, error => {
      alert('Lỗi!');
    });
    this.checkList = false;
  }
}
