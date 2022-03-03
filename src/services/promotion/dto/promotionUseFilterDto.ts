/*eslint-disable*/
import { PromotionType } from './promotionType';

export interface PromotionUseFilterDto {
  statu: PromotionType;
  title: string;
  promotionRequestTitle: string;
  firstRequestDate: Date;
  secondRequestDate: Date;
}
