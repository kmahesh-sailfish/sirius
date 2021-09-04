import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeatureComponent } from "./feature/feature.component";
import { WeatherComponent } from "./weather/weather.component";
import { QuoteComponent } from "./quote/quote.component";

const routes: Routes = [
  {
    path: "layout",
    loadChildren: () =>
      import("./layout/layout.module").then(m => m.LayoutModule)
  },
  { path: "", redirectTo: "layout", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
