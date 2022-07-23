import {Company} from "./company";
import {Vacancy} from "./vacancy";
import {Field} from "./field";

export interface RecruitmentNews {
  id?: string;
  title?: string;
  company?: Company;
  vacancy?: Vacancy;
  field?: Field;
  salaryFrom?: string;
  salaryTo?: string;
  expiredDate?: Date;
  employeeQuantity?: string;
  requiredExperience?: string;
  gender?: string;
  workingPlace?: string;
  description?: string;
  status?: string;
  proposed?: string;
  workingType?: string;
}
