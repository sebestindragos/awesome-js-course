import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { NotesListComponent } from './notes-list.component';
import { NoteDetailsPageComponent } from './note-details-page.component';
import { NotesService } from './notes.service';

const routes: Routes = [{
  path: '', component: HomePageComponent
}, {
  path: 'notes/:id', component: NoteDetailsPageComponent
}];

@NgModule({
  declarations: [
    HomePageComponent,
    NotesListComponent,
    NoteDetailsPageComponent
  ],
  providers: [
    NotesService
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
