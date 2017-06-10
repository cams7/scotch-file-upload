import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFileUploadComponent } from './page-file-upload.component';

describe('PageFileUploadComponent', () => {
  let component: PageFileUploadComponent;
  let fixture: ComponentFixture<PageFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
