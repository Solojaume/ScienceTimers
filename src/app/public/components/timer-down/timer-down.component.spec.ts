import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimerDownComponent } from './timer-down.component';


describe('TimerDownComponent', () => {
  let component: TimerDownComponent;
  let fixture: ComponentFixture<TimerDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
