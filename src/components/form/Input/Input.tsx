import { createNamespace } from '@/utils';

const [createComponent] = createNamespace('input');
/**
 * input 组件
 */
export default createComponent({
  created () {
    console.log(123)
  },
  render: () => {
    return <div>input111</div>
  },
})
