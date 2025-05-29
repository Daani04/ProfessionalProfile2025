import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public displayWidth: number = 0;

  ngOnInit() {
    this.displayWidth = window.innerWidth;

    setInterval(() => {
      this.displayWidth = window.innerWidth;
      console.log("Display width:", this.displayWidth);
    },100);
  }
}
