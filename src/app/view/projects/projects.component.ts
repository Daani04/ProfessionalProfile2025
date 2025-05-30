import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";

@Component({
  selector: 'app-projects',
  imports: [HeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  public showProjectCard: string = "none";

  public showHiddenCard(project: string): void{
    this.showProjectCard = project;
  }
}
