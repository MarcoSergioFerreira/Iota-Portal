// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MaterialModule } from './material.module';

// PDF
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

// Components
import { AppComponent } from './app.component';
import { DealingInstructionComponent } from './components/dealing-instruction/dealing-instruction.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopnavComponent } from './components/topnav/topnav.component';
@NgModule({
  declarations: [
    AppComponent,
    DealingInstructionComponent,
    PdfComponent,
    DashboardComponent,
    SidenavComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
