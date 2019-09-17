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
    this.reload();
  }

  ngOnInit() {
  }

  save(bookmark) {
    this.bookService.addBookmark(bookmark).then(() => this.reload());
  }

  remove(bookmark) {
    this.bookService.removeBookmark(bookmark).then(() => this.reload());
  }

  private reload() {
    this.bookService.getBookmarks().then(bookmarks => this.bookmarks = bookmarks);
  }
}
