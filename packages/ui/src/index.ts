import { random } from '@/utils/index';
import { ref } from 'vue';

const r = ref(5);

export function button() {
    console.log('button', random(24))
    console.log('button', r)
    return 'btn';
}
