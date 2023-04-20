import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/model/user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url ='http://localhost:30001/enroll';

  constructor(private _http : HttpClient) { }

  enroll(user: User){
    return this._http.post<any>(this._url, user)
          .pipe(catchError(this.handleError));
  }

  handleError(error : HttpErrorResponse){
    return throwError(error);
  }

}
