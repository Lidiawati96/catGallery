import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFileComponent } from './catFile.component';

describe('CatFileComponent', () => {
  let component: CatFileComponent;
  let fixture: ComponentFixture<CatFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
