import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesContentComponent } from './properties-content/properties-content.component';
import { ToolbarComponent } from './toolbar/toolbar.component'
import { LandingComponent } from './landing/landing.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { ContactusComponent } from './contactus/contactus.component'
import { PropertyDetailComponent } from './property-detail/property-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'properties', component: PropertiesContentComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'properties/property/:id', component: PropertyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
