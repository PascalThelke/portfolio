import { Component, inject } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { SharkieComponent } from './sharkie/sharkie.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, SharkieComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  translate = inject(TranslationService);
}
