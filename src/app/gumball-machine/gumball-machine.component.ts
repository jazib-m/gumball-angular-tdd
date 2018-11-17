import { Component, OnInit } from '@angular/core';
import { GumballHttpServiceService } from '../services/gumball-http-service/gumball-http-service.service';

@Component({
  selector: 'app-gumball-machine',
  templateUrl: './gumball-machine.component.html',
  styleUrls: ['./gumball-machine.component.css']
})
export class GumballMachineComponent implements OnInit {
  public message: String;
  public numberOfBalls: number;

  constructor(
    private gumballHttpService: GumballHttpServiceService
  ) {}

  ngOnInit() {
    this.initialize();
  }

  public insertQuarter = function() {
    this.gumballHttpService.insertQuarter().then(res => {
      this.message = res.message;
    });
  };

  public ejectQuarter = function() {
    this.gumballHttpService.eject().then(res => {
      this.message = res.message;
    });
  };

  public turnCrank = function() {
    this.gumballHttpService.turnCrank().then(res => {
      this.message = res.message;
    });
  };

  public takeGumball = function() {
    this.gumballHttpService.takeGumball().then(res => {
      this.message = res.message;
    });
  };

  public refill = function() {
    this.gumballHttpService.refill().then(res => {
      this.message = res.message;
    });
  };

  private getCount(): void {
    this.gumballHttpService.getCount().then(res => {
      this.numberOfBalls = res.numberOfBalls;
    });
  }

  private getMessage(): void {
    this.gumballHttpService.getmessage().then(res => {
      this.message = res.message;
    });
  }

  private initialize = function() {
    this.getMessage();
    this.getCount();
  };
}
