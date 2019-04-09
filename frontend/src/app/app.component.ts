import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  afuConfig = {
    uploadAPI: {
      url:"http://localhost:2468/mbz"
    },
    formatsAllowed: ".mbz"
};
}
