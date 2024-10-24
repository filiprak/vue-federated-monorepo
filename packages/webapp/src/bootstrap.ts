import { ref } from 'vue';
import { random } from '@/utils/index';
import { button } from '@/ui/components/Button';
// import { button as b2 } from '@/ui/index';
// import { remote } from 'xyz/index';
// import * as f from '__federation__';

const r = ref(7);

console.log('webapp entry', random());
console.log('webapp entry', button());
console.log('webapp entry', r);
// console.log('webapp entry', remote());

// window.f = f;
