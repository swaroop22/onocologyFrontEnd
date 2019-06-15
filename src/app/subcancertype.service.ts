import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from "rxjs/operators";


@Injectable()
export class SubCancerType1Service {

  private ApiUrl = 'http://localhost:8092/subCancerType1Controller';

  constructor(private http: Http) {
  }

  getSubCancerTypes(): Observable<any> {
    return this.http.get(this.ApiUrl).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })

  }

}
