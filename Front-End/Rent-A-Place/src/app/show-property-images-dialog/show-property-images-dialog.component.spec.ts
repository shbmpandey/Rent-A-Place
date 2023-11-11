import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPropertyImagesDialogComponent } from './show-property-images-dialog.component';

describe('ShowPropertyImagesDialogComponent', () => {
  let component: ShowPropertyImagesDialogComponent;
  let fixture: ComponentFixture<ShowPropertyImagesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPropertyImagesDialogComponent]
    });
    fixture = TestBed.createComponent(ShowPropertyImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
