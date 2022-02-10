const editor = new Editor({
    el: element,
    hideModeSwitch: true,
});

editor.addHook('change', () => {
    const content = editor.getMarkdown();
    // код который будет вызван при изменении содержимого редактора
});