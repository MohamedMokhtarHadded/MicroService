import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerUpdateFormComponent } from './foyer-update-form.component';

describe('FoyerUpdateFormComponent', () => {
  let component: FoyerUpdateFormComponent;
  let fixture: ComponentFixture<FoyerUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
