
declare type matrix = Array<Array<number>>

declare type APIResponse = APIResponseItem[]

declare type APIResponseItem = APIResponseItemString
    | APIResponseItemMatrix
    | APIResponseItemArray
    | APIResponseItemSystem


declare interface APIResponseItemBase {
    label?: string
    showDetails: boolean
}

declare interface APIResponseItemString extends APIResponseItemBase {
    data: string
    type: 'string'
}

declare interface APIResponseItemMatrix extends APIResponseItemBase {
    data: matrix
    type: 'matrix'
}

declare interface APIResponseItemArray extends APIResponseItemBase {
    data: Array<number>
    type: 'array'
}

declare interface APIResponseItemSystem extends APIResponseItemBase {
    data: Array<string>
    type: 'system'
}
