
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CupomProduto } from './CupomProduto';

@Injectable
(
    {
        providedIn: 'root'
    }
)
export class CupomProdutoService
{
    apiUrl: string = environment.apiURLBase + '/cupom';
    constructor(private http: HttpClient){}

    listar(): Observable<CupomProduto[]>
    {
        return this.http.get<CupomProduto[]>(this.apiUrl);

    }

    salvar(cupomProduto: CupomProduto): Observable<CupomProduto>
    {
        return this.http.post<CupomProduto>('${this.apiUrl}', cupomProduto);
    }

    listarPorId(id: number) : Observable<CupomProduto>
    {
        return this.http.get<any>('${this.apiUrl}/${id}');

    }


    

}