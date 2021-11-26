import { PagedResultDto } from '../dto/pagedResultDto';
import http from '../httpService';
import { GetAllKPersonelOutput } from './dto/getAllKPersonelOutput';
import { PagedKPersonelResultRequestDto } from './dto/PagedKPersonelResultRequestDto';

class KPersonelService {

    public async getAll(pagedFilterAndSortedRequest: PagedKPersonelResultRequestDto): Promise<PagedResultDto<GetAllKPersonelOutput>> {
        let result = await http.get('iknorm/KPersonel/GetAll', {
            params: pagedFilterAndSortedRequest
        });
        return result.data.result;
    }
 
    public async getAllEmployees(pagedFilterAndSortedRequest: PagedKPersonelResultRequestDto): Promise<PagedResultDto<GetAllKPersonelOutput>> {
        let result = await http.get('iknorm/KPersonel/GetAll', {
            params: pagedFilterAndSortedRequest
        });
        return result.data.result;
    } 

    public async getEmployeeCountById(id: string): Promise<number> {
        let result = await http.get('iknorm/KPersonel/GetTotalEmployeeCountById?id=' + id, {
            params: id
        });
        return result.data.result;
    }


    public async getEmployeeCount(): Promise<number> {
        let result = await http.get('iknorm/KPersonel/GetTotalEmployeeCount'); 
        return result.data.result;
    }

    public async getEmployeesCount(): Promise<number> {
        let result = await http.get('iknorm/KPersonel/GetEmployeesCount'); 
        return result.data.result;
    }
}

export default new KPersonelService();