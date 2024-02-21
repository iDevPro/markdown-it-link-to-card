import type { Size } from "../types";
export declare function styleNames(size: Size): {
    a: string;
    container: string;
    img: string;
    texts: string;
    title: string;
    description: string;
} | {
    a: string;
    container: string;
    img: string;
    texts: string;
    title: string;
    description: string;
};
export declare const classNames: (prefix?: string) => {
    container: string;
    img: string;
    texts: string;
    title: string;
    description: string;
};
