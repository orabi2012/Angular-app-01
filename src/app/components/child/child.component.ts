import { Component, OnInit, Input ,Output ,EventEmitter } from '@angular/core';
import { post } from 'src/model/post';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() post: post;
  @Output() hidePost :EventEmitter<post> = new EventEmitter;;

  constructor() {
    this.post = {id:0 ,title:"",body:"",votes:0}
  }

  ngOnInit(): void {
  }

  upvote(post:post):void{
    post.votes +=1

  }

  downvote(post:post):void{

    if(post.votes>0){
      post.votes -=1
    }



  }

  hide(post:post):void{

    this.hidePost.emit(post)

  }
}
