import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgClass, RouterOutlet, ResponsiveHelperComponent, HttpClientModule, CommonModule],
})
export class AppComponent {
  title = 'Angular Tailwind';

  constructor(public themeService: ThemeService) {}
}
