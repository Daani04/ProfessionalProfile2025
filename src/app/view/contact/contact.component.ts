import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private router: Router) { }

  public githubAnimated: boolean = false;
  public linkedinAnimated: boolean = false;

  public changueToGithubAnimated(): void {
    this.githubAnimated = true;
  } 

  public changueToLinkedinAnimated(): void {
    this.linkedinAnimated = true;
  } 

  public confirmationMailPage(): void {
    this.router.navigate(['/confirm-page']);
  }
}
