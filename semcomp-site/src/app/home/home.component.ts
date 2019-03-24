import { PessoasService } from "./../api/pessoas.service";
import { Component, OnInit } from "@angular/core";
import { log } from "util";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  usuarios: any;
  pagina: number;
  constructor(protected service: PessoasService) {}

  ngOnInit() {
    this.pagina = 0;
    this.carregarPessoas();
  }

  carregarPessoas() {
    this.pagina++;
    this.service.getPessoas(this.pagina).subscribe((data: any) => {
      this.usuarios = data;
      if (data.total_pages == this.pagina) {
        this.pagina = 0;
      }
    });
  }
}
