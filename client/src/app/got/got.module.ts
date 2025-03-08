import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterComponent } from './components/character/character.component';
import { FamilySelecterComponent } from './components/family-selecter/family-selecter.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersListComponent,
    CharacterComponent,
    FamilySelecterComponent,
  ],
  imports: [CommonModule],
  exports: [MainPageComponent],
  providers: [provideHttpClient()],
})
export class GotModule {}
