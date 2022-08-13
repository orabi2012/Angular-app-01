import { Component, OnInit } from '@angular/core';
import { post } from 'src/model/post';
import {PostsService} from '../../services/posts.service'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  posts :post[] =[]  ;

  constructor(private postsService: PostsService) {
   }

  ngOnInit(): void {
this.posts = this.postsService.postslist()
  }

  hidepost(post:post):void{

    console.log('hide post' + post.id)

    this.posts = this.posts.filter(p => p.id !== post.id )
  }

}
