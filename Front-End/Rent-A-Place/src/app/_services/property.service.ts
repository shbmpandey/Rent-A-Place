import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../_model/property.modal';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) { }
  public addProperty(property: FormData) {
    return this.httpClient.post<Property>("http://localhost:8085/property/addNewProperty", property);
  }

  public getAllProperty(){
    return this.httpClient.get<Property[]>("http://localhost:8085/getAllProperty");
  }

  public getPropertyDetailsById(propertyId: string){
    return this.httpClient.get<Property>("http://localhost:8085/getPropertyDetailsById/"+propertyId);
  }
  public deleteProperty(propertyId:number){
    return this.httpClient.delete("http://localhost:8085/deletePropertyDetails/3"+propertyId);
  }
}
