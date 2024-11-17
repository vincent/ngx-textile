import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { NgxTextileService } from '../../../ngx-textile/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  styles: `
    .container {
      display: flex;
      height: 4000px
    }

    .source {
      width: 45%;
    }

    .result {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      width: 45%;

      .rendered {
        height: 60%
      }
      .markup {
        height: 40%
      }
    }
  `,
  template: `
    <h1>Ngx-textile</h1>

    <div class="container">
      <textarea class="source" [innerHTML]="source()" (keyup)="source.set($any($event.target).value)"></textarea>
      <div class="result" [innerHTML]="rendered()"></div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  private textile = inject(NgxTextileService);
  private sanitizer = inject(DomSanitizer);
  source = signal('');
  rendered = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.textile.parse(this.source())));

  ngOnInit(): void {
    this.source.set(
`h1. Welcome to Textile Markup

This is a demonstration of *Textile* markup language. Textile is a _lightweight_ markup language that's easy to read and write.


h2. Code Blocks

bc. npm i ngx-textile



h2. Text Formatting

You can make text *bold*, _italic_, or __underlined__. You can also use -strikethrough- and +inserted+ text.



h2. Lists

h3. Unordered List

* Item 1
* Item 2
** Subitem 2.1
** Subitem 2.2
* Item 3





h3. Ordered List

# First item
# Second item
## Subitem 2.1
## Subitem 2.2
# Third item




h2. Links and Images

"Visit Textile's website":https://textile-lang.com

!{height: 200px; border:1px solid #333; padding:5px;}https://cataas.com/cat(A cat)!







h2. Tables

|_. Header 1 |_. Header 2 |_. Header 3 |
| Cell 1.1 | Cell 1.2 | Cell 1.3 |
| Cell 2.1 | Cell 2.2 | Cell 2.3 |




h2. Blockquotes

bq. This is a blockquote. You can use it to highlight important text or to attribute quotes to their sources.





h2. Footnotes

This is some text with a footnote[1].

fn1. This is the footnote text.



h2. Definition Lists

- Term 1 := Definition 1
- Term 2 := Definition 2
- Term 3 := Definition 3





h2. Abbreviations

ABC(Always Be Coding)



h2. Horizontal Rule

---

p<. Left aligned paragraph.

p>. Right aligned paragraph.

p=. Centered paragraph.

p<>. This is a very long, almost never ending, sentence with the sole purpose to demonstrate how a justified paragraph would look like if the sentence wraps around several lines. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`);
  }
}
