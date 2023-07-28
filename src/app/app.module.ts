import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillIconComponent } from './components/skill-icon/skill-icon.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillIconComponent,
    ExperienceComponent,
    ContactItemComponent,
    EducationComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
