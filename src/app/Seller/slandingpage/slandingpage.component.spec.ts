import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlandingpageComponent } from './slandingpage.component';

describe('SlandingpageComponent', () => {
  let component: SlandingpageComponent;
  let fixture: ComponentFixture<SlandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
