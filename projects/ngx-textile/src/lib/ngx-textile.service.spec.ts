import { TestBed } from '@angular/core/testing';

import { NgxTextileService } from './ngx-textile.service';

describe('NgxTextileService', () => {
  let service: NgxTextileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTextileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('transforms plain text to HTML', () => {
    expect(service.parse('a _shorthand syntax_ used to generate valid HTML'))
      .toBe(`<p>a <em>shorthand syntax</em> used to generate valid <span class="caps">HTML</span></p>`);
  });
});
