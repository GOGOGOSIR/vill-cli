import Vue, { VueConstructor, ComponentOptions, VNode } from 'vue';
import { camelize } from '../format/string';

export interface VillComponentOptions extends ComponentOptions<Vue> {
  install?: (Vue: VueConstructor) => void;
}

export function createComponent (name: string) {
  return function (compObj: VillComponentOptions): () => VNode {
    name = camelize(`-${name}`);
    compObj.name = name;
    compObj.install = (vue: VueConstructor) => {
      vue.component(name as string, compObj);
    };

    return compObj as () => VNode;
  };
}
