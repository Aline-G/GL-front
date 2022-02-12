import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8080';

  constructor(private https: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<any>> {
    const data: FormData = new FormData();

    data.append('file', file);

    const newRequest = new HttpRequest('POST', '${this.baseUrl}/uploadFile', data, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.https.request(newRequest);
  }
}
