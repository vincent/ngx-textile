import { NgxTextilePipe } from './ngx-textile.pipe';

describe('NgxTextilePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new NgxTextilePipe();
  it('transforms plain text to HTML', () => {
    expect(pipe.transform('a _shorthand syntax_ used to generate valid HTML'))
      .toBe(`<p>a <em>shorthand syntax</em> used to generate valid <span class="caps">HTML</span></p>`);
  });
});