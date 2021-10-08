import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { uniqueCategoryName } from 'src/custom_validate/category.validator';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

  cateForm: FormGroup;
  constructor(private cateService: CategoryService,
            private fb: FormBuilder) { 
    this.cateForm = this.fb.group({
      name: ['', Validators.required, uniqueCategoryName(this.cateService)]
    })
  }

  ngOnInit(): void {
    
  }

  get f(){ return this.cateForm.controls; }

}
