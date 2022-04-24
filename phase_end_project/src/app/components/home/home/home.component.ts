import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.myReactiveForm = this.formBuilder.group({ 
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);
    localStorage.setItem('name', form.value.email);
    this.route.navigate(['/question']);
  }
}
