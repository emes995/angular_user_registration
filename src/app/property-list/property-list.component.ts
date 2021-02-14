import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../dataview/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  @Input() property!: Property;

  constructor() { }

  ngOnInit(): void {
  }

}
