import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Aluno } from './aluno'; 

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = 'http://localhost:64389/api/alunos';  

  constructor(private http: HttpClient) { }

  getAllAlunos(): Observable<Aluno[]> {  
    return this.http.get<Aluno[]>(this.url+"/GetAll");  
  }  

  getAlunoById(alunoid: string): Observable<Aluno> {  
    const apiurl = `${this.url+"/Get/"}${alunoid}`;
    return this.http.get<Aluno>(apiurl);  
  } 

  createAluno(aluno: Aluno): Observable<Aluno> {  
    return this.http.post<Aluno>(this.url+"/Insert", aluno, httpOptions);  
  }  

  updateAluno(alunoid: string, aluno: Aluno): Observable<Aluno> {  
    const apiurl = `${this.url}/Update/${alunoid}`;
    return this.http.put<Aluno>(apiurl, aluno, httpOptions);  
  }  

  deleteAlunoById(alunoid: string): Observable<number> {  
    const apiurl = `${this.url}/Delete/${alunoid}`;
    return this.http.delete<number>(apiurl, httpOptions);  
  }  
}
