import {Company} from "./company";
import {Vacancy} from "./vacancy";
import {Field} from "./field";

export interface RecruitmentNews {
  id?: String;
  title?: String;
  company?: Company;
  vacancy?: Vacancy;
  field?: Field;
  salaryFrom?: String;
  salaryTo?: String;
  expiredDate?: String;
  employeeQuantity?: String;
  requiredExperience?: String;
  gender?: String;
  workingPlace?: String;
  description?: String;
  status?: String;
  proposed?: String;
  workingType?: String;
}
