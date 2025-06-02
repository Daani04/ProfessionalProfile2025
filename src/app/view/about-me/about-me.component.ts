import { Component, ViewChildren, Renderer2, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactComponent } from "../contact/contact.component";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-me',
  imports: [HeaderComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  @ViewChildren('cardElem') cardElems!: QueryList<ElementRef>;


  public allItems = [
    { 
      key: 'HTML', 
      value: 'I have over three years of experience building websites using HTML. Throughout my training as an IT Systems Technician and Web Developer, I have consistently improved my skills in semantic content structuring, following best practices to ensure accessibility, scalability, and clean, maintainable code.',
      position: 'left', 
      active: false
    },
    { 
      key: 'CSS', 
      value: 'For over three years, I’ve been working with CSS to build visually appealing and responsive web interfaces. Through my training, I’ve learned to implement clean and efficient styling, mastering concepts like responsive design, flexbox, grid, animations, and CSS variables — all focused on enhancing user experience and maintaining a clear, reusable code structure.',
      position: 'right', 
      active: false
    },
    { 
      key: 'JavaScript', 
      value: 'I’ve been working with JavaScript for about two years. I started with the basics, including DOM manipulation, and progressively expanded my knowledge into more advanced technologies such as TypeScript with Angular and Node.js for backend development. This progression has enabled me to build dynamic and structured web applications on both the client and server sides.',
      position: 'left', 
      active: false
    },
    { 
      key: 'PHP', 
      value: 'Over the past two years, I’ve worked with PHP for backend development, focusing on the Symfony framework. This experience has helped me structure projects efficiently, apply clean architecture, and use tools like routing, Doctrine ORM, and service injection to build scalable and maintainable applications.',
      position: 'right', 
      active: false
    },
    { 
      key: 'Git', 
      value: 'I have experience using Git as a version control system to efficiently manage development projects. I’m familiar with working with branches, creating structured commits, resolving merge conflicts, and coordinating team workflows in an organized manner. I use Git in both personal and collaborative projects to maintain a clean and maintainable change history.',
      position: 'left', 
      active: false
    },
    { 
      key: 'Docker', 
      value: 'I have experience using Docker to create, deploy, and manage containerized applications. I understand key concepts such as images, containers, volumes, and networks, and I apply Docker to improve efficiency in the development lifecycle and continuous integration.',
      position: 'right', 
      active: false
    },
      { 
      key: 'AWS', 
      value: 'I have experience deploying applications to the cloud using AWS services, especially EC2 instances. I have configured and managed virtual servers to host web applications.',
      position: 'left',
      active: false
    },
  ];

  ngAfterViewInit() {
    this.initScrollAnimations();
  }

  private initScrollAnimations() {
    this.cardElems.forEach(card => {
      const el = card.nativeElement;

      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          toggleClass: { targets: el, className: "active" },
          once: false,
          scrub: false,
        }
      });
    });
  }


}
