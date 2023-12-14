import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAjoutComponent } from './reservation-ajout.component';

describe('ReservationAjoutComponent', () => {
  let component: ReservationAjoutComponent;
  let fixture: ComponentFixture<ReservationAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
