import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'matias'
  public nameUpper: string = 'MATIAS'
  public fullname: string = 'mAtIaS fElIpE'

  public customDate: Date = new Date();
}
