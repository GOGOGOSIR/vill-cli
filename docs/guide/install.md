### 安装
```js
npm install vill-ui --save
```

### 全局引入
```js
import Vue from 'vue'
import VillUi from 'vill-ui'
import 'vill-ui/lib/common/style/index.css'

Vue.use(VillUi)
```

### 按需引入

1. 先安装babel-plugin-component

```js
npm install babel-plugin-component --save-dev
```

2. 配置babel.config.js
```js
{
  "plugins": [
    [
      "component",
      {
        libraryName: "vill-ui",
        styleLibraryName: "common/style"
      }
    ]
  ]
}
```

3. 按需引入
```js
import Vue from 'vue'
import {
  ActionSheet,
  Button,
  Badge,
  Cell,
  Checkbox,
  CheckboxGroup,
  CascadePicker,
  Dialog,
  DropdownMenu,
  DropdownMenuItem,
  DatePicker,
  Empty,
  Icon,
  Input,
  ImagePreview,
  Picker,
  Loading,
  NavBar,
  Radio,
  RadioGroup,
  Scroll,
  Stepper,
  Swiper,
  SwiperItem,
  SelectBar,
  Switch,
  ScrollNavBar,
  Uploader,
  Tab,
  TabBar,
  Toast,
  Textarea
} from 'vill-ui'

Vue.use(ActionSheet)
Vue.use(Button)
Vue.use(Badge)
Vue.use(Cell)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(CascadePicker)
Vue.use(Dialog)
Vue.use(DropdownMenu)
Vue.use(DropdownMenuItem)
Vue.use(DatePicker)
Vue.use(Empty)
Vue.use(Icon)
Vue.use(Input)
Vue.use(ImagePreview)
Vue.use(Loading)
Vue.use(Picker)
Vue.use(NavBar)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Scroll)
Vue.use(SelectBar)
Vue.use(Stepper)
Vue.use(Swiper)
Vue.use(SwiperItem)
Vue.use(Switch)
Vue.use(ScrollNavBar)
Vue.use(Uploader)
Vue.use(TabBar)
Vue.use(Tab)
Vue.use(Toast)
Vue.use(Textarea)
```
### 配合 amfe-flexible 和 postcss-px2rem
- 安装
```js
npm i amfe-flexible --save
npm i postcss-px2rem --save-dev
```
- 引用 amfe-flexible
```js
// 在 main.js (入口文件)
import 'amfe-flexible'
```
- 配置 postcss-px2rem
```js
// 新建 postcss.config.js（与src同级）
module.exports = {
  plugins: {
    'postcss-px2rem': {
      remUnit: 37.5
    }
  }
}
```