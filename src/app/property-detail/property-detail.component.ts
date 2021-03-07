import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Property } from '../dataview/property'
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/services/properties.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})

export class PropertyDetailComponent implements OnInit {

  @Input() property!: Property;

  constructor(private route: ActivatedRoute,
              private propService: PropertiesService) { }

  ngOnInit(): void {
    this.getProperty()
  }

  getProperty(): void {
    let _params = this.route.snapshot.paramMap
    if (_params.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.propService.getProperty(id).subscribe(property => this.property=property!)
    } else {
      console.log('No id parameter found in parameters map')
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.   
    console.log('ngOnChanges')
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('AfterViewChecked')
    //this.getProperty()
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('After view init')
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('Do Check')
    let _params = this.route.snapshot.paramMap
    if (_params.has('id')) {
    const id = +this.route.snapshot.paramMap.get('id')!;
      console.log('Id: ' + id)
      this.getProperty()
    }
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('AfterContentChecked')
  }
   
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('On Destroy')
  }

}
