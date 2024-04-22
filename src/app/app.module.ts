import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CustomDirDirective } from './custom-dir.directive';
import { CvComponent } from './cv/cv.component';
import { DetailsComponent } from './details/details.component';
import { FirstComponent } from './first/first.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';
import { ShortPipe } from './short.pipe';
import { RecruesComponent } from './recrues/recrues.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    CustomDirDirective,
    ShortPipe,
    RecruesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
