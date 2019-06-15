import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-addcancertypes',
  templateUrl: './addcancertypes.component.html',
  styleUrls: ['./addcancertypes.component.scss']
})
export class AddcancertypesComponent implements OnChanges {

  @Output() yes = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() Error: any;

  public CancerType = {
    title: ''
  };

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.Error.currentValue.login) {
      this.initEmptyUser();
    }
  }

  initEmptyUser() {
    const CancerType = {
      title: ''
    };
    this.CancerType = JSON.parse(JSON.stringify(CancerType));
  }

  okay() {
    this.yes.emit(this.CancerType);
  }

  close(event) {
    this.cancel.emit(event);
  }

}
