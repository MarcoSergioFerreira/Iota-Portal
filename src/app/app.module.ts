// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// PDF
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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

    // TODO: Move Material Modules to separate "material.module.ts"
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
