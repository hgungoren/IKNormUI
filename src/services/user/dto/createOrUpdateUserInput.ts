export interface CreateOrUpdateUserInput {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  roleNames: string[];
  password: string;
  id: number;
  userObjId: number;
  companyObjId: string;
  companyRelationalObjId: string;
  sicilNo: number;
  title: string;
  companyCode: number;
}
