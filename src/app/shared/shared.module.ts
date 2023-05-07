import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GenericModalComponent } from "./generic-modal/generic-modal.component";

@NgModule({
  declarations: [GenericModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [GenericModalComponent]
})
export class SharedModule { }