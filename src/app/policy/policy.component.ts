import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss',
})
export class PolicyComponent {
  translate = inject(TranslationService);
}
