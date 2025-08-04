import { e as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CzBadtu_.mjs';
import 'kleur/colors';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Cgaof/Desktop/trae/\u5F00\u6E90\u5DE5\u5177\u90E8\u7F72/\u76D8\u641C/collections/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "C:/Users/Cgaof/Desktop/trae/\u5F00\u6E90\u5DE5\u5177\u90E8\u7F72/\u76D8\u641C/collections/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
