import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent {
  @Input() item = ''
  //  item = '';
  childNumber = 'Amal';
  childName = '';
  constructor() {

  }
  ngOnChanges() {
    /* will invoke before ngOnInit
    when ever the input value changes this will invoke */
    let a = this.item;
    // let b = this.childNumber;
    // 
  }
  ngOnInit() {
    let a = this.item;
    // setInterval(() => {
    //   this.childNumber = 'Amal' + Math.random();
    // }, 1000)
  }
  ngDoCheck() {
    /* When ever there is a change detection occure 
    this life cycle hook get triggered
    eg: when you click a GamepadButton
    When you enter some text in input field etc 
    - You can use this when you want ot do some code, on every change detection
    */
    let a = this.item;

    console.log("ngDoCheck")

  }
  ngAfterContentInit() {

  }
  ngAfterContentChecked() {

  }
  ngAfterViewInit() {
    debugger;
  }
  ngOnDestroy() {
    /* Get fired when the component got destroyed, i.e component got removed
    you can do some cleanup works throwError
    unsubscribe observebles here */
  }
}
