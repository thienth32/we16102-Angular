import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUnitComponent } from './post-unit.component';

describe('PostUnitComponent', () => {
  let component: PostUnitComponent;
  let fixture: ComponentFixture<PostUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
