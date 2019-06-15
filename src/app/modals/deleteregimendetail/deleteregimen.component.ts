import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-deletemedicine',
  templateUrl: './deletemedicine.component.html',
  styleUrls: ['./deletemedicine.component.scss']
})
export class DeleteMedicinecomponent {
  @Output() yes = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() Medicine: any;

  constructor() {
  }

  okay() {
    this.yes.emit(this.Medicine);
  }

  close(event) {
    this.cancel.emit(event);
  }

}
