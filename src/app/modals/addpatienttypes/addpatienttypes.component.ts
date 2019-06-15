import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addregimen.component.html',
  styleUrls: ['./addregimen.component.scss']
})
export class AddregimenComponent implements OnChanges {

  @Output() yes = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() Error: any;

  public Medicine = {
    firstName: '',
    lastName: '',
    middleName: '',
    age: '',
    dob: '',
    occupation: ''
  };

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.Error.currentValue.login) {
      this.initEmptyUser();
    }
  }

  initEmptyUser() {
    const medicine = {
      firstName: '',
      lastName: '',
      middleName: '',
      age: '',
      dob: '',
      occupation: ''
    };
    this.Medicine = JSON.parse(JSON.stringify(medicine));
  }

  okay() {
    this.yes.emit(this.Medicine);
  }

  close(event) {
    this.cancel.emit(event);
  }

}
