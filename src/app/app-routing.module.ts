import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DealingInstructionComponent } from './components/dealing-instruction/dealing-instruction.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path: 'dealing-instructions', component: DealingInstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
