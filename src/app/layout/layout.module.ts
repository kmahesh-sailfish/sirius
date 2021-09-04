import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { SiriusService } from '../sirius.service';

@NgModule({
  declarations: [LayoutComponent],
  providers:[SiriusService],
  imports: [CommonModule, LayoutRoutingModule, HttpClientModule]
})
export class LayoutModule {}
