import {Company} from "./company";
import {Vacancy} from "./vacancy";
import {Field} from "./field";
import {Role} from "./role";
import {User} from "./user";

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
  workingPlace?: any;
  description?: string;
  status?: string;
  proposed?: string;
  workingType?: string;
  users?: [User]
}
