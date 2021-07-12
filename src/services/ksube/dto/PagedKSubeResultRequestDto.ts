import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedKSubeResultRequestDto extends PagedFilterAndSortedRequest {
    keyword: string
    isActive: boolean
    isActivity: boolean 
    id: number
}
