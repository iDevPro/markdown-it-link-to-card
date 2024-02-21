export default class LocalFileCache<V extends Record<string, any>> {
    constructor();
    private setFile;
    private readFile;
    has(url: string): boolean;
    get(url: string): V | undefined;
    set(url: string, data: V): void;
}
