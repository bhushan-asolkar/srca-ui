import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Account } from '../model/Account';
import { BaseService } from 'src/app/services/base.service';


@Injectable()
export class CreateTaskService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  searchAccounts(account: any): Observable<Account[]> {
    return this.post(`${this.taskManagementServiceUrl}/searchAccounts`,account).pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(JSON.stringify(error.error.errorMessage));
  }

  getAccountByAccountNumber(accountNumber: number): Observable<Account> {
    return this.get(`${this.taskManagementServiceUrl}/getAccount/${accountNumber}`);
  }

  getTasksByAccountNumber(accountNumber: number): Observable<any> {
    return this.get('assets/json/task-list.json');
  }

  getDocumentDetails(): Observable<any> {
    return this.get('assets/json/document-details.json');
  }

  saveContactCenterTaskDetails(taskId: number, taskDetails: any): Observable<boolean> {
    // TODO make the actual API call
    // return mock success
    console.log(`taskId: ${taskId}, taskDetails: `, taskDetails);
    return of(true);
  }

  getContactDetail(requestBody): Observable<any> {
    return this.post(`${this.taskManagementServiceUrl}/contactCenterDetail`, requestBody);
  }

}
