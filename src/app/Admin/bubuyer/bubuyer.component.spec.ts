import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BUbuyerComponent } from './bubuyer.component';

describe('BUbuyerComponent', () => {
  let component: BUbuyerComponent;
  let fixture: ComponentFixture<BUbuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BUbuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BUbuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
