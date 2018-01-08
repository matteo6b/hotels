import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public lang:String;
  public hotels=[
    {id:1,name:"Caracas",price:"100€"},
  {id:2,name:"Caracas",price:"100€"},
  {id:3,name:"Caracas",price:"100€"},
  {id:4,name:"Vela",price:"100€"},
  {id:5,name:"Caracas",price:"100€"},
  {id:6,name:"Caracas",price:"100€"}
]

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
