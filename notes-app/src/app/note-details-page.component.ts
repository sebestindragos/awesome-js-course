import { Component } from '@angular/core';
import { NotesService } from './notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'note-details-page.component.html'
})
export class NoteDetailsPageComponent {

  note = {};

  constructor (notesService: NotesService, route: ActivatedRoute) {
    let id = route.snapshot.params['id'];
    this.note = notesService.getById(id);
  }
}
