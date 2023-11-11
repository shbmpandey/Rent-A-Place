import { Component, Inject,OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { FileHandle } from '../_model/file-handle.model';

@Component({
selector: 'app-show-property-images-dialog',
templateUrl: './show-property-images-dialog.component.html',
styleUrls: ['./show-property-images-dialog.component.css']
})
export class ShowPropertyImagesDialogComponent implements OnInit{
constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

ngOnInit(): void {
this.receiveImages();
}
receiveImages(){
console.log(this.data);
}
}