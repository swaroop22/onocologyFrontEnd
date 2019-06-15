import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from "rxjs/operators";



@Injectable()
export class CancerTypeService {
  private ApiUrl = 'http://localhost:8092/cancerTypeControllerById';

  constructor(private http: Http) {
  }

  getCancerTypeS( id: number): Observable<any> {
    var url = this.ApiUrl + "/" + id.toString();
    return this.http.get(url).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })

  }

}
