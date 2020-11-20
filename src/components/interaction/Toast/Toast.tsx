import { createNamespace } from '@/utils';

const [createComponent] = createNamespace('toast');

export default createComponent({
  render: () => {
    return <div>toast</div>
  }
})
