import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedKBolgeResultRequestDto extends PagedFilterAndSortedRequest {
    keyword: string
    isActive: boolean
    isActivity: boolean
    tip: number
    tur: number
}
