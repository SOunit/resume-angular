import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillIconComponent } from './skill-icon/skill-icon.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactItemComponent } from './contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillIconComponent,
    ExperienceComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
