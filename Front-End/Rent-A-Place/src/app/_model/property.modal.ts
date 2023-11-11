import { FileHandle } from "./file-handle.model";

export interface Property {
    propertyId: number
    propertyName: string,
    propertyDescription: string,
    propertyLocation:string,

    propertyPrice: number,
    propertyImages: FileHandle[]
}