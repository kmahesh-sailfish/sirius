import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SiriusService } from "../sirius.service";
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder
} from "@angular/forms";
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  public submitted: boolean = false;
  public check: any;
  public cityList: any;
  public proposalForm: FormGroup;
  public weatherList: any = [];
  constructor(
    private route: ActivatedRoute,
    private siriusSerice: SiriusService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.check = true;
    //= this.route.snapshot.data.check;
    this.loadWeather();
    this.loadcity();
    this.loadForm();
  }
  loadForm() {
    this.proposalForm = this.formBuilder.group({
      yname: ["", Validators.required],
      contactNumber: ["", Validators.required,Validators.minLength(10),Validators.maxLength(10)],
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
      ]
    });
  }
  get f() {
    return this.proposalForm.controls;
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
    this.submitted = true;

    // stop here if form is invalid
    if (this.proposalForm.invalid) {
      return;
    }
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
