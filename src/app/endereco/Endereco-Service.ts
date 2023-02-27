import { Endereco } from './Endereco';
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
export class EnderecoService
{
    apiUrl: string = environment.apiURLBase + '/cupom';
    constructor(private http: HttpClient){}

    listar(): Observable<Endereco[]>
    {
        return this.http.get<Endereco[]>(this.apiUrl);

    }

    salvar(endereco: Endereco): Observable<Endereco>
    {
        return this.http.post<Endereco>('${this.apiUrl}', Endereco);
    }

    listarPorId(id: number) : Observable<Endereco>
    {
        return this.http.get<any>('${this.apiUrl}/${id}');

    }


    

}