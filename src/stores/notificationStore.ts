import { action, observable } from 'mobx';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { RootObject } from '../services/notification/dto/Notifications';
import notificationService from '../services/notification/notificationService';
import PagedNotificationResultRequestDto from '../services/notification/dto/PagedNotificationResultRequestDto';


class NotificationStore {
    @observable notifications!: PagedResultDto<RootObject>;

    @action
    async getAll(pagedNotificationResultRequestDto: PagedNotificationResultRequestDto) {
        let result = await notificationService.getAll(pagedNotificationResultRequestDto);
        this.notifications = result;
    }
}

export default NotificationStore;