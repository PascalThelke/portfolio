import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { SharkieComponent } from './sharkie/sharkie.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, SharkieComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
