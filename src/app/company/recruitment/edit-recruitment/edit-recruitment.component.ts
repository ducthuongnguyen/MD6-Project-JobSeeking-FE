import { Component, OnInit } from '@angular/core';
import {RecruitmentNewsService} from '../../../service/recruitment-news.service';
import {VacancyService} from '../../../service/vacancy.service';
import {FieldService} from '../../../service/field.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthenticationService} from '../../../service/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vacancy} from '../../../model/vacancy';
import {Field} from '../../../model/field';
import Swal from 'sweetalert2';

const idCompany = localStorage.getItem('COMPANYID');

@Component({
  selector: 'app-edit-recruitment',
  templateUrl: './edit-recruitment.component.html',
  styleUrls: ['./edit-recruitment.component.css']
})
export class EditRecruitmentComponent implements OnInit {
  recruitmentForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    vacancyId: new FormControl('', [Validators.required]),
    fieldId: new FormControl('', [Validators.required]),
    salaryFrom: new FormControl('', [Validators.required]),
    salaryTo: new FormControl('', [Validators.required]),
    expiredDate: new FormControl('', [Validators.required]),
    employeeQuantity: new FormControl('', [Validators.required]),
    requiredExperience: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    workingPlace: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    workingTypeId: new FormControl('', [Validators.required])
  });

  id: string;
  obj: any;
  listVacancy: Vacancy[] = [];
  listField: Field[] = [];
  city: any[] = [];

  constructor(private recruimentNewsService: RecruitmentNewsService,
              private vacancyService: VacancyService,
              private fieldService: FieldService,
              private router: Router,
              private authenticationService: AuthenticationService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getRecruitment(this.id);
    });
  }

  ngOnInit() {
    this.getVacancy();
    this.getField();
    this.getAllCity();
  }

  getAllCity() {
    this.authenticationService.findAllCity().subscribe(result => {
      this.city = result;
    }, error => {
      console.log(error);
    });
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
      this.listField = data;
    }, error => {
      console.log(error);
    });
  }

  getRecruitment(id: string) {
    return this.recruimentNewsService.findById(id).subscribe(recruitment => {
      this.recruitmentForm = new FormGroup({
        title: new FormControl(recruitment.title),
        vacancyId: new FormControl(recruitment.vacancy.id),
        fieldId: new FormControl(recruitment.field.id),
        salaryFrom: new FormControl(recruitment.salaryFrom),
        salaryTo: new FormControl(recruitment.salaryTo),
        expiredDate: new FormControl(recruitment.expiredDate),
        employeeQuantity: new FormControl(recruitment.employeeQuantity),
        requiredExperience: new FormControl(recruitment.requiredExperience),
        gender: new FormControl(this.renderGender(recruitment.gender)),
        workingPlace: new FormControl(recruitment.workingPlace),
        description: new FormControl(recruitment.description),
        // tslint:disable-next-line:triple-equals
        workingTypeId: new FormControl(recruitment.workingType == 'FULL-TIME' ? '0' : '1')
      });
    });
  }

  renderGender(data) {
    // tslint:disable-next-line:triple-equals
    if (data == 'MALE') {
      return 0;
      // tslint:disable-next-line:triple-equals
    } else if (data == 'FEMALE') {
      return 1;
      // tslint:disable-next-line:triple-equals
    } else if (data == 'OTHER') {
      return 2;
      // tslint:disable-next-line:triple-equals
    } else if (data == 'ALL') {
      return 3;
    }
  }

  update(id: string) {
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
      salaryFrom: this.recruitmentForm.value.salaryFrom,
      salaryTo: this.recruitmentForm.value.salaryTo,
      expiredDate: this.recruitmentForm.value.expiredDate,
      employeeQuantity: this.recruitmentForm.value.employeeQuantity,
      requiredExperience: this.recruitmentForm.value.requiredExperience,
      gender: this.recruitmentForm.value.gender,
      workingPlace: this.recruitmentForm.value.workingPlace,
      description: this.recruitmentForm.value.description,
      workingType: this.recruitmentForm.value.workingTypeId
    };
    this.recruimentNewsService.update(id, this.obj).subscribe(() => {
      this.messageUpdate();
      this.router.navigate(['/company/recruitment/our-list']);
    }, e => {
      console.log(e);
    });
  }

  messageUpdate() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sửa tin tuyển dụng thành công',
      showConfirmButton: false,
      timer: 3000
    });
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
