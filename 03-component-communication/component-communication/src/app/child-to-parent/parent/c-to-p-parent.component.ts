import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ElementRef, QueryList } from '@angular/core';
import { CToPChildCComponent } from './childC/c-to-p-childC.component';

@Component({
  selector: 'app-c-to-p-parent',
  templateUrl: './c-to-p-parent.component.html',
  styleUrls: ['./c-to-p-parent.component.scss']
})
export class CtoPParerntComponent implements OnInit, AfterViewInit {
 
  @ViewChild(CToPChildCComponent , { static: false }) childCComp: CToPChildCComponent;
  @ViewChildren(CToPChildCComponent) childC: QueryList<CToPChildCComponent>;

  public messageFromChildA = '';
  public messageFromChildC = '';
    

  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewInit is where ViewChild data can be pulled/updated
  ngAfterViewInit(): void {
   
   // Below the childC ID is obtained via 
   this.childCComp.childCdata.subscribe(x=> {
     this.messageFromChildC = x;
   });

  }

   // The Parent Class has to handle the value provided by its children
   messageEventHandler($event: any) {
    this.messageFromChildA = $event; // we get the $event object pulled from the child html template
  }


}
