import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

  cateForm: FormGroup = new FormGroup({
    name: new FormControl('som', [
      Validators.required,
      Validators.minLength(4)
    ])
  })
  constructor(private cateService: CategoryService,
            private router: Router) { }

  ngOnInit(): void {
  }

  get f()
  {
      return this.cateForm.controls;
  }

  onSubmit():any{
    if(this.cateForm.invalid){
      return false;
    }
    this.cateService.addCate(this.cateForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    })
  }

}
