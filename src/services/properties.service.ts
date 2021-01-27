import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }

  getProperties() {
    return [
      {id: 1, name: 'Bentley', address: 'address 1'},
      {id: 2, name: '770 OP', address: 'address 2'}
    ]
  }
}
