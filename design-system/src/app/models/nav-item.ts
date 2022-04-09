export interface NavItem {
    title: string;
    active?: boolean;
    icon?: string;
    url?: string;
    children?: NavItem[];
}

