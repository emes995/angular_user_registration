import { Injectable } from '@angular/core';
import { Property } from '../app/dataview/property'
import { PROPERTIES } from '../app/dataview/properties'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }

  getProperties(): Observable<Property[]> {
    return of(PROPERTIES)
  }

  getProperty(id: number): Observable<Property|undefined> {
    //return of(PROPERTIES.find(property => property.id === id));
    return of(PROPERTIES.find(property => property.id === id))
  }
}
