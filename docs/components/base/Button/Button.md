# Button

> The only true button.

## Props

| Prop name | Description                                      | Type   | Values | Default                                                               |
| --------- | ------------------------------------------------ | ------ | ------ | --------------------------------------------------------------------- |
| color     | The color for the button.                        | string | -      | '#333'                                                                |
| size      | The size of the button<br>`small, normal, large` | string | -      | 'normal'                                                              |
| onClick   | Gets called when the user clicks on the button   | func   | -      | event => {<br> console.log('You have clicked me!', event.target)<br>} |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

You can add a custom classes to an example wrapper (` ```js { "className": "checks" } `):

```js { "className": "checks" }
<Button>I’m transparent!</Button>
```

Or disable an editor by passing a `noeditor` modifier (` ```js noeditor `):

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier: (` ```js static `):

```js static
import Vue from "vue";
```

Fenced blocks with other languages are rendered as highlighted code:

```html
<h1>Hello world</h1>
```

---

Basic button:

```jsx
<Button>Push Me</Button>
```

Big pink button:

```jsx
<Button size="large" color="deeppink">
  Click Me
</Button>
```

And you _can_ **use** `any` [Markdown](http://daringfireball.net/projects/markdown/) here.

Fenced code blocks with `vue`, `js`, `jsx` or `javascript` languages are rendered as a interactive playgrounds:

```jsx
<Button>Push Me</Button>
```

You can also use the Single File Component Format

```vue
<template>
  <div>
    <Button @click.native="pushButton">Push Me</Button>
    <hr />
    <p>Next Dog Name: {{ dogName }}</p>
  </div>
</template>
<script>
// You can also use 'exports.default = {}' style module exports.
export default {
  name: "ButtonExample",
  data() {
    return { numClicks: 0, dogName: "json" };
  },
  methods: {
    pushButton() {
      this.numClicks += 1;
      this.dogName = "jj";
    }
  }
};
</script>
```
