import { GMYType } from './gMYType'

export interface GetAllHierarchyOutput {
    mail: string;
    title: string;
    orderNo: number;
    gMYType: GMYType;
    lastName: string;
    firstName: string;
    normalizedTitle: string;
}
export interface ChangeStatus {
    id: string;
    type: string;
    result: boolean;
}


export interface NodeOutput {
    id: number;
    code?: any;
    mail: boolean;
    title: string;
    active: boolean;
    orderNo: number;
    subTitle: string;
    expanded: boolean;
    creationTime: Date;
    positionId: number;
    creatorUserId: number;
    canTerminate: boolean;
    mailStatusChange: boolean;
    lastModificationTime: Date;
    lastModifierUserId: number;
    pushNotificationWeb: boolean;
    pushNotificationPhone: boolean;
}

export interface PositionOutput {
    id: number;
    name: string;
    code: string;
    unitId: number;
    creationTime: Date;
    nodes: NodeOutput[];
    creatorUserId: number;
    lastModificationTime: Date;
    lastModifierUserId: number;
}

export interface UnitOutput {
    id: number;
    name: string;
    code: string;
    creationTime: Date;
    creatorUserId: number;
    lastModificationTime: Date;
    lastModifierUserId: number;
    positions: PositionOutput[];
}

