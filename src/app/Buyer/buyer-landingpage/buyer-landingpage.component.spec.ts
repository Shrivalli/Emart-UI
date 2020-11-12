import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerLandingpageComponent } from './buyer-landingpage.component';

describe('BuyerLandingpageComponent', () => {
  let component: BuyerLandingpageComponent;
  let fixture: ComponentFixture<BuyerLandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerLandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
