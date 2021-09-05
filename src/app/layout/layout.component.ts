import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SiriusService } from "../sirius.service";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  public check: any;
  public cityList: any;
  public proposalForm: FormGroup;
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
    this.loadForm();
  }
  loadForm() {
    this.proposalForm = new FormGroup({
      yname: new FormControl("", [Validators.required]),
      contactNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required])
    });
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
  createProposal() {
    
  }
  public getColor(index: number): string {
    switch (index) {
      case 0:
        return "#0D7E88";
      case 1:
        return "#D09378";
      case 2:
        return "#405B5D";
      default:
        return "#74A748";
    }
  }
}
