export interface Person {
    avatar: string;
    name: string;
    lastName: string;
    tags: string[];
    description: string;
    promoted?:boolean;
}


export type TitleState = 'active' | 'disabled' | 'regular';

export interface PersonTitle extends Person {
    state: TitleState;
}