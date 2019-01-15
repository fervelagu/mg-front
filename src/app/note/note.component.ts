import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  
  id: any
  note: any = { title: '',  author: '', text: '', tags:'' }
  author: any = { name: '' }

  constructor(
    private activeRoute: ActivatedRoute,
    private noteService: NotesService
  ) { }

  ngOnInit() {
    this.activeRoute.children[0].params.subscribe(params => {
      this.id = params.id
      this.noteService.getOneNote(this.id).subscribe(note => {
        this.note = note
        console.log(this.note)
        // this.author = note.author
      })
    })
  }
}
