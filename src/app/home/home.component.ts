import { Component, OnInit } from '@angular/core'
import { ReviewsService } from '../reviews.service'
import { NotesService } from '../notes.service'
import { AuthService } from '../auth.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  id: any
  reviews: any = []
  notes: any = []
  // author: any = {name: '*nombre del autor' }

  constructor(
    private authService: AuthService,
    private reviewService: ReviewsService,
    private noteService: NotesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviewService.getAllReviews()
      .then(reviews => {
        this.reviews = reviews
      })

    this.noteService.getAllNotes()
      .then(notes => {
        this.notes = notes
    })
  }

}
