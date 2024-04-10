import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lession4Component } from './lession4.component';

describe('Lession4Component', () => {
  let component: Lession4Component;
  let fixture: ComponentFixture<Lession4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lession4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lession4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
