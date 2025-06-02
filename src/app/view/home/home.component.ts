import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { Router } from '@angular/router';
import { HomeHeaderComponent } from "../../component/home-header/home-header.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HomeHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  constructor(private router: Router) { }

  public displayWidth: number = 0;

  ngOnInit() {
    this.displayWidth = window.innerWidth;

    setInterval(() => {
      this.displayWidth = window.innerWidth;
      console.log("Display width:", this.displayWidth);
    },100);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observar todos los elementos que queremos animar
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });
  }

  public goToAboutMe(){
    this.router.navigate(['about-me']);
  }
}
