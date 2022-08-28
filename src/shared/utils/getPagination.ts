import { query } from "../types/query";

export const getPagination = (pagination: query, attributes: string[]) => {
    const { itemsPerPage, currentPage } = pagination;

    const limit = itemsPerPage ? itemsPerPage : undefined;
    const offset = itemsPerPage && currentPage ? itemsPerPage * (currentPage - 1) : undefined;

    return {
        attributes: attributes,
        limit: limit,
        offset: offset,
    };
};
