import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Account } from '../model/Account';
import { BaseService } from 'src/app/services/base.service';
import { AppSharedService } from 'src/app/services/app-shared.service';


@Injectable()
export class CreateTaskService extends BaseService {

  constructor(http: HttpClient, appSharedService: AppSharedService) {
    super(http, appSharedService);
  }

  searchAccounts(account: any): Observable<Account[]> {
    return this.post(`${this.taskManagementServiceUrl}/searchAccounts`, account).pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(JSON.stringify(error.error.errorMessage));
  }

  getAccountByAccountNumber(accountNumber: number): Observable<Account> {
    return this.get(`${this.taskManagementServiceUrl}/getAccount/${accountNumber}`);
  }

  getDocumentDetails(): Observable<any> {
    return this.get('assets/json/document-details.json');
  }

  saveContactCenterTaskDetails(taskDetails): Observable<any> {
    return this.post(`${this.taskManagementServiceUrl}/saveTask`, taskDetails);
  }

  getTaskDetails(contactCenterReq): Observable<any> {
    return this.post(`${this.taskManagementServiceUrl}/getTaskDetails`, contactCenterReq);
  }

  getTaskListByAccountNo(accountNo): Observable<any> {
    return this.post(`${this.taskManagementServiceUrl}/getTaskList`, accountNo);
  }
}
