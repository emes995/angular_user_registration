import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../dataview/property'
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/services/properties.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})

export class PropertyDetailComponent implements OnInit {

  @Input() property!: Property|undefined;

  constructor(private route: ActivatedRoute,
              private propService: PropertiesService) { }

  ngOnInit(): void {
    this.getProperty()
  }

  getProperty(): void {
    const id: string = this.route.snapshot.paramMap.get('id')!;
    this.propService.getProperty(parseInt(id)).subscribe(property => this.property = property)
  }

}
