import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private menuItemsArray: any[] = [ 
    {"title":"Главная","link":"/home"},
    {"title":"Все страны","link":"/all-countries"},
    {"title":"Home and Kitchen","link":"#",
    "subItems":[
                {"title":"Furniture","link":"#"},
                {"title":"Cookware","link":"#"},
               ]
    },
    {"title":"Car and Bike Accessories","link":"#",
     "subItems":[
                  {"title":"Tyres and Alloys","link":"#"},
                  {"title":"Comfort and Safety","link":"#"},
                ]
    },
];

    public onMenuClose(){
     console.log("menu closed");
    }

    public onMenuOpen(){
     console.log("menu Opened");
    }

    private onItemSelect(item:any){
     console.log(item);
     this.router.navigate([item.link]);
    }
}
