import { Component } from '@angular/core';
import { TracercoApiConfiguration } from './services/tracerco-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracerco-ui';

  constructor(private readonly tracercoApiConfig: TracercoApiConfiguration) {
    this.tracercoApiConfig.rootUrl = "https://localhost:7099";
  }
}
