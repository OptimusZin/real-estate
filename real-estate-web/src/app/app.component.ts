import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './head/header/header.component';
import { NavbarComponent } from './head/navbar/navbar.component';
import { SearchBarComponent } from './head/search-bar/search-bar.component';
import { BodyComponent } from './body/body.component';
import { FooterCardComponent } from './foot/footer-card/footer-card.component';
import { FooterComponent } from './foot/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NavbarComponent,SearchBarComponent, BodyComponent, FooterCardComponent, FooterComponent , RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real-estate-web';
}
