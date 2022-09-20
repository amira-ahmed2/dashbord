import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidbarComponent } from './subsidbar.component';

describe('SubsidbarComponent', () => {
  let component: SubsidbarComponent;
  let fixture: ComponentFixture<SubsidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsidbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
