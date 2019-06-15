import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from "rxjs/operators";



@Injectable()
export class PatientsService {
  private ApiUrl = 'http://localhost:8092/patientController';

  constructor(private http: Http) {
  }

  getPatients(): Observable<any> {
    return this.http.get(this.ApiUrl).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })

  }

}
