import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public imgUrl1 : string = "https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-931270318-43ab672.jpg"
  public imgUrl2 : string = "https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0"
  ngOnInit (){

  // fetch(this.imgUrl2).then(response => 

  //   response.json())
 


    function toDataURL(url, callback) {

      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
          callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    }
    
    toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function(dataUrl) {
      //console.log('RESULT:', dataUrl)
    })
  }
}
