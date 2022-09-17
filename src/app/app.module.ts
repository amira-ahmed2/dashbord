import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { UndefinedpageComponent } from './components/undefinedpage/undefinedpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    LoginadminComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    UserComponent,
    VendorComponent,
    UndefinedpageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
