import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OpenBankApiModel } from '../models/open-bank-api-model';

@Injectable({
    providedIn: 'root',
})
export class OpenBankService {
    apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getRates(): Observable<OpenBankApiModel[]> {
        return this.http
            .get<OpenBankApiModel[]>(`${this.apiUrl}/open-bank-rates`)
            .pipe(tap((results) => console.log('📁 results: ', results)));
    }
}
