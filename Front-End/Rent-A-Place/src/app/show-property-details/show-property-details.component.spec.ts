import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPropertyDetailsComponent } from './show-property-details.component';

describe('ShowPropertyDetailsComponent', () => {
  let component: ShowPropertyDetailsComponent;
  let fixture: ComponentFixture<ShowPropertyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPropertyDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
