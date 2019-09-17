import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { baseUrl } from 'src/environments/base_url';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

constructor(private http: Http) { }
  private baseUrl = baseUrl.baseUrl;

  addBookmark(bookmark) {
    const json = JSON.stringify(bookmark);
    return this.http.post(this.baseUrl + '/bookmarks.json', json).toPromise();
  }

  getBookmarks() {
    return this.http.get(this.baseUrl + '/bookmarks.json')
      .toPromise().then(response => this.convert(response.json()));
  }

  removeBookmark(bookmark) {
    const json = JSON.stringify(bookmark);
    return this.http.delete(this.baseUrl + '/bookmarks/' + bookmark.id + '.json', json).toPromise();
  }

  private convert(convertResponse) {
    return Object.keys(convertResponse)
      .map(id => ({
        id: id,
        title: convertResponse[id].Title,
        url: convertResponse[id].Url
      }))
      .sort((a, b) => a.title.localeCompare(a.title));
  }
}
