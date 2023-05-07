import { Component, ViewChild } from '@angular/core';
import { GenericModalComponent } from '../shared/generic-modal/generic-modal.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  @ViewChild('GenericModal') 
  private modalComponent!: GenericModalComponent;
  modalStyle: string = 'modal-style-primary';
  modalTitle: string = 'Info Generic';
  modalBody: string = 'This is a Information Generic message';
  modalButtonColor: string = 'btn-primary';
  
  async openModal() {
    return await this.modalComponent.open();
  }

  getGenericValue(value: any) {
    if (value == 'Save click') {
      console.log(value);
    }
  }

  open() {
    this.openModal();
  }
}
