export interface CreateOrUpdateUserInput {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  roleNames: string[];
  password: string;
  id: number;
  userObjId: string;
  companyObjId: string;
  companyRelationObjId: string;
  sicilNo: number;
  title: string;
  companyCode: number;
}
