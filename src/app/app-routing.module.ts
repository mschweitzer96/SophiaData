import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ConnectorsComponent } from './connectors/connectors.component';
import { ProjectsComponent } from './projects/projects.component';
import { FordevelopersComponent } from './fordevelopers/fordevelopers.component';
import { ProductComponent } from './product/product.component';
import { EcbhearingsComponent } from './ecbhearings/ecbhearings.component';
import { EcbhearingsprojectComponent } from './ecbhearingsproject/ecbhearingsproject.component'
import { AndroidappsprojectComponent } from './androidappsproject/androidappsproject.component';
import { MobileappsComponent } from './mobileapps/mobileapps.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'connectors', component: ConnectorsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'fordevelopers', component: FordevelopersComponent },
  { path: 'product', component: ProductComponent },
  { path: 'ecbhearings', component: EcbhearingsComponent },
  { path: 'ecbhearingsproject', component: EcbhearingsprojectComponent },
  { path: 'androidappsproject', component: AndroidappsprojectComponent},
  { path: 'mobileapps', component: MobileappsComponent}



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
