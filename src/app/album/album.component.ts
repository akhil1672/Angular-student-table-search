import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../common/album.service';
import { Album } from './album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private albums: Album[]; 
  start:number;
  limit:number;

  constructor(private album:AlbumService) {
    this.start=0;
    this.limit=10;      
   }
  
  ngOnInit() {
    this.album.getAlbums(this.start,this.limit).subscribe((response:Album[])=>{
      this.albums=response;
      console.log(response)
    });
}
}
