import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/internal/Observable';
import { map } from "rxjs/operators";


@Injectable()
export class RegimenDetailService {

  private ApiUrl = 'http://localhost:8092/regimenDetailController';

  constructor(private http: Http) {
  }

  getRegimenDetails(): Observable<any> {
    return this.http.get(this.ApiUrl).pipe(map(response => {
      return response.json();
    }))
    onerror: ((error) => {
      return error;
    })

  }

  addRegimenDetail(obj): Observable<any> {
    return this.http.post(this.ApiUrl, obj).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

  updateRegimenDetail(obj): Observable<any> {
    return this.http.put(this.ApiUrl + '/' + obj.id, obj).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }

  deleteRegimenDetail(obj): Observable<any> {
    return this.http.delete(this.ApiUrl + '/' + obj.id).pipe(map( response => {
      return response.json();
    }))
    onerror: ( (error) => {
      return error;
    })
  }


}
