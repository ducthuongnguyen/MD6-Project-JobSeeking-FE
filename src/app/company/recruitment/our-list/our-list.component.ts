import {Component, OnInit} from '@angular/core';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';

@Component({
  selector: 'app-our-list',
  templateUrl: './our-list.component.html',
  styleUrls: ['./our-list.component.css']
})
export class OurListComponent implements OnInit {
  recruitmentNews: RecruitmentNews[] = [];

  constructor(private recruitmentService: RecruitmentNewsService) {
  }

  ngOnInit() {
    this.findAll()
  }

  findAll() {
    this.recruitmentService.findAllByCompanyId().subscribe((result: RecruitmentNews[]) => {
      this.recruitmentNews = result;
    }, error => {
      console.log(error);
    });
  }

  showEditForm() {

  }

  updateStatus(id: string) {
    this.recruitmentService.updateStatus(id).subscribe(() => {
      alert("ok");
    }, error => {
      alert("Lỗi");
    });
  }
}
