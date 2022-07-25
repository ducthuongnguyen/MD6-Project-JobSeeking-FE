import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {AuthenticationService} from 'src/app/service/authentication.service';
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


  searchForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    // city:new FormControl('')
  });

  constructor(private recruitmentNewService: RecruitmentNewsService,
              private authenticationService: AuthenticationService,
              private recruitmentService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.findAll();
    this.findAllCity();
  }

  findAll() {
    this.recruitmentNewService.findAll().subscribe((result: RecruitmentNews[]) => {
      this.recruitmentNews = result;
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

  findByTitleWorkingPlaceExperience() {
    this.recruitmentService.findByTitleWorkingPlaceExperience(this.searchForm.value.title).subscribe(result => {
      // @ts-ignore
      this.recruitmentNews = result;
    }, error => {
      alert("Loi !!!")
    });
  }
}
