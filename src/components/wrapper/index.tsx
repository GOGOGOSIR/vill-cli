import { createNamespace } from '@/utils';

const [createComponent] = createNamespace('wrapper');


export default createComponent({
  render() {
    return this.$slots.default
  }
})