import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
public lang:String;

  constructor(private activatedRoute : ActivatedRoute,private translate: TranslateService) {
      translate.setDefaultLang('en');
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params : Params) => {
      console.log(params['lang'])
      if(params['lang']==undefined){
        this.lang="en"
      }else{
            this.lang=params['lang'];
          this.translate.use( params['lang'] );
        }
  });

}
}
