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

declare type APIResponseItem = APIResponseItemString
    | APIResponseItemMatrix
    | APIResponseItemArray
    | APIResponseItemSystem

// declare interface APIResponseItem {
//     label?: string
//     data: string | Array<number> | matrix | Array<string>
//     type: 'string' | 'array' | 'matrix' | 'system'
// }
declare interface APIResponseItemString {
    label?: string
    data: string
    type: 'string'
}

declare interface APIResponseItemMatrix {
    label?: string
    data: matrix
    type: 'matrix'
}

declare interface APIResponseItemArray {
    label?: string
    data: Array<number>
    type: 'array'
}

declare interface APIResponseItemSystem {
    label?: string
    data: Array<string>
    type: 'system'
}