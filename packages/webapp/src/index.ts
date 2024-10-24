import('./bootstrap');

window.load = () => {
    return import('@/ui/index');
}
