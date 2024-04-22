import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sharkie',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sharkie.component.html',
  styleUrl: './sharkie.component.scss',
})
export class SharkieComponent {
  translate = inject(TranslationService);
}
