import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  endpoint = environment.baseUrl + 'autores/';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.endpoint);
  }

}
