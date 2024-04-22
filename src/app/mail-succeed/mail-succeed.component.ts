import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mail-succeed',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './mail-succeed.component.html',
  styleUrl: './mail-succeed.component.scss'
})
export class MailSucceedComponent {
  translate = inject(TranslationService);
}
