import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { SiriusService } from "../sirius.service";
import { ColorPipe } from "../color.pipe";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [LayoutComponent],
  providers: [SiriusService, ColorPipe],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutModule {}
