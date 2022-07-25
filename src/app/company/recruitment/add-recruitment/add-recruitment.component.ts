import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RecruitmentNews} from 'src/app/model/recruitment-news';
import {FieldService} from 'src/app/service/field.service';
import {RecruitmentNewsService} from 'src/app/service/recruitment-news.service';
import {VacancyService} from 'src/app/service/vacancy.service';
import {Vacancy} from '../../../model/vacancy';
import {Field} from '../../../model/field';
import Swal from 'sweetalert2';

const idCompany = localStorage.getItem('COMPANYID');

// @ts-ignore
@Component({
  selector: 'app-add-recruitment',
  templateUrl: './add-recruitment.component.html',
  styleUrls: ['./add-recruitment.component.css']
})

export class AddRecruitmentComponent implements OnInit {
  recruitmentForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    vacancyId: new FormControl('', [Validators.required]),
    fieldId: new FormControl('', [Validators.required]),
    salaryForm: new FormControl('', [Validators.required]),
    salaryTo: new FormControl('', [Validators.required]),
    expiredDate: new FormControl('', [Validators.required]),
    employeeQuantity: new FormControl('', [Validators.required]),
    requiredExperience: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    workingPlace: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    workingTypeId: new FormControl('', [Validators.required])
  });

  obj: any;
  listVacancy: Vacancy[] = [];
  listField: Field[] = [];

  constructor(private recruimentNewsService: RecruitmentNewsService,
              private vacancyService: VacancyService,
              private fieldService: FieldService,
              private router: Router) {
  }

  ngOnInit() {
    this.getVacancy();
    this.getField();
  }

  getVacancy() {
    this.vacancyService.findAll().subscribe((data) => {
      this.listVacancy = data;
    }, error => {
      console.log(error);
    });
  }

  getField() {
    this.fieldService.findAll().subscribe((data) => {
      console.log(data);
      this.listField = data;
    }, error => {
      console.log(error);
    });
  }

  submit() {
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
      salaryFrom: this.recruitmentForm.value.salaryForm,
      salaryTo: this.recruitmentForm.value.salaryTo,
      expiredDate: this.recruitmentForm.value.expiredDate,
      employeeQuantity: this.recruitmentForm.value.employeeQuantity,
      requiredExperience: this.recruitmentForm.value.requiredExperience,
      gender: this.recruitmentForm.value.gender,
      workingPlace: this.recruitmentForm.value.workingPlace,
      description: this.recruitmentForm.value.description,
      workingType: this.recruitmentForm.value.workingTypeId
    };
    console.log('j', this.obj);
    this.recruimentNewsService.save(this.obj).subscribe(() => {
      this.messageSave();
    }, error => {
      console.log('Error: ', error);
    });
  }

  messageSave() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thêm mới tin tuyển dụng thành công',
      showConfirmButton: false,
      timer: 3000
    });
  }

  goBack() {
    this.router.navigate(['/company/recruitment/our-list/']);
  }

  get title() {
    return this.recruitmentForm.get('title');
  }

  get vacancyId() {
    return this.recruitmentForm.get('vacancyId');
  }

  get fieldId() {
    return this.recruitmentForm.get('fieldId');
  }

  get salaryForm() {
    return this.recruitmentForm.get('salaryForm');
  }

  get salaryTo() {
    return this.recruitmentForm.get('salaryTo');
  }

  get expiredDate() {
    return this.recruitmentForm.get('expiredDate');
  }

  get employeeQuantity() {
    return this.recruitmentForm.get('employeeQuantity');
  }

  get requiredExperience() {
    return this.recruitmentForm.get('requiredExperience');
  }

  get gender() {
    return this.recruitmentForm.get('gender');
  }

  get workingPlace() {
    return this.recruitmentForm.get('workingPlace');
  }

  get description() {
    return this.recruitmentForm.get('description');
  }

  get workingTypeId() {
    return this.recruitmentForm.get('workingTypeId');
  }
}
