import { random } from '@/utils/index';
import { ref } from 'vue';

const r = ref(5);

console.log('ui entry', random(24))

export { button } from './components/Button';
