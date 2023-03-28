export interface ServerResponse<T> {
    data: T;
    meta?: Meta;
    error?: Error;
}

interface Meta {
    pagination: Pagination;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

interface Error {
    status: number;
    name: string;
    message: string;
    details: any;
}