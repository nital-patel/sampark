import { HomeComponent } from './home/home.component';
import {  Routes, RouterModule } from '@angular/router';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'follow up', component: FollowUpComponent },
  { path: 'admin', component: AdminComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    HomeComponent,
    ContactsComponent,
    FollowUpComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
 ],
 exports: [
   RouterModule
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
