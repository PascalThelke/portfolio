import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skillNameFirstContainer: string[] = [
    'Angular',
    'TypeScript',
    'Javascript',
    'HTML',
    'CSS',
  ];
  skillNameSecondContainer: string[] = [
    'Firebase',
    'Git',
    'Scrum',
    'Rest-Api',
    'Material Design',
  ];

  translate = inject(TranslationService);
}
