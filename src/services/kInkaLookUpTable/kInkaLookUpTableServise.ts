 
import { PagedResultDto } from '../dto/pagedResultDto';
import http from '../httpService';
import { GetAllKInkaLookUpTableOutput } from './dto/getAllKInkaLookUpTableOutput'; 
import { PagedKInkaLookUpTableResultRequestDto } from './dto/PagedKInkaLookUpTableResultRequestDto';

class KInkaLookUpTableService {
 
    public async getAll(pagedFilterAndSortedRequest: PagedKInkaLookUpTableResultRequestDto): Promise<PagedResultDto<GetAllKInkaLookUpTableOutput>> {

        let result = await http.get('api/services/app/KInkaLookUpTable/GetAll', {
            params: pagedFilterAndSortedRequest
        }); 
        return result.data.result;
    } 
}
 
export default new KInkaLookUpTableService();
 