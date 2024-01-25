import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from './hero/hero.component'
import {AboutComponent} from './about/about.component'
import {SkillsComponent} from './skills/skills.component'
import {PortfiloComponent} from './portfilo/portfilo.component'
import {FooterComponent} from './footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroComponent,AboutComponent,SkillsComponent,PortfiloComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portofilo';
}
