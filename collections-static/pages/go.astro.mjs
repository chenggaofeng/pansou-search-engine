import { e as createComponent, f as createAstro, r as renderTemplate, n as defineScriptVars, o as renderHead } from '../chunks/astro/server_CzBadtu_.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Go = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Go;
  const url = Astro2.url.searchParams.get("url");
  if (!url) {
    return new Response("URL not provided", { status: 400 });
  }
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return new Response("Invalid URL format", { status: 400 });
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-gxdxsaan> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>\u6B63\u5728\u8DF3\u8F6C...</title>', '</head> <body data-astro-cid-gxdxsaan> <div class="container" data-astro-cid-gxdxsaan> <div class="spinner" data-astro-cid-gxdxsaan></div> <p data-astro-cid-gxdxsaan>\u6B63\u5728\u5B89\u5168\u8DF3\u8F6C, \u8BF7\u7A0D\u5019...</p> </div> <script>(function(){', "\n        // Redirect using a meta tag for browsers with JS disabled\n        const meta = document.createElement('meta');\n        meta.httpEquiv = 'refresh';\n        meta.content = `0;url=${url}`;\n        document.head.appendChild(meta);\n\n        // Also attempt redirect with JS for faster performance\n        window.location.replace(url);\n    })();<\/script> </body> </html>"], ['<html lang="en" data-astro-cid-gxdxsaan> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>\u6B63\u5728\u8DF3\u8F6C...</title>', '</head> <body data-astro-cid-gxdxsaan> <div class="container" data-astro-cid-gxdxsaan> <div class="spinner" data-astro-cid-gxdxsaan></div> <p data-astro-cid-gxdxsaan>\u6B63\u5728\u5B89\u5168\u8DF3\u8F6C, \u8BF7\u7A0D\u5019...</p> </div> <script>(function(){', "\n        // Redirect using a meta tag for browsers with JS disabled\n        const meta = document.createElement('meta');\n        meta.httpEquiv = 'refresh';\n        meta.content = \\`0;url=\\${url}\\`;\n        document.head.appendChild(meta);\n\n        // Also attempt redirect with JS for faster performance\n        window.location.replace(url);\n    })();<\/script> </body> </html>"])), renderHead(), defineScriptVars({ url }));
}, "C:/Users/Cgaof/Desktop/trae/\u5F00\u6E90\u5DE5\u5177\u90E8\u7F72/\u76D8\u641C/collections/src/pages/go.astro", void 0);

const $$file = "C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/src/pages/go.astro";
const $$url = "/go";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Go,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
