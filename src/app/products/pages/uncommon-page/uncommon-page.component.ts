import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Matias';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'Mr. ',
    'female': 'Mrs. '
  }

  changeClient(): void {
    this.name = 'Melian';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Melian', 'Shadow', 'Shock', 'Falopa', 'Joruji', 'Mei', 'Zagan','Coni','Javi']
}
