import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { OpenBankModel } from './models';

@Injectable({
  providedIn: 'root',
})
export class OpenBankService {
  constructor(private http: HttpClient) {}
  getRates(): Observable<OpenBankModel[]> {
    const serv = 'https://alexmelk/total-balance/api/open-bank-rates';
    return this.http
      .get<OpenBankModel[]>('http://localhost:4201/open-bank-rates')
      .pipe(tap((x) => console.log(x)));
  }
}
