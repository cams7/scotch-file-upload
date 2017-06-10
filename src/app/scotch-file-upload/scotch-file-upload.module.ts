import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageFileUploadComponent } from './page-file-upload/page-file-upload.component';

import { FileUploadService } from './file-upload.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PageFileUploadComponent
  ], 
  providers : [
    FileUploadService
  ],
  exports: [
    PageFileUploadComponent
  ]
})
export class ScotchFileUploadModule { }
