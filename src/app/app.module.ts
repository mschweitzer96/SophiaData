import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ConnectorsComponent } from './connectors/connectors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ProjectsComponent } from './projects/projects.component';
import { FordevelopersComponent } from './fordevelopers/fordevelopers.component';
import { ProductComponent } from './product/product.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EcbhearingsComponent } from './ecbhearings/ecbhearings.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule} from '@angular/material/button';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LineComponent } from './shared/widgets/line/line.component';
import { PieComponent } from './shared/widgets/pie/pie.component';
import { DataserviceService } from 'src/services/dataservice.service';
import { EcbhearingsprojectComponent } from './ecbhearingsproject/ecbhearingsproject.component';
import {MatTableModule} from '@angular/material/table';
import { AndroidappsprojectComponent } from './androidappsproject/androidappsproject.component';
import { MobileappsComponent } from './mobileapps/mobileapps.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutusComponent,
    HomeComponent,
    ConnectorsComponent,
    ProjectsComponent,
    FordevelopersComponent,
    ProductComponent,
    EcbhearingsComponent,
    LineComponent,
    PieComponent,
    EcbhearingsprojectComponent,
    AndroidappsprojectComponent,
    MobileappsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule,
    HighchartsChartModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,

  ],
  providers: [
    DataserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
