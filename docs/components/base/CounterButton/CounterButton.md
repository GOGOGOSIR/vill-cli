# CounterButton

> Button that counts how many times it was pressed and exposes a `@public` method to reset itself.

## Methods

### set

> Sets the counter to a particular value.

#### Params

| Param name | Type   | Description               |
| ---------- | ------ | ------------------------- |
| newValue   | Number | New value for the counter |

#### Return

| Type   | Description |
| ------ | ----------- |
| string | Test        |

## Events

| Event name | Type   | Description           |
| ---------- | ------ | --------------------- |
| after      | number | After increment event |

---

```jsx
<div>
  <CounterButton ref="count"/>
  <Button size="small" :onClick="() => {this.$refs.count.set(0)}">
    Reset
  </Button>
</div>
```
