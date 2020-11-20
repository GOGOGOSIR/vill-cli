import { createNamespace } from '@/utils';

const [createComponent] = createNamespace('button');
/**
 * button 组件
 */
export default createComponent({
  render: () => {
    return <div>button</div>
  }
})
