# Lit

- Version :- Lit2.0 (Released in Jan 2022)
- Backed By :- Google
- Used for :- Designing and Developing web components.
- Type :- MicroFramework.
- Capabilities :- Custom Elements, Scoped styles, Reactive properties, Declarative templates, TypeScript Support.

- Getting started :- https://lit.dev/playground/

```bash
npm install
npm start
```

# Samples :-

- Base Component :-

```js
import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
  render() {
    return html`<p>Hello</p>`;
  }
}
customElements.define("hello-world", SimpleGreeting);
```

```html
<hello-world></hello-world>
```

- Adding Styles:

```js
import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html`<p>Hello!</p>`;
  }
}
customElements.define("hello-world", SimpleGreeting);
```

```html
<hello-world></hello-world>
```

- Preps/Attributes :-

```js
import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "";
  }

  render() {
    return html`<p>Hello ${this.name}!</p>`;
  }
}
customElements.define("hello-world", SimpleGreeting);
```

```html
<hello-world name="John"></hello-world>
```

# Events handlers

```js
import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static get properties() {
    return {
      name: { type: String },
      data: {
        type: String,
        hasChanged: (value, oldValue) => {
          console.log("has changed", oldValue, value);
          return oldValue === value;
        },
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.name = "";
    this.data = "";
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  keyup(evt) {
    if (evt.target.value) {
      return false;
    }
    console.log(evt.target.value);
  }

  render() {
    return html`
      <p>Hello ${this.data}!</p>
      <input @keyup="${this.keyup}" type="text" .value="${this.data}" />
    `;
  }
}
customElements.define("hello-world", SimpleGreeting);
```

```html
<hello-world name="John"></hello-world>
```

# Event Propagation

```js
import { html, css, LitElement } from "lit";

function emitter(data) {
  console.log("Emitted", data.detail);
}

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static get properties() {
    return {
      name: { type: String },
      data: { type: String },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.name = "";
    this.data = "";
    this.emitter = emitter.bind(this);
    document.addEventListener("emit", this.emitter, { passive: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("emit", this.emitter);
  }

  clicked(evt) {
    if (!evt) {
      return false;
    }
    document.dispatchEvent(
      new CustomEvent("emit", { detail: { value: "Hello" } })
    );
  }

  render() {
    return html`
      <p>Hello ${this.data}!</p>
      <button @click="${this.clicked}">Click !!</button>
    `;
  }
}
customElements.define("hello-world", SimpleGreeting);
```

```html
<hello-world name="John"></hello-world>
```
