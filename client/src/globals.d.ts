declare interface BinGCDInput {
    A: number,
    B: number
}

declare interface BinGCDOutput { 
    result: string
}

declare type matrix = Array<Array<number>>
declare type ResponseType = 'string' | 'array' | 'matrix'

declare type APIResponse = APIResponse[]

declare interface APIResponseItem {
    label: string
    data: string | Array<number> | matrix
    type: 'string' | 'array' | 'matrix'
}