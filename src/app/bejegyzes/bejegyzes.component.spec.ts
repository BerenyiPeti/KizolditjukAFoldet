import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BejegyzesComponent } from './bejegyzes.component';

describe('BejegyzesComponent', () => {
  let component: BejegyzesComponent;
  let fixture: ComponentFixture<BejegyzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BejegyzesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BejegyzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
