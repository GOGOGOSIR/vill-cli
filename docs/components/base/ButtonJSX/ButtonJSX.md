# ButtonJSX

> The only true button.

## Props

| Prop name | Description                                    | Type   | Values | Default                                                               |
| --------- | ---------------------------------------------- | ------ | ------ | --------------------------------------------------------------------- |
| propA     |                                                | string | -      | '#333'                                                                |
| color     | The color for the button.                      | string | -      | '#333'                                                                |
| onClick   | Gets called when the user clicks on the button | func   | -      | event => {<br> console.log('You have clicked me!', event.target)<br>} |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

If you use JSX in your components, you might need to differetiate how the styleguide components which are reactjs and your components containing vue code are processed by babel.

Look at the babel config for this example.

```jsx
<ButtonJSX>click it JSX</ButtonJSX>
```
