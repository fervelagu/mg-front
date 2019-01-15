import { Injectable } from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  url = "http://localhost:3000/notes/"
  constructor(private http:Http) { }

  //get all notes
  getAllNotes(){
    return this.http.get(this.url).toPromise()
    .then((res: Response)=> res.json()).catch(e=>console.log(e))
  }

  //get notes by user
  getAllNotesByUser(user){
    return this.http.get(this.url + `${user}`).toPromise()
    .then((res: Response)=> res.json())
    .catch(e=>console.log(e))
  }

  //get one note
  getOneNote(id){
    return this.http.get(this.url + id).pipe(map((res: Response)=>res.json()))
  }

  //create one note
  createNote(obj){
    return this.http.post(this.url, obj, {withCredentials:true}).pipe(map((res: Response)=>res.json()))
  }
          
  //edit one note
  editOneNote(obj){
    return this.http.put(this.url + obj._id, obj, {withCredentials:true}).pipe(map((res: Response)=>res.json()))
  }

  //delete one note
  deleteNote(id){
    return this.http.delete(this.url + id, {withCredentials:true}).pipe(map((res: Response)=>res.json()))
  }    
}
