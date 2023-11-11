import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../_services/property.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Property } from '../_model/property.modal';
import { MatDialog } from '@angular/material/dialog';
import {ShowPropertyImagesDialogComponent} from '../show-property-images-dialog/show-property-images-dialog.component';
import { ImageProcessingService } from '../_services/image-processing.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
selector: 'app-show-property-details',
templateUrl: './show-property-details.component.html',
styleUrls: ['./show-property-details.component.css']
})
export class ShowPropertyDetailsComponent implements OnInit {

propertyDetails: Property[] = [];

displayedColumns: string[] = ['Id', 'Property Name', 'Property Description', 'Property Discounted Price', 'Property Actual Price', 'Images', 'Edit', 'Delete'];

constructor(private propertyService: PropertyService, public imagesDialog: MatDialog,
private imageProcessingService: ImageProcessingService,
private router:Router
) { }

ngOnInit(): void {
this.getAllProperty();
}

public getAllProperty() {
this.propertyService.getAllProperty().pipe(
map((x: Property[]) => x.map((property: Property) => this.imageProcessingService.createImages(property)))
).subscribe(
(resp: Property[]) => {
console.log(resp);
this.propertyDetails = resp;
}, (error: HttpErrorResponse) => {
console.log(error);
}
);
}

deleteProperty(propertyId: any) {
this.propertyService.deleteProperty(propertyId).subscribe(
(resp) => {
this.getAllProperty();
},
(error: HttpErrorResponse) => {
console.log(error);
}
);
}

showImages(property: Property) {
console.log(property);
this.imagesDialog.open(ShowPropertyImagesDialogComponent, {
data: {
images: property.propertyImages
},
height: '500px',
width: '800px'
});
}

editPropertyDetails(propertyId: any){
this.router.navigate(['/addNewProperty',{propertyId:propertyId}]);
}
}