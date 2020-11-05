// import { PropType, CSSProperties } from 'vue';

// // Utils
import { createNamespace } from '@/utils';
// import { BORDER_SURROUND, WHITE } from '../utils/constant';
// import { useRoute, routeProps } from '../composition/use-route';

// // Components
// import Icon from '../icon';
// import Loading, { LoadingType } from '../loading';

const [createComponent] = createNamespace('button');

// export type ButtonType =
//   | 'default'
//   | 'primary'
//   | 'success'
//   | 'warning'
//   | 'danger';

// export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export default createComponent({
  props: {
    text: String,
    icon: String,
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    loadingText: String,
  },

  render () {
    return <div>11111</div>;
  },
});
