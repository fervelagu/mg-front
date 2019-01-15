import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  url = "http://localhost:3000/reviews/"
  constructor(private http:Http) { }

  //get all reviews
  getAllReviews(){
    return this.http.get(this.url).toPromise()
    .then((res: Response)=> res.json()).catch(e=>console.log(e))
  }

  //get review by user author
  getAllReviewsByUser(id){
    return this.http.get(this.url + 'mine/'+ id).pipe(map((res: Response) => res.json()));
  }

  //get one review
  getOneReview(id){
    return this.http.get(this.url + id).pipe(map((res: Response)=>res.json()))
  }

  //create one review
  createReview(obj){
    return this.http.post(this.url, obj, {withCredentials:true})
      .pipe(map((res: Response)=>res.json()))
  }
          
  //edit one review
  editOneReview(obj){
    return this.http.put(this.url + obj._id, obj, {withCredentials:true}).pipe(map((res: Response)=>res.json()))
  }

  //delete one review
  deleteReview(id){
    return this.http.delete(this.url + id, {withCredentials:true}).pipe(map((res: Response)=>res.json()))
  }
}
