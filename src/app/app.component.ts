import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = "Date"
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    const options = {
      headers: { 'Content-Type': 'image/jpg' }, params: {}, responseType: 'arraybuffer' as 'json'
    };

  }


}
