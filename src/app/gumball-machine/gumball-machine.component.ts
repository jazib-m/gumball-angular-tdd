import { Component, OnInit } from '@angular/core';
import { GumballServiceService } from '../services/gumball-service/gumball-service.service';

@Component({
  selector: 'app-gumball-machine',
  templateUrl: './gumball-machine.component.html',
  styleUrls: ['./gumball-machine.component.css']
})
export class GumballMachineComponent implements OnInit {
public message: String;

  constructor( private gumballService: GumballServiceService) { }

  ngOnInit() {
    this.initialize();
  }

  public insertQuarter = function () {
  };

  public ejectQuarter = function () {
  };

  public turnCrank = function() {
  };

  public takeGumball = function() {
  };

  public initialize = function() {
    this.message = this.gumballService.NQ_START;
  };

  public refill = function() {
  };

}
