import { Component, ViewChildren, Renderer2, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContactComponent } from "../contact/contact.component";
import { LenguajeServiceService } from '../../services/translate.service';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-me',
  imports: [HeaderComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements AfterViewInit {

  constructor(
    public languageService: LenguajeServiceService,
    private renderer: Renderer2

  ) {
    this.languageService.isSpanish$.subscribe(
      (isSpanish: boolean) => this.isSpanish = isSpanish
    );
  }

  public isSpanish: boolean = false;

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

  public allItemsSpa = [
    {
      key: 'HTML',
      value: 'Tengo más de tres años de experiencia construyendo sitios web usando HTML. A lo largo de mi formación como Técnico en Sistemas Informáticos y Desarrollador Web, he mejorado constantemente mis habilidades en la estructuración semántica del contenido, siguiendo las mejores prácticas para garantizar accesibilidad, escalabilidad y código limpio y mantenible.',
      position: 'left',
      active: false
    },
    {
      key: 'CSS',
      value: 'Durante más de tres años, he trabajado con CSS para construir interfaces web visualmente atractivas y responsivas. A través de mi formación, he aprendido a implementar estilos limpios y eficientes, dominando conceptos como diseño responsivo, flexbox, grid, animaciones y variables CSS — todo enfocado en mejorar la experiencia del usuario y mantener una estructura de código clara y reutilizable.',
      position: 'right',
      active: false
    },
    {
      key: 'JavaScript',
      value: 'He estado trabajando con JavaScript durante aproximadamente dos años. Comencé con lo básico, incluida la manipulación del DOM, y progresivamente amplié mis conocimientos hacia tecnologías más avanzadas como TypeScript con Angular y Node.js para desarrollo backend. Esta progresión me ha permitido construir aplicaciones web dinámicas y estructuradas tanto en el cliente como en el servidor.',
      position: 'left',
      active: false
    },
    {
      key: 'PHP',
      value: 'Durante los últimos dos años, he trabajado con PHP para desarrollo backend, enfocándome en el framework Symfony. Esta experiencia me ha ayudado a estructurar proyectos de manera eficiente, aplicar arquitectura limpia y usar herramientas como routing, Doctrine ORM e inyección de servicios para construir aplicaciones escalables y mantenibles.',
      position: 'right',
      active: false
    },
    {
      key: 'Git',
      value: 'Tengo experiencia usando Git como sistema de control de versiones para gestionar proyectos de desarrollo de manera eficiente. Estoy familiarizado con el trabajo con ramas, la creación de commits estructurados, la resolución de conflictos de merge y la coordinación de flujos de trabajo en equipo de forma organizada. Uso Git tanto en proyectos personales como colaborativos para mantener un historial de cambios limpio y mantenible.',
      position: 'left',
      active: false
    },
    {
      key: 'Docker',
      value: 'Tengo experiencia usando Docker para crear, desplegar y gestionar aplicaciones en contenedores. Comprendo conceptos clave como imágenes, contenedores, volúmenes y redes, y aplico Docker para mejorar la eficiencia en el ciclo de desarrollo y la integración continua.',
      position: 'right',
      active: false
    },
    {
      key: 'AWS',
      value: 'Tengo experiencia desplegando aplicaciones en la nube usando servicios de AWS, especialmente instancias EC2. He configurado y gestionado servidores virtuales para alojar aplicaciones web.',
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

  toggleLanguage(language: 'es' | 'en') {
    this.languageService.setLanguage(language);
    localStorage.setItem('language', language);

  }
  getText(es: string, en: string): string {
    return this.isSpanish ? es : en;
  }

}
