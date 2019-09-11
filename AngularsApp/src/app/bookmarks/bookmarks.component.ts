import { Component, OnInit } from '@angular/core';
import { BookmarkService } from 'src/_services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks = [];

  constructor(private bookService: BookmarkService) {
    bookService.getBookmarks().then(bookmarks => this.bookmarks = bookmarks);
  }

  ngOnInit() {
  }

}
