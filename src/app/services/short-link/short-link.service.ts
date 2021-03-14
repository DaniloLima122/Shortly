import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Link } from '../../Interfaces/Link';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ShortLinkService {

  constructor(private httpClient: HttpClient) { }

  getShortLink(link: string): Link {

    const shortedLinkData = this.httpClient.get<Link>(`${apiUrl}?url=${link}`).toPromise();

    let linkData: Link = {
      original_link: "",
      short_link: ""
    }

    shortedLinkData.then((linkReturn: Link) => {
      linkData.original_link = linkReturn.original_link;
      linkData.short_link = linkReturn.short_link;


    })
      .catch(error => { return error })

    return linkData;

  }

}
