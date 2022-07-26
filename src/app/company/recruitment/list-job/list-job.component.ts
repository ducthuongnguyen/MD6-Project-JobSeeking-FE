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
    cities:new FormControl('')
  });

  constructor(private recruitmentNewService: RecruitmentNewsService,
              private authenticationService: AuthenticationService,
              private recruitmentService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.findUnlockRecruitmentNews();
    this.findAllCity();
  }

  findUnlockRecruitmentNews() {
    this.recruitmentNewService.findUnlockRecruitmentNews().subscribe((result: RecruitmentNews[]) => {
      console.log(result);
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

  findByTitleWorkingPlace() {
    this.recruitmentService.findByTitleWorkingPlace(this.searchForm.value.title,this.searchForm.value.cities).subscribe(result => {
      // @ts-ignore
      this.recruitmentNews = result;
    }, error => {
      alert("Loi !!!")
    });
  }
}
