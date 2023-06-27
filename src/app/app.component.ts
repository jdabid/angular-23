import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public title = 'Buen dia';
  public  counter : number = 200;
  increaseBy(value:number):void{
    this.counter +=value;
  }

  resetBy():void{
    this.counter =200;
  }

}
