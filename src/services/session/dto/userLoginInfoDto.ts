/*eslint-disable*/
import { EntityDto } from './../../dto/entityDto';

export default class UserLoginInfoDto extends EntityDto {
  name!: string;
  title!: string;
  surname!: string;
  userName!: string;
  emailAddress!: string;
  companyObjId!: string;
  ompanyRelationalObjId!: string;
  tcKimlikNo!:string;
}
