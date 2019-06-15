import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-editcancertypes',
  templateUrl: './editcancertypes.component.html',
  styleUrls: ['./editcancertypes.component.scss']
})
export class EditcancertypesComponent{
  @Output() yes = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() CancerType: any;
  constructor() {
  }

  okay() {
    this.yes.emit(this.CancerType);
  }

  close(event) {
    this.cancel.emit(event);
  }

}
