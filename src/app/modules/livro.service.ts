import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Livro } from './livro';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  endpoint = environment.baseUrl + 'livros/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.endpoint);
  }

  obter(id: string) {
    return this.http.get(this.endpoint + id);
  }

  adicionar(livro: any): Observable<any> {
    return this.http.post(this.endpoint, livro, { headers: this.headers })
      .pipe(
        catchError(this.error)
      )
  }

  atualizar(livro: Livro): Observable<any> {
    return this.http.put(this.endpoint, livro, { headers: this.headers }).pipe(
      catchError(this.error)
    )
  }

  excluir(id: string): Observable<any> {
    return this.http.delete(this.endpoint + id).pipe(
      catchError(this.error)
    )
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
