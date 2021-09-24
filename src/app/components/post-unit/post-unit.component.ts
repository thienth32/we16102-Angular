import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-unit',
  templateUrl: './post-unit.component.html',
  styleUrls: ['./post-unit.component.css']
})
export class PostUnitComponent implements OnInit {
  @Input() postData: any;
  @Output() onRemove = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  btnClick(){
    this.onRemove.emit(this.postData.id)
  }

}
