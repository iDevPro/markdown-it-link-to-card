import type { UrlMetadata, CardDomRenderOptions } from "./types";
interface CardResponse {
    url: string;
    data: UrlMetadata;
    options: Omit<CardDomRenderOptions, "href">;
    dom: string;
}
export declare function generateCard(url: string, options: Omit<CardDomRenderOptions, "href">): Promise<CardResponse>;
export {};
