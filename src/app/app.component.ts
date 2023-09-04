import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  link: string = 'www.sagta.com';
  inputUrl: string = '';
  inputName: string = '';
  qrCodeDownloadLink: SafeUrl = '';

  generateQR() {
    this.link = this.inputUrl;
  }

  onChangeUrl(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
