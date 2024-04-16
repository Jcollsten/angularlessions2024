import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lession5Component } from './lession5.component';

describe('Lession5Component', () => {
  let component: Lession5Component;
  let fixture: ComponentFixture<Lession5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lession5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lession5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
