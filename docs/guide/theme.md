### 新建一个theme.scss文件
```js

$color-theme: skyblue;

$--font-path: '~vill-ui/src/common/style/iconfont';

@import "~vill-ui/src/common/style/index";
```

### 在main.js中引入
```js
import Vue from 'vue'
import VillUi from 'vill-ui;
import "./theme.scss";

Vue.use(VillUi)
```

### 其他可配置的组件样式变量
```js
$color-theme: rgb(19, 187, 134);

$overlay-bg-color: rgba(0,0,0,.6);
$preview-overlay-bg-color: rgba(0,0,0,0.9);

// button
$btn-bg-color: $color-theme;
$btn-text-color: #ffffff;
$btn-font-size: 16px;
$btn-inline-font-size: 12px;
$btn-disabled-bg-color: #cccccc;
$btn-border-color: $color-theme;
$btn-letter-spacing: 0px;
$btn-plain-color: $color-theme;

// navbar
$navbar-border-color: #cccccc;
$navbar-font-size: 16px;
$navbar-operate-color: #999999;
$navbar-title-color: #333333;

// select-bar
$sr-border-color: #cccccc;
$sr-title-font-size: 14px;
$sr-title-padding: 0 14px;
$sr-title-color: #333333;
$sr-btn-color: #ffffff;
$sr-btn-bg-color: $color-theme;
$sr-btn-font-size: 14px;


// loading
$loading-size: 24px;

// checkbox
$checkbox-padding: 10px 0;
$checkbox-font-size: 14px;
$checkbox-text-color: #666666;
$checkbox-border-color: #666666;
$checkbox-icon-bgc: transparent;
$checkbox-checked-icon-color: #ffffff;
$checkbox-checked-icon-bgc: $color-theme;
$checkbox-disabled-icon-bgc: #eeeeee;
$checkbox-disabled-icon-color: #fcfcfc;

// radio
$radio-font-size: 14px;
$radio-padding: 10px 0;
$radio-color: #666666;
$radio-bgc: #ffffff;
$radio-checked-bgc: $color-theme;
$radio-disabled-bgc: #eeeeee;

// switch
$switch-font-size: 14px;
$switch-bgc: #ffffff;
$switch-active-bgc: $color-theme;
$switch-width: 48px;
$switch-height: 26px;
$switch-off-border-color: #cccccc;

// input
$input-border-radius: 3px;
$input-focus-border-color: $color-theme;
$input-border-color: #cccccc;
$input-bgc: #ffffff;
$input-disabled-bgc: #fcfcfc;
$input-text-color: #333333;
$input-icon-color: #999999;
$input-font-size: 15px;
$input-placeholder-font-size: 15px;
$input-placeholder-text-color: #cccccc;

// textarea
$textarea-border-radius: 3px;
$textarea-focus-border-color: $color-theme;
$textarea-border-color: #cccccc;
$textarea-bgc: #ffffff;
$textarea-disabled-bgc: #fcfcfc;
$textarea-text-color: #333333;
$textarea-font-size: 14px;
$textarea-placeholder-font-size: 15px;
$textarea-placeholder-text-color: #cccccc;
$textarea-limit-text-color: #cccccc;
$textarea-limit-font-size: 12px;

// slider
$slider-counter-bgc: #ffffff;
$slider-counter-bgc-active: $color-theme;

// tabbar
$tabbar-bgc: #ffffff;
$tabbar-text-size: 12px;
$tabbar-top-border-color: #cccccc;

// badge
$badge-text-size: 12px;

// tab
$tab-text-size: 14px;
$tab-border-color: #ebedf0;

// cell
$cell-font-size: 16px;
$cell-left-text-color: #333333;
$cell-right-text-color: #999999;
$cell-border-color: #cccccc;

//moduleLoading
$module-loading-text-size: 14px;
$module-loading-text-color: #666666;

// scroll-nav-bar
$scroll-nav-bar-bgc: #ffffff;
$scroll-nav-bar-text-color: #333333;
$scroll-nav-bar-text-active-color: $color-theme;

// toast
$toast-color: #cccccc;
$toast-font-size: 14px;

// dialog
$dialog-border-color: #cccccc;
$dialog-mask-bgc: rgba(37, 38, 45, 0.8);
$dialog-bgc: #ffffff;
$dialog-font-size: 14px;
$dialog-color: #999999;
$dialog-title-color: #666666;

// actionSheet
$actionsheet-mask-bgc: rgba(37, 38, 45, 0.4);
$actionSheet-bgc: #ffffff;
$actionSheet-border-color: #cccccc;
$actionSheet-font-size: 16px;
$actionSheet-color:#666666;
$actionSheet-btn-bgc: #ffffff;

// scroll
$scroll-pullup-height: 50px;
$scroll-pullup-font-size: 14px;
$scroll-pullup-color: #cccccc;
$scroll-pulldown-font-size: 14px;
$scroll-pulldown-color: #999999;

// dropdownMenu
$dropdownMenu-title-size: 15px;
$dropdownMenu-title-color: #333333;
$dropdownMenu-title-icon-color: #dcdee0;
$dropdownMenu-title-disabled-color: #dcdee0;

// empty
$empty-wrapper-bg-color: #ffffff;
$empty-wrapper-padding: 32px;
$empty-img-size: 90px;
$empty-font-size: 14px;
$empty-color: #969799;

// stepper
$stepper-input-size: 28px;
$stepper-btn-size: 28px;
$stepper-btn-radius: 4px;
$stepper-btn-padding: 4px;
$stepper-color: #323233;
$stepper-disabled-color: #c8c9cc;
$stepper-bg-color: #f2f3f5;
$stepper-disabled-bg-color: #f7f8fa;
$stepper-font-size: 14px;

// uploader
$uploader-size: 80px;
$uploader-bg-color: #f7f8fa;
$uploader-border-radius: 6px;
$uploader-color: #969799;
$uploader-delete-color: #969799;
$uploader-disabled-bg-color: #f7f8fa;
$uploader-disabled-color: #dcdee0;

// picker
$picker-mask-bgc: rgba(37, 38, 45, 0.4);
$picker-choose-height: 50px;
$picker-bgc: #ffffff;
$picker-font-size: 16px;
$picker-title-font-size: 16px;
$picker-btn-font-size: 14px;
$picker-cancel-color: #999999;
$picker-confirm-color: $color-theme;
$picker-txt-color: #333333;
$picker-border-color: #e8e8e8;
$picker-lr-padding: 16px;
$picker-content-height: 172px;
$picker-border-height: 68px;
$picker-wheel-item-height: 36px;
```
