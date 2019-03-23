import { Component } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: []
})
export class NotesListComponent {
  notes = [];

  constructor (notesService: NotesService) {
    this.notes = notesService.getAllNotes();
  }
}
