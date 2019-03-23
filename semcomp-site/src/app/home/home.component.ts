import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  valor: number;
  constructor() {}

  ngOnInit() {
    this.valor = 0;
  }

  public adicionar(): void {
    this.valor++;
  }

  public diminuir(): void {
    this.valor--;
  }
}
