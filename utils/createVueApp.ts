import { createApp } from 'vue';
import type { Component } from 'vue'

type MyVueApp = {
    containerTagName?: string,
    vueComponent: Component,
}
export function createVueApp(
    { containerTagName = 'div', vueComponent }: MyVueApp
): [HTMLElement, ReturnType<typeof createApp>] {
    const container = document.createElement(containerTagName);
    const vueApp = createApp(vueComponent);
    vueApp.mount(container);
    return [container, vueApp];
}
