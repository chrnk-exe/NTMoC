declare interface BinGCDInput {
    A: number,
    B: number
}

declare interface BinGCDOutput { 
    result: string
}

declare type matrix = Array<Array<number>>
declare type ResponseType = 'string' | 'array' | 'matrix' | 'system'

declare type APIResponse = APIResponseItem[]

declare interface APIResponseItem {
    label?: string
    data: string | Array<number> | matrix | Array<string>
    type: 'string' | 'array' | 'matrix' | 'system'
}