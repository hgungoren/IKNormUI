import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedKHierarchyResultRequestDto extends PagedFilterAndSortedRequest {
    keyword: string,
    id: number
}
