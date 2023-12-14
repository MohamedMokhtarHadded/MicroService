import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocFormUpdateComponent } from './bloc-form-update.component';

describe('BlocFormUpdateComponent', () => {
  let component: BlocFormUpdateComponent;
  let fixture: ComponentFixture<BlocFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
