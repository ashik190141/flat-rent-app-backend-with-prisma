import { TOptions } from "../modules/Flat/flat.interface";


export const calculatePagination = (options: TOptions) => {
    const page = Number(options.page) || 1
    const limit = Number(options.limit) || 10
    const skip = (page - 1) * limit
    
    const sortBy = options.sortBy || 'createdAt'
    const sortOrder = options.sortOrder || 'asc'

    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder
    }
}