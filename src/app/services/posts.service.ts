import { Injectable } from '@angular/core';
import { post } from 'src/model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() {


  }

  postslist (){
    return [{
      id : 1,
      title : "post 1",
      body : "body 1",
      votes : 1
    },
    {
      id : 2,
      title : "post 2",
      body : "body 2",
      votes : 2
    },
    {
      id : 3,
      title : "post 3",
      body : "body 3",
      votes : 3
    },{
      id : 4,
      title : "post 4",
      body : "body 4",
      votes : 1
    },
    {
      id : 5,
      title : "post 5",
      body : "body 5",
      votes : 2
    },
    {
      id : 6,
      title : "post 6",
      body : "body 6",
      votes : 3
    }]
  }
}
