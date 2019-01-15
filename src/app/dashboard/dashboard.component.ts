import { Component, OnInit } from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import { ReviewsService } from '../reviews.service'
import { NotesService } from '../notes.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  id: string
  review: any = { movie: '', director: '', year: '', text: '' , stars: '' }
  note: any = { title: '', text: '', tags: '', images: '' }
  user: any = {}
  isAuthor = false
  reviews: any = [{ movie: '', director: '', year: '', text: '' , stars: '' }]
  notes: any = [{ title: '', text: '', tags: '', images: '' }]
  newPostReview = false
  newPostNote = false
  value: string
  viewValue: string
  selectedValue: string
  done = false

  stars = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'}
  ];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewsService,
    private noteService: NotesService,
    private router: Router
  ) { }

  ngOnInit() {
    
    //get user and their posts
    this.user = JSON.parse(localStorage.getItem('user'))
    this.reviewService.getAllReviewsByUser(this.user._id).subscribe(rs => {
      this.reviews = rs.reviews;
    })
    this.noteService.getAllNotesByUser(this.user._id).then(ns => {
      console.log(ns)
    })
    // this.notes = this.user.notes
    // this.reviews = this.user.reviews
    console.log(this.reviews)
    console.log(this.notes)
    console.log(this.user)
    if(this.user.role === 'author'){
      this.isAuthor = true
    }

  }
    
  //CRUD DE POSTS
  saveReview() {
    this.reviewService.createReview(this.review).subscribe(data => {
      this.router.navigate(['/dashboard'])
    })
  }

  saveNote() {
    this.noteService.createNote(this.note).subscribe(data => {
      this.router.navigate(['/dashboard'])
    })
  }
  
  removeReview(id){
    this.reviewService.deleteReview(this.id).subscribe(() => {
      this.router.navigate(['/home'])
      this.done = true;
    })
  }

  removeNote(){
    this.noteService.deleteNote(this.id).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }

  updateReview(){
    this.reviewService.editOneReview(this.review).subscribe(data => {
      this.router.navigate(['/dashboard'])
    })
  }

  updateNote(){
    this.noteService.editOneNote(this.note).subscribe(data => {
      this.router.navigate(['/dashboard'])
    })
  }

}