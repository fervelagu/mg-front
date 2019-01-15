import { Component, OnInit } from '@angular/core'
import { ReviewsService } from '../reviews.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  id: any
  review: any = { movie: '' }
  author: any = { name: '*nombre del author*' }

  constructor(
    private activeRoute: ActivatedRoute,
    private reviewService: ReviewsService
  ) { }

  ngOnInit() {
    this.activeRoute.children[0].params.subscribe(params => {
      this.id = params.id
      this.reviewService.getOneReview(this.id).subscribe(review => {
        this.review = review
        this.author = this.author
      })
    })
  }
}