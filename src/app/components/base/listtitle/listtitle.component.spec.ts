import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtitleComponent } from './listtitle.component';

describe('ListtitleComponent', () => {
  let component: ListtitleComponent;
  let fixture: ComponentFixture<ListtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
