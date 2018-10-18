import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GumballServiceService {

  public NQ_START = 'Quarter for a Gumball';
  public NQ_QUART = 'Turn the Crank for a Gumball';
  public NQ_EJECT = 'You have not inserted a quarter yet';
  public NQ_CRANK = 'You need to pay first';
  public NQ_TAKE = 'So Sorry, come back after pay day';

  public HQ_START = 'Turn the Crank for a Gumball';
  public HQ_QUART = 'You can not insert another quarter';
  public HQ_EJECT = 'Pick up your Quarter from the tray';
  public HQ_CRANK = 'A Gumball is on its way!';
  public HQ_TAKE = 'Quarter for a Gumball';

  public SO_START = 'Sorry, the machine is sold out';
  public SO_QUART = 'There are no gumballs, please pick up your quarter';
  public SO_EJECT = 'This is not a slot machine';
  public SO_CRANK = 'There are no gumballs';
  public SO_TAKE = 'I can\'t give you what I don\'t have';


  constructor() {

   }

}
