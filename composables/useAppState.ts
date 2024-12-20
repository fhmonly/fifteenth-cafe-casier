export function useAppSidebarState(): { value: 'show' | 'hide' } {
    return useState('app-sidebar-state', () => 'show');
}
