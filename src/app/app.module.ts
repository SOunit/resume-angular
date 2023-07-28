import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillIconComponent } from './components/skill-icon/skill-icon.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillIconComponent,
    ExperienceComponent,
    ContactItemComponent,
    EducationComponent,
    ExperienceCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
