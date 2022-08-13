import { Component, OnInit } from '@angular/core';
import { post } from 'src/model/post';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  posts :post[] =[]  ;

  constructor() {
   }

  ngOnInit(): void {
this.posts = [{
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

  hidepost(post:post):void{

    console.log('hide post' + post.id)

    this.posts = this.posts.filter(p => p.id !== post.id )
  }

}
