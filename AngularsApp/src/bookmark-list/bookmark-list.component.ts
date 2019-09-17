import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {
  @Input() bookmarks = [];
  @Output() remove = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onRemove(bookmark) {
    this.remove.emit(bookmark);
  }

}
