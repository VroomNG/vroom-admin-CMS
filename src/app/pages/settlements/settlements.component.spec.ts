import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementsComponent } from './settlements.component';

describe('SettlementsComponent', () => {
  let component: SettlementsComponent;
  let fixture: ComponentFixture<SettlementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettlementsComponent]
    });
    fixture = TestBed.createComponent(SettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
