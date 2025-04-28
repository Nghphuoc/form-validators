import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-form-user',
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './form-user.component.html',
})
export class FormUserComponent {
  myForm: FormGroup;
  phone: string ='';

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      alert("submit success")
    }
  }
}
