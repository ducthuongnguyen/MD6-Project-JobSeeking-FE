import {Component, OnInit} from '@angular/core';
import {RecruitmentNews} from '../../../model/recruitment-news';
import {RecruitmentNewsService} from '../../../service/recruitment-news.service';
import {AuthenticationService} from "../../../service/authentication.service";
import {Field} from "../../../model/field";
import {FieldService} from "../../../service/field.service";
import {error} from "protractor";
import {FormControl, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {
  recruitmentNews: RecruitmentNews[] = [];
  cities: any[] = [];
  fields: any[] = [];
  title: any[] = [];
  checkList;


  searchForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    cities: new FormControl('')
  });

  constructor(private recruitmentNewService: RecruitmentNewsService,
              private authenticationService: AuthenticationService,
              private fieldService: FieldService,
              private router: Router) {
  }

  ngOnInit() {
    this.findAllCity();
    this.findAllField();
    this.findUnlockRecruitmentNews();
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
      alert('Lỗi');
    });
  }

  findUnlockRecruitmentNews() {
    this.recruitmentNewService.findUnlockRecruitmentNews().subscribe((result: RecruitmentNews[]) => {
      this.router.navigate(
        ['/guest/recruitment']
      );
      // @ts-ignore
      this.recruitmentNews = result;
      if (this.recruitmentNews.length == 0) {
        this.checkList = true;
      }
    }, error => {
      alert(error);
    });
  }

  findByTitleWorkingPlace() {
    this.recruitmentNewService.findByTitleWorkingPlace(
      this.searchForm.value.title,
      this.searchForm.value.cities).subscribe(result => {
      this.recruitmentNews = result;
      this.router.navigate(
        ['/guest/recruitment'],
        { queryParams: { title: this.searchForm.value.title,cities: this.searchForm.value.cities } }
      );
      if (this.recruitmentNews.length == 0) {
        this.checkList = true;
      }
    }, error => {
      alert("Loi !!!")
    });
    this.checkList = false;
  }
}
