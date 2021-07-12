import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedKNormResultRequestDto extends PagedFilterAndSortedRequest {
    keyword: string,
    id: number
}
