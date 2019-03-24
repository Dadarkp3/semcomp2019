import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PessoasService {
  constructor(private http: HttpClient) {}

  getPessoas(page: number) {
    return this.http.get("https://reqres.in/api/users?page=" + page);
  }
}
