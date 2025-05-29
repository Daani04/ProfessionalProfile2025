import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  public displayWidth: number = 0;

  ngOnInit() {
    this.displayWidth = window.innerWidth;

    setInterval(() => {
      this.displayWidth = window.innerWidth;
      console.log("Display width:", this.displayWidth);
    },100);
  }

  public goToAboutMe(){
    this.router.navigate(['about-me']);
  }
}
