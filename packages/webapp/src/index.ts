import { random } from '@/utils/index';
import { button } from '@/ui/index';
import { ref } from 'vue';

import { __federation_method_ensure } from '__federation__';

const importModule = async (path: string) => {
    return __federation_method_ensure('@/')
        .then((m: Record<string, Function>) => m.get(`./${path.slice(2)}`))
        .then((m: Function) => m());
};

const r = ref(7);

console.log('webapp entry', random());
console.log('webapp entry', button());
console.log('webapp entry', r);

window.importModule = importModule;
