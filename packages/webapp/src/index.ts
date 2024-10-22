(async () => {
    const { random } = (await import('@/utils/index'));

    console.log('webapp entry', random());
})();
