import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResult } from 'src/app/Interfaces/ApiResult';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ShortLinkService {

  constructor(private httpClient: HttpClient) { }

  getShortLink(link: string): Observable<ApiResult> {

    return this.httpClient.get<ApiResult>(`${apiUrl}?url=${link}`);

  }

}
