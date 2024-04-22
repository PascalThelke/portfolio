import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-join',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
})
export class JoinComponent {
  translate = inject(TranslationService);
}
