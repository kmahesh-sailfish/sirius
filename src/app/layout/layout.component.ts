import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SiriusService } from "../sirius.service";
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  public check: any;
  public cityList: any;
  public weatherList: any = [];
  constructor(
    private route: ActivatedRoute,
    private siriusSerice: SiriusService
  ) {}

  ngOnInit(): void {
    this.check = true;
    //= this.route.snapshot.data.check;
    this.loadWeather();
    this.loadcity();
  }
  loadWeather() {
    this.siriusSerice.getWeatherList().subscribe(data => {
      this.weatherList = data;
    });
  }
   loadcity() {
    this.cityList = this.siriusSerice.getcityList().subscribe(data => {
      this.cityList = data;
    });
  }
}
