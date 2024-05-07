import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { addtokenInterceptor } from './addtoken.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ISIE_ROUTING } from './app.routing';
import { ChildComponent } from './child/child.component';
import { CustomDirDirective } from './custom-dir.directive';
import { CvComponent } from './cv/cv.component';
import { DetailsComponent } from './details/details.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecruesComponent } from './recrues/recrues.component';
import { ShortPipe } from './short.pipe';
import { UpdateComponent } from './update/update.component';

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
    HomeComponent,
    LoginComponent,
    AddComponent,
    InfosComponent,
    UpdateComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ISIE_ROUTING,
    HttpClientModule,
  ],
  providers: [provideHttpClient(withInterceptors([addtokenInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
