import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bookmark-edit',
  templateUrl: './bookmark-edit.component.html',
  styleUrls: ['./bookmark-edit.component.css']
})
export class BookmarkEditComponent implements OnInit {
  @Output() save = new EventEmitter();
  bookmark = {};

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    this.save.emit(this.bookmark);
  }

}
