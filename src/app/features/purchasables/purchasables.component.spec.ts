import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasablesComponent } from './purchasables.component';

describe('PurchasablesComponent', () => {
  let component: PurchasablesComponent;
  let fixture: ComponentFixture<PurchasablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchasablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
