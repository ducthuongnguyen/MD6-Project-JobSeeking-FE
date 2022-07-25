import {User} from "./user";
import {Company} from "./company";
import {RecruitmentNews} from "./recruitment-news";

export interface Message {
  id?: String;
  content?: String;
  user?: User;
  company?: Company;
  recruitmentNews?: RecruitmentNews
}
