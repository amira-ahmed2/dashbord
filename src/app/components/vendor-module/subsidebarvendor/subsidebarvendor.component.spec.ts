import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidebarvendorComponent } from './subsidebarvendor.component';

describe('SubsidebarvendorComponent', () => {
  let component: SubsidebarvendorComponent;
  let fixture: ComponentFixture<SubsidebarvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsidebarvendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsidebarvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
