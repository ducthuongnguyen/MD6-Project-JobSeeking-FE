import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruitmentNews } from 'src/app/model/recruitment-news';
import { FieldService } from 'src/app/service/field.service';
import { RecruitmentNewsService } from 'src/app/service/recruitment-news.service';
import { VacancyService } from 'src/app/service/vacancy.service';

const idCompany = localStorage.getItem('COMPANYID');

// @ts-ignore
@Component({
  selector: 'app-add-recruitment',
  templateUrl: './add-recruitment.component.html',
  styleUrls: ['./add-recruitment.component.css']
})

export class AddRecruitmentComponent implements OnInit {
  recruitmentForm: FormGroup = new FormGroup({
    title:new FormControl(),
    company: new FormControl(),
    vacancyId:new FormControl(),
    fieldId:new FormControl(),
    salaryForm:new FormControl(),
    salaryTo:new FormControl(),
    expiredDate:new FormControl(),
    employeeQuantity:new FormControl(),
    requiredExperience:new FormControl(),
    gender:new FormControl(),
    workingPlace:new FormControl(),
    description:new FormControl(),
    workingTypeId:new FormControl()
  });

  obj: any;

  listRecruitment: RecruitmentNews[] = [];

  constructor(private recruimentNewsService: RecruitmentNewsService,
              private vacancyService: VacancyService,
              private fieldService: FieldService,
              private router: Router) { }

  ngOnInit() {
  }

  getVacancy(){
    this.vacancyService.
  }

  submit(){
    this.obj = {
      title: this.recruitmentForm.value.title,
      company: {
        id: idCompany
      },
      vacancy: {
        id: this.recruitmentForm.value.vacancyId
      },
      field: {
        id: this.recruitmentForm.value.fieldId
      },
      salaryForm: this.recruitmentForm.value.salaryForm,
      salaryTo: this.recruitmentForm.value.salaryTo,
      expiredDate: this.recruitmentForm.value.expiredDate,
      employeeQuantity: this.recruitmentForm.value.employeeQuantity,
      requiredExperience: this.recruitmentForm.value.requiredExperience,
      gender: this.recruitmentForm.value.gender,
      workingPlace: this.recruitmentForm.value.workingPlace,
      description: this.recruitmentForm.value.description,
      workingType: {
        id: this.recruitmentForm.value.workingTypeId
      }
    };
    this.recruimentNewsService.save(this.obj).subscribe(() => {
      alert("Save recruitment successfully");
    },error => {
      console.log("Error: ", error);
    });
  }

  goBack(){
    this.router.navigate(['/company/recruitment/our-list/', idCompany]);
  }
}
