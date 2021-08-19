import http from '../httpService';
import { RootObject } from './dto/Notifications';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import PagedNotificationResultRequestDto from './dto/PagedNotificationResultRequestDto'


class NotificationService {

    public async getAll(pagedNotificationAndSortedRequest: PagedNotificationResultRequestDto)
        : Promise<PagedResultDto<RootObject>> { 
        let result = await http.get('api/services/app/NotificationService/GetNotifications',
            {
                params: pagedNotificationAndSortedRequest
            });
        return result.data.result;
    }

}

export default new NotificationService();