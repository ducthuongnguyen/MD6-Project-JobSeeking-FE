import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../../../service/company.service';
import {Company} from '../../../model/company';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
company:Company;
  constructor(private actRouter: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit():void {

  }

}
