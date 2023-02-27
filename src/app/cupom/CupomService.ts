import { Cupom } from './Cupom';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable
(
    {
        providedIn: 'root'
    }
)
export class CupomService
{
    apiUrl: string = environment.apiURLBase + '/cupom';
    constructor(private http: HttpClient){}

    listar(): Observable<Cupom[]>
    {
        return this.http.get<Cupom[]>(this.apiUrl);

    }

    salvar(cupom: Cupom): Observable<Cupom>
    {
        return this.http.post<Cupom>('${this.apiUrl}', cupom);
    }

    listarPorId(id: number) : Observable<Cupom>
    {
        return this.http.get<any>('${this.apiUrl}/${id}');

    }


    

}