import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BUsellerComponent } from './buseller.component';

describe('BUsellerComponent', () => {
  let component: BUsellerComponent;
  let fixture: ComponentFixture<BUsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BUsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BUsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
