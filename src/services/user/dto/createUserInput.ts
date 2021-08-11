export interface CreateUserInput {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  roleNames: string[];
  password: string; 
  userObjId: number;
  companyObjId: string;
  ompanyRelationalObjId: string;
  sicilNo: number;
  title: string;
  companyCode: number;
}
