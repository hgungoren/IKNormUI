/*eslint-disable*/

import { PromotionStatu } from './promotionStatu';
import { PromotionType } from './promotionType';

export interface GetAllPromotionOutput {
  registrationNumber: string;
  firstName: string;
  lastName: string;
  title: string;
  levelOfEducation: string;
  promotionRequestTitle: string;
  militaryStatus: string;
  department: string;
  departmentObjId: string;
  unit: string;
  unitObjId: string;
  description: string;
  requestDate: Date;
  dateOfStart: Date;
  lastPromotionDate: Date;
  statu: PromotionType;
  hierarchyStatu: PromotionStatu;
  id: number;
}
