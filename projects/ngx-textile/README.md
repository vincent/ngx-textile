# NgxTextile

Use Textile markup language in your Angular project, using [textile-js](https://github.com/borgar/textile-js)

## Demo

[//vincent.github.io/ngx-textile](https://vincent.github.io/ngx-textile)

## Within a template

```typescript
import { Component } from '@angular/core';
import { NgxTextilePipe } from 'ngx-textile';

@Component({
  imports: [NgxTextilePipe],
  template: `
    <div [innerHTML]="text | textile"></div>
  `,
})
export class TestTextileComponent {
    text = 'a _shorthand syntax_ used to generate valid HTML'
}
```

## With the service

```typescript
import { Component, inject } from '@angular/core';
import { NgxTextileService } from 'ngx-textile';

@Component({
  template: `
    <div [innerHTML]="text"></div>
  `,
})
export class TestTextileComponent {
    #textile = inject(NgxTextileService)
    text = this.#textile.parse('a _shorthand syntax_ used to generate valid HTML')
}
```

## Install

`npm i ngx-textile`
