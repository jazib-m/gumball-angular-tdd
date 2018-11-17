import { Component, OnInit } from '@angular/core';
import { GumballServiceService } from '../services/gumball-service/gumball-service.service';
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
    private gumballService: GumballServiceService,
    private gumballHttpService: GumballHttpServiceService
  ) {}

  ngOnInit() {
    this.initialize();
  }

  public insertQuarter = function() {
    console.log('quater inserted');
  };

  public ejectQuarter = function() {
    console.log('quater ejected');
  };

  public turnCrank = function() {
    console.log('crank turned');
  };

  public takeGumball = function() {
    console.log('gumball taken');
  };

  public refill = function() {
    console.log('machine refilled');
  };

  private getCount(): void {
    this.gumballHttpService.getCount().then(res => {
      this.numberOfBalls = res.numberOfBalls;
    });
  }

  private initialize = function() {
    this.message = this.gumballService.NQ_START;
    this.getCount();
  };
}
