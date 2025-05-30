import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-page',
  imports: [],
  templateUrl: './confirm-page.component.html',
  styleUrl: './confirm-page.component.css'
})
export class ConfirmPageComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['/home']);
    }, 2500);
  }
    
}
