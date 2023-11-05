import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HalfTurnPage } from './half-turn.page';

describe('HalfTurnPage', () => {
  let component: HalfTurnPage;
  let fixture: ComponentFixture<HalfTurnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HalfTurnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
