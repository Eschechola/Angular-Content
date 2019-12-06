import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from './IUsuario';


@Injectable()
export class UsuarioService {

    private apiURL = this.baseUrl + "api/usuarios";

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getUsuarios(): Observable<IUsuario[]>{
        return this.http.get<IUsuario[]>(this.apiURL);
    }
}
