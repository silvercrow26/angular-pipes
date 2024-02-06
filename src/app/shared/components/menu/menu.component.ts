import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'text and dates',
            icon: 'pi pi-align-left',
            routerLink: '/'

          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'Uncommon',
            icon: 'pi pi-globe',
            routerLink:'uncommon'
          },
        ]
      },
      {
        label: 'Custom Pipes',
        icon:'pi pi-cog',
        items:[
          {
            label: 'Another Element',
            icon:'pi pi-cog'
          },
        ]
      },
      {
        label: 'Undo',
        icon: 'pi pi-fw pi-refresh'
      }
    ]
  }
}
