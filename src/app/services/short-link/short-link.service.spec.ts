import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ShortLinkService } from './short-link.service';

import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";

import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

const linkMock = { ok: true, result: { original_link: "google.com", short_link: "shrtco.de" } };


describe('ShortLinkService', () => {
  let service: ShortLinkService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShortLinkService]
    });

    service = TestBed.get(ShortLinkService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(true).toBeTruthy();
  });

  test('should get shorted link', fakeAsync(() => {

    const apiUrl = environment.apiUrl;

    const spyGetShortedLink = jest.spyOn(service, 'getShortLink');

    service.getShortLink('google.com').pipe(take(1)).subscribe(link => {
      expect(link).toBe(linkMock)
    })

    const req = httpMock.expectOne(`${apiUrl}?url=google.com`);

    expect(req.request.method).toBe('GET')
    expect(spyGetShortedLink).toHaveBeenCalledTimes(1);

    req.flush(linkMock)

    tick()

  }))
});
