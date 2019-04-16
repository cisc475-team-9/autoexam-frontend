import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UploadService } from './upload.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  postUrl = "http://localhost:2468/mbz";
  form: FormGroup;
  loading: boolean = false;
  result: any;

  constructor(private fb: FormBuilder, private upload: UploadService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      avatar: ['',Validators.required]
    });
  }

  onSubmit() {
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    this.upload.postFile(this.form.get('avatar').value).subscribe(result => this.result = result);
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  @ViewChild('fileInput') fileInput: ElementRef;
  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

}
