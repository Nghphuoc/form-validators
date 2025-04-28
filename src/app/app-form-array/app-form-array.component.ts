import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-array',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './app-form-array.component.html',
  styleUrl: './app-form-array.component.css'
})
export class AppFormArrayComponent implements OnInit{
  phoneForm!: FormGroup;

  ngOnInit() {
    this.phoneForm = new FormGroup({
      phones: new FormArray([]),  
    });
  }

  get phones() {
    return (this.phoneForm.get('phones') as FormArray);  
  }

  addPhone() {
    // Thêm một FormControl mới vào FormArray với Validator kiểm tra số điện thoại
    this.phones.push(new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]));
  }

  removePhone(index: number) {
    this.phones.removeAt(index);  // Loại bỏ số điện thoại tại vị trí chỉ định
  }

  onSubmit() {
    console.log(this.phoneForm.value);  // Xử lý dữ liệu khi submit
  }
}
