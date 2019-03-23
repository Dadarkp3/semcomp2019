import { FaleConoscoComponent } from "./fale-conosco/fale-conosco.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SobreComponent } from "./sobre/sobre.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sobre", component: SobreComponent },
  { path: "faleconosco", component: FaleConoscoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
