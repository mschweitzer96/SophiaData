import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  messageForm: FormGroup;
  post: any;
  description:string = '';
  name:string = '';
  institution:string = '';
  email:string = '';
  titleAlert: string = '';


  constructor(private formBuilder: FormBuilder) {
    this.messageForm = formBuilder.group({
      'name': [null],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'institution': [null],
      'email': [null, Validators.required],
      'validate' : ''
    });
   }

  

  addpost (post){
    this.description = post.description;
    this.name = post.name;
    this.institution = post.institution;
    this.email = post.email
  }

}
