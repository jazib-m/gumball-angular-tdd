import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GumballMachineComponent } from './gumball-machine.component';

describe('GumballMachineComponent', () => {
  let component: GumballMachineComponent;
  let fixture: ComponentFixture<GumballMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GumballMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GumballMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create gumball machine', () => {
    expect(component).toBeTruthy();
  });

  it('should set message to : Quarter for a Gumball', () => {
    expect(component.message).toEqual('Quarter for a Gumball');
  });
});
