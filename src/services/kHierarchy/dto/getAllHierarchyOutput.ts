import { GMYType } from './gMYType'

export interface GetAllHierarchyOutput {
    firstName: string;
    lastName: string;
    title: string;
    mail: string;
    orderNo: number;
    gMYType: GMYType;
    normalizedTitle: string; 
}