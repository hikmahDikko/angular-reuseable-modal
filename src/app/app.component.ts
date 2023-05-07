import { Component, ViewChild } from '@angular/core';
import { GenericModalComponent } from './shared/generic-modal/generic-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reusable-modal';

  @ViewChild('genericModal') private modalComponent!: GenericModalComponent;

  modalStyle: string = 'modal-style-success';
  modalTitle: string = 'Success generic';
  modalBody: string = 'This is a Success generic message';
  modalButtonColor: string = 'btn-success';

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
