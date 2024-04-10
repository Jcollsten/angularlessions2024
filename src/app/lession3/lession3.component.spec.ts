import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lession3Component } from './lession3.component';

describe('Lession3Component', () => {
  let component: Lession3Component;
  let fixture: ComponentFixture<Lession3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lession3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lession3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
