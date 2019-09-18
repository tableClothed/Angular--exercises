import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-bookmark-edit',
  templateUrl: './bookmark-edit.component.html',
  styleUrls: ['./bookmark-edit.component.css']
})
export class BookmarkEditComponent {
  @Output() save = new EventEmitter();
  @Input() bookmark: any = {};

  constructor() { }

  onSave() {
    this.save.emit(this.bookmark);
  }

}
