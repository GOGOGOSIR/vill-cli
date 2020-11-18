---
title: RandomButton
---

# ~~RandomButton~~

> **Deprecated** Use the [only true button component](#button) instead

> A button that requires json

## Props

| Prop name | Description              | Type  | Values | Default |
| --------- | ------------------------ | ----- | ------ | ------- |
| variants  | List of possible labels. | array | -      |         |

---

You can `require` external files in your examples:

    const names = require('./dog-names.json');
    <RandomButton :variants="names" />

Another example initializing Vue

    const names = require('./dog-names.json');

    new Vue({
      data(){
        return {
          list: names
        }
      },
      template: `
        <div>
          <RandomButton :variants="list" />
        </div>
      `
    })
