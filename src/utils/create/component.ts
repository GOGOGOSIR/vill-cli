import Vue, { VNode, VueConstructor, ComponentOptions } from 'vue';
// import { camelize } from '../format/string';

export interface VillComponentOptions extends ComponentOptions<Vue> {
  install?: (Vue: VueConstructor) => void;
}

export function createComponent (name: string) {
  return function (sfc: VillComponentOptions): VNode {
    sfc.name = name;
    sfc.install = (app: VueConstructor) => {
      app.component(name as string, sfc);
    };

    return sfc as VNode;
  };
}
