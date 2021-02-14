import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../services/properties.service'
import { Property } from '../dataview/property';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-properties-content',
  templateUrl: './properties-content.component.html',
  styleUrls: ['./properties-content.component.css']
})
export class PropertiesContentComponent implements OnInit {

  properties!: Property[];

  constructor(private propService: PropertiesService) {   }

  ngOnInit(): void {
    this.propService.getProperties().subscribe(properties => this.properties = properties)
  }

}
