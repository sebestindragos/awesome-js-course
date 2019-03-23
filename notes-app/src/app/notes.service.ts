import { Injectable } from '@angular/core';

const notes = [{
  id: 0,
  title: 'my first note',
  message: 'remeber to buy stuff'
}, {
  id: 1,
  title: 'second',
  message: 'remeber to buy stuff'
}, {
  id: 2,
  title: 'third',
  message: 'remeber to buy stuff'
}];

@Injectable()
export class NotesService {

  getAllNotes () {
    return notes;
  }

  getById (id) {
    return notes[id];
  }
}
