import type MarkdownIt from "markdown-it";
export type LinkToCardPlugin = MarkdownIt.PluginWithOptions<LinkToCardPluginOptions>;
/**
 * @reference
 *   - https://daringfireball.net/projects/markdown/syntax#link
 *   - https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/title
 *   - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
 */
export interface LinkToCardPluginOptions {
    tag?: string;
    target?: ATarget;
    size?: Size;
    showTitle?: boolean;
    classPrefix?: string;
    render?: CardDomRender;
}
export interface UrlMetadata {
    title?: string;
    description?: string;
    logo?: string;
}
export type Size = "small" | "large";
export type ATarget = "_self" | "_blank" | "_top" | "_parent";
export interface CardDomRenderOptions {
    href: string;
    linkTitle: string;
    showTitle: boolean;
    target: ATarget;
    size: Size;
    classPrefix?: string;
}
export type CardDomRender = (data: UrlMetadata, options: CardDomRenderOptions) => string;
