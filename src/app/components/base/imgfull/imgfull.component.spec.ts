import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgfullComponent } from './imgfull.component';

describe('ImgfullComponent', () => {
  let component: ImgfullComponent;
  let fixture: ComponentFixture<ImgfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
