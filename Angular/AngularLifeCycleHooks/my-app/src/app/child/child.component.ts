import { LOCATION_INITIALIZED } from '@angular/common';
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
    debugger;
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
    /* 
    This will execute after compoents projected conent is fullly LOCATION_INITIALIZED
    the projected content means content from parent via content projection
    */

  }
  ngAfterContentChecked() {
    debugger;
    /* 
    This will triger in each change detection 
    whether there is any content projection or not
    if there is  <ng-content></ng-content> present or not , this will trigger for each 
    change detection

    ngAfterContentInit will trigger after initialize projected content first time only
    but ngAfterContentChecked will execute every change detection 
    */

  }
  ngAfterViewInit() {
    /* 
    This will called after after components view and its all child views are initialized
    that means loaded
    view means html template of the currecnt compoent and all its child component
    will called only first time when the view is ready
    after the first change detection cycle this will not get called
    
    */
  }
  ngAfterViewChecked(){
    /* 
    Will get fired after ngAfterViewInit()
    this will get fired after every change detection
    this will called for each change in the view
    */
  }
  ngOnDestroy() {
    /* Get fired when the component got destroyed, i.e component got removed
    you can do some cleanup works throwError
    unsubscribe observebles here */
  }
}
