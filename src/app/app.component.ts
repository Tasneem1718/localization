import { Component } from '@angular/core';
import { TranslationService } from './translation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartest';
  constructor(private translationService: TranslationService) {}
  
    switchLanguage(language: string) {
      this.translationService.setLanguage(language);
    }
}

