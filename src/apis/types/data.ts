// get data list
export interface GetDataResponse {
    dataItems: DataItem[]
}

export interface DataItem {
    id: number,
    fileName: string,
    recordNum: number,
    uploadAt: string
}

// upload data file
export interface PostDataRequest { //TODO: to be determined
    file: File
}
export interface PostDataResponse {
    success: boolean,
    information?: string,
    dataItem?: DataItem
}