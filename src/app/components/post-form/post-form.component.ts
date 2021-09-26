import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() onSave = new EventEmitter<any>();
  formObject = {
    id: 0,
    title: "",
    imgUrl: "",
    catename: "",
    shortDesc: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  saveForm(){
    this.onSave.emit(this.formObject);
    this.clearFormData();
  }
  clearFormData(){
    this.formObject = {
      id: 0,
      title: "",
      imgUrl: "",
      catename: "",
      shortDesc: ""
    }
  }
}
