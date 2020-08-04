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
  private title = 'app';
  public imgUrl1: string = "https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-931270318-43ab672.jpg";
  public imgUrl2: string = "https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0";
  private CORS: string = "https://cors-anywhere.herokuapp.com/";
  @ViewChild('emptyIMG') emptyIMG;
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    const options = {
      headers: { 'Content-Type': 'image/jpg' }, params: {}, responseType: 'arraybuffer' as 'json'
    };

    this.http.get<ArrayBuffer>(this.CORS + this.imgUrl2, options).subscribe(res => this.arrayBuffertoImage(res))

  }

  fetchAPI() {
    fetch(this.imgUrl2).then(response => response.arrayBuffer()).then(buffer => this.arrayBuffertoImage(buffer))
  }

  arrayBuffertoImage(arrayBuffer: ArrayBuffer) {
    var blob = new Blob([arrayBuffer], { type: "image/jpeg" });
    var urlCreator = window.URL;
    var imageUrl = window.URL.createObjectURL(blob);
    this.emptyIMG.nativeElement.src = imageUrl;
  }




  xhrConvertImageToDataURI() {
    // function toDataURL(url, callback) {

    //   var xhr = new XMLHttpRequest();
    //   xhr.onload = function() {
    //     var reader = new FileReader();
    //     reader.onloadend = function() {
    //       callback(reader.result);
    //     }
    //     reader.readAsDataURL(xhr.response);
    //   };
    //   xhr.open('GET', url);
    //   xhr.responseType = 'blob';
    //   xhr.send();
    // }

    // toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function(dataUrl) {
    //   //console.log('RESULT:', dataUrl)
    // })
  }
}
