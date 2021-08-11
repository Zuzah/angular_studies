import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, zip } from 'rxjs';

@Component({
  selector: 'app-c-to-p-childC',
  templateUrl: './c-to-p-childC.component.html',
  styleUrls: ['./c-to-p-childC.component.scss']
})
export class CToPChildCComponent implements OnInit {

  public childCdata: BehaviorSubject<string> = new BehaviorSubject("Loading");
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{                
      
      this.childCdata.next(this.setChildID());
    }, 3000); 
  }

  getChildID(): string {
    // subscribe to the latest value

    return 
  }

  setChildID(childref?: any): string {
    return Math.random().toString().substr(2, 5);
  }

}
