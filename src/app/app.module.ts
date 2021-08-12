// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DealingInstructionComponent } from './components/dealing-instruction/dealing-instruction.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// PDF
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@NgModule({
  declarations: [
    AppComponent,
    DealingInstructionComponent,
    PdfComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
