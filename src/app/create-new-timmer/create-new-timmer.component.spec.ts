import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTimmerComponent } from './create-new-timmer.component';

describe('CreateNewTimmerComponent', () => {
  let component: CreateNewTimmerComponent;
  let fixture: ComponentFixture<CreateNewTimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewTimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewTimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
