import { Injectable } from '@angular/core';
import { Property } from '../_model/property.modal';
import { FileHandle } from '../_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ImageProcessingService {
  constructor(private sanitizer: DomSanitizer) {}
  public createImages(property: Property) {
    const propertyImages: any[] = property.propertyImages;
    const propertyImagesToFileHandle: FileHandle[] = [];
    for (let i = 0; i < propertyImages.length; i++) {
      const imageFileData = propertyImages[i];
      const imageBlob = this.dataURItoBlob(
        imageFileData.picBytes,
        imageFileData.type
      );
      const imageFile = new File([imageBlob], imageFileData.name, {
        type: imageFileData.type,
      });
      const finalFileHandle: FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(imageFile)
        ),
      };
      propertyImagesToFileHandle.push(finalFileHandle);
    }
    property.propertyImages = propertyImagesToFileHandle;
    return property;
  }
  public dataURItoBlob(picBytes: string, imageType: any) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array], { type: imageType });
    return blob;
    console.log(blob)
  }
}
