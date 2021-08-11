export interface CreateUserOutputItem {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  fullName: string;
  lastLoginTime?: any;
  creationTime: Date;
  roleNames: string[];
  id: number; 
  userObjId: number;
  companyObjId: string;
  ompanyRelationalObjId: string;
  sicilNo: number;
  title: string;
  companyCode: number;
}

export interface CreateUserOutput {
  result: CreateUserOutputItem;
}
