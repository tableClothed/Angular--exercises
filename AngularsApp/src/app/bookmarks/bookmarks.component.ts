import { Component, OnInit } from '@angular/core';
import { BookmarkService } from 'src/_services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks: any = [];
  editableBookmark: any = { };

  constructor(private bookService: BookmarkService) {
    this.reload();
  }

  ngOnInit() {
  }

  edit(bookmark) {
    this.editableBookmark = Object.assign({}, bookmark);
  }

  save(bookmark) {
    if (bookmark.id) {
      this.bookService.updateBookmark(bookmark).then(() => this.reload);
    } else {
      this.bookService.addBookmark(bookmark).then(() => this.reload());
    }
  }

  remove(bookmark) {
    this.bookService.removeBookmark(bookmark).then(() => this.reload());
  }

  private reload() {
    this.bookService.getBookmarks().then(bookmarks => {
      this.bookmarks = bookmarks;
      console.log(this.bookmarks);
    });
  }
}
