declare interface BinGCDInput {
    A: number,
    B: number
}

declare interface BinGCDOutput { 
    result: string
}

type matrix = Array<Array<number>>

declare interface APIResponse {
    label: string
    data: string | Array<number> | matrix
    type: typeof APIResponse.data
}