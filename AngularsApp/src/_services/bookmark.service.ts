import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { baseUrl } from 'src/environments/base_url';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

constructor(private http: Http) { }
  private baseUrl = baseUrl.baseUrl;
  errorHandler = error => console.error('BookmarkService error', error);

  addBookmark(bookmark) {
    const json = JSON.stringify(bookmark);
    return this.http.post(this.baseUrl + '/bookmarks.json', json).toPromise()
    .catch(this.errorHandler);
  }

  getBookmarks() {
    return this.http.get(this.baseUrl + '/bookmarks.json')
      .toPromise().then(response => this.convert(response.json()))
      .catch(this.errorHandler);

  }

  removeBookmark(bookmark) {
    const json = JSON.stringify(bookmark);
    return this.http.delete(this.baseUrl + '/bookmarks/' + bookmark.id + '.json', json).toPromise()
    .catch(this.errorHandler);
  }

  updateBookmark(bookmark) {
    const json = JSON.stringify({
      Title: bookmark.Title,
      Url: bookmark.Url
    });
    return this.http.patch(this.baseUrl + '/bookmarks/' + bookmark.id + '.json', json).toPromise()
    .catch(this.errorHandler);
  }

  private convert(convertResponse) {
    return Object.keys(convertResponse)
      .map(id => ({
        id: id,
        Title: convertResponse[id].Title,
        Url: convertResponse[id].Url
      }))
      .sort((a, b) => a.Title.localeCompare(b.Title));
  }
}
