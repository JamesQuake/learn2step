import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftTurnPage } from './left-turn.page';

describe('LeftTurnPage', () => {
  let component: LeftTurnPage;
  let fixture: ComponentFixture<LeftTurnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeftTurnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
