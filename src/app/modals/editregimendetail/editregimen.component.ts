import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-editmedicine',
  templateUrl: './editmedicine.component.html',
  styleUrls: ['./editmedicine.component.scss']
})
export class EditMedicineComponent{
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
