import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFormArrayComponent } from "./app-form-array/app-form-array.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppFormArrayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formValidation';
}
