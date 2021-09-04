import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, HttpClientModule]
})
export class LayoutModule {}
