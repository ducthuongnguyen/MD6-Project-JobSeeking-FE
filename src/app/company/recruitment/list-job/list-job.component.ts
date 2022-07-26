import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
              private fieldService: FieldService) {
  }

  ngOnInit() {
    this.findUnlockRecruitmentNews();
    this.findAllCity();
    this.findAllField();
  }

  findUnlockRecruitmentNews() {
    this.recruitmentNewService.findUnlockRecruitmentNews().subscribe((result: RecruitmentNews[]) => {
      this.recruitmentNews = result;
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
      alert("Loi !!!");
    });
  }

  findAllField() {
    this.fieldService.findAll().subscribe((fields: Field[]) => {
      this.fields = fields;
    }, error => {
      alert("Lỗi");
    })
  }


  onSearch() {
    this.recruitmentService.findAllByTitleSalaryExperiencePlaceField(this.searchForm.value.title, this.searchForm.value.from, this.searchForm.value.to, this.searchForm.value.experience, this.searchForm.value.place, this.searchForm.value.fieldId).subscribe((result: RecruitmentNews[]) => {
      console.log(this.searchForm.value);
      this.recruitmentNews = result;
      if (this.recruitmentNews.length == 0) {
        this.checkList = true;
      }
    }, error => {
      alert("Lỗi!");
    })

  }
}
