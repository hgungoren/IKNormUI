import UserNotificationState from "./userNotificationState";

interface PagedNotificationResultRequestDto {
    userId: string;
    tenantId?: number;
    skipCount?: number;
    takeCount?: number;
    userNotificationState: UserNotificationState; 
}

export default PagedNotificationResultRequestDto;


