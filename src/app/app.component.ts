import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showHeader = false;
  showSidebar = false;
  showFooter = false;
  
  items = [];

  constructor(
              private router: Router, 
              private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !==false;
        this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !==false;
        this.showSidebar = this.activatedRoute.firstChild.snapshot.data.showSidebar !==false;
      }
    });

  }
  
}
