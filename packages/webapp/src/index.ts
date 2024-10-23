import { random } from '@/utils/index';
import { button } from '@/ui/index';
import { ref } from 'vue';

import * as f from '__federation_fn_import';

const r = ref(7);

console.log('webapp entry', random());
console.log('webapp entry', button());
console.log('webapp entry', r);

window.importShared = f.importShared;
