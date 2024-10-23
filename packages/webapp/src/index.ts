import { random } from '@/utils/index';
import { button } from '@/ui/components/Button';
import { button as b2 } from '@/ui/index';
import { ref } from 'vue';
// import * as f from '__federation__';

const r = ref(7);

console.log('webapp entry', random());
console.log('webapp entry', button(), b2());
console.log('webapp entry', r);

await import('xyz/index');

// window.f = f;
