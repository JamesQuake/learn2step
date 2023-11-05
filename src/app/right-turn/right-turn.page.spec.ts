import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightTurnPage } from './right-turn.page';

describe('RightTurnPage', () => {
  let component: RightTurnPage;
  let fixture: ComponentFixture<RightTurnPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RightTurnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
