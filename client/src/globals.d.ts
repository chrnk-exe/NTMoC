
declare type matrix = Array<Array<number>>

declare type APIResponse = APIResponseItem[]

declare type APIResponseItem = APIResponseItemString
    | APIResponseItemMatrix
    | APIResponseItemArray
    | APIResponseItemSystem
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