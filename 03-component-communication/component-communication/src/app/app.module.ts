import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PtoCParerntComponent  } from './parent-to-child/parent/p-to-c-parent.component';
import { PtoCChildComponent } from './parent-to-child/child/p-to-c-child.component';

import { CtoPChildAComponent } from './child-to-parent/parent/childA/c-to-p-childA.component';
import { CtoPChildBComponent } from './child-to-parent/parent/childB/c-to-p-childB.component';
import { CtoPParerntComponent } from './child-to-parent/parent/c-to-p-parent.component';

import { SiblingToSiblingComponent } from './sibling-to-sibling/sibling-to-sibling.component';
import { UrlCommunicationComponent } from './url-communication/url-communication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

import { SiblingAComponent } from './sibling-to-sibling/sibling-a/sibling-a.component';
import { SiblingBComponent } from './sibling-to-sibling/sibling-b/sibling-b.component';
import { CToPChildCComponent } from './child-to-parent/parent/childC/c-to-p-childC.component';


@NgModule({
  declarations: [
    AppComponent,
    // Pair for Parent-to-Child Communication
    PtoCParerntComponent,
    PtoCChildComponent,

    // Pair for Child-to-Parent Communication
    CtoPChildAComponent,
    CtoPChildBComponent,
    CtoPParerntComponent,

    SiblingToSiblingComponent,
    UrlCommunicationComponent,
    SiblingAComponent,
    SiblingBComponent,
    CToPChildCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
