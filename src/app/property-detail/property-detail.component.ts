import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../dataview/property'

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})

export class PropertyDetailComponent implements OnInit {
  @Input() property: Property;

  constructor() {
    this.property = {id: 0, name: 'N/A', address: 'N/A'}
   }

  ngOnInit(): void {
  }

}
