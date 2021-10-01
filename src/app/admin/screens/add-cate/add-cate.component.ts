import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

  cateForm: FormGroup = new FormGroup({
    name: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cateForm.value);
  }

}
