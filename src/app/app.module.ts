import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ScotchFileUploadModule } from './scotch-file-upload/scotch-file-upload.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ScotchFileUploadModule
  ],
  declarations: [
    AppComponent
  ],  
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
