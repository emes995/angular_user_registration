import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../services/properties.service'
import { Property } from '../dataview/property';

@Component({
  selector: 'app-properties-content',
  templateUrl: './properties-content.component.html',
  styleUrls: ['./properties-content.component.css']
})
export class PropertiesContentComponent implements OnInit {

  properties: Property[];

  constructor(private propService: PropertiesService) {
    this.properties = []
   }

  ngOnInit(): void {
    this.properties = this.propService.getProperties()
  }

}
