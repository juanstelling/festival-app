import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { DjsService } from "./services/djs/djs.service";
import { SetsService } from "./services/sets/sets.service";
import { CreatesetComponent } from './components/set/createset/createset.component';
import { GetsetComponent } from './components/set/getset/getset.component';
import { UpdatesetComponent } from './components/set/updateset/updateset.component';
import { FormsModule } from "@angular/forms";
import { CreatedjComponent } from './components/dj/createdj/createdj.component';
import { GetdjComponent } from './components/dj/getdj/getdj.component';
import { UpdatedjComponent } from './components/dj/updatedj/updatedj.component';
import { LineupComponent } from './components/lineup/lineup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    CreatesetComponent,
    GetsetComponent,
    UpdatesetComponent,
    CreatedjComponent,
    GetdjComponent,
    UpdatedjComponent,
    LineupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DjsService, SetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
