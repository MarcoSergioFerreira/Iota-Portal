import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealingInstructionComponent } from './components/dealing-instruction/dealing-instruction.component';

const routes: Routes = [
  { path: '', component: DealingInstructionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
