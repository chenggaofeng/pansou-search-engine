import 'kleur/colors';
import { q as decodeKey } from './chunks/astro/server_CzBadtu_.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D0HGhUK_.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Cgaof/Desktop/trae/%E5%BC%80%E6%BA%90%E5%B7%A5%E5%85%B7%E9%83%A8%E7%BD%B2/%E7%9B%98%E6%90%9C/collections/","cacheDir":"file:///C:/Users/Cgaof/Desktop/trae/%E5%BC%80%E6%BA%90%E5%B7%A5%E5%85%B7%E9%83%A8%E7%BD%B2/%E7%9B%98%E6%90%9C/collections/node_modules/.astro/","outDir":"file:///C:/Users/Cgaof/Desktop/trae/%E5%BC%80%E6%BA%90%E5%B7%A5%E5%85%B7%E9%83%A8%E7%BD%B2/%E7%9B%98%E6%90%9C/collections/dist/","srcDir":"file:///C:/Users/Cgaof/Desktop/trae/%E5%BC%80%E6%BA%90%E5%B7%A5%E5%85%B7%E9%83%A8%E7%BD%B2/%E7%9B%98%E6%90%9C/collections/src/","publicDir":"file:///C:/Users/Cgaof/Desktop/trae/%E5%BC%80%E6%BA%90%E5%B7%A5%E5%85%B7%E9%83%A8%E7%BD%B2/%E7%9B%98%E6%90%9C/collections/public/","buildClientDir":"file:///C:/Users/Cgaof/Desktop/trae/%E5%BC%80%E6%BA%90%E5%B7%A5%E5%85%B7%E9%83%A8%E7%BD%B2/%E7%9B%98%E6%90%9C/collections/dist/client/","buildServerDir":"file:///C:/Users/Cgaof/Desktop/trae/%E5%BC%80%E6%BA%90%E5%B7%A5%E5%85%B7%E9%83%A8%E7%BD%B2/%E7%9B%98%E6%90%9C/collections/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/collection.OPFPM_p7.css"},{"type":"inline","content":"@media (max-width: 767px){.mobile-scrollable-description[data-astro-cid-3kz4ziuf]{max-height:4.5rem;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#a0aec0 #f7fafc}.mobile-scrollable-description[data-astro-cid-3kz4ziuf]::-webkit-scrollbar{width:5px}.mobile-scrollable-description[data-astro-cid-3kz4ziuf]::-webkit-scrollbar-track{background:transparent}.mobile-scrollable-description[data-astro-cid-3kz4ziuf]::-webkit-scrollbar-thumb{background-color:#a0aec0;border-radius:10px}}\n"}],"routeData":{"route":"/collection","isIndex":false,"type":"page","pattern":"^\\/collection\\/?$","segments":[[{"content":"collection","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/collection.astro","pathname":"/collection","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{font-family:sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background-color:#f0f2f5;color:#333}.container[data-astro-cid-gxdxsaan]{text-align:center}.spinner[data-astro-cid-gxdxsaan]{border:4px solid rgba(0,0,0,.1);width:36px;height:36px;border-radius:50%;border-left-color:#09f;animation:spin 1s ease infinite;margin:0 auto 20px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"}],"routeData":{"route":"/go","isIndex":false,"type":"page","pattern":"^\\/go\\/?$","segments":[[{"content":"go","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/go.astro","pathname":"/go","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/collection.OPFPM_p7.css"},{"type":"inline","content":".ios-button[data-astro-cid-j7pv25f6]{background:#fff;border:1px solid #e5e7eb;color:#6b7280;transition:all .2s;cursor:pointer}.ios-button[data-astro-cid-j7pv25f6]:not(.opacity-50):hover{background:#3b82f6;color:#fff;border-color:#3b82f6}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/src/pages/go.astro",{"propagation":"none","containsHead":true}],["C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/src/pages/collection.astro",{"propagation":"none","containsHead":true}],["C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/collection@_@astro":"pages/collection.astro.mjs","\u0000@astro-page:src/pages/go@_@astro":"pages/go.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_OXg2fk7y.mjs","C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_iK4jkqH_.mjs","C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.TqjGIAgd.js","@astrojs/react/client.js":"_astro/client.DK-ogvXW.js","C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/src/pages/collection.astro?astro&type=script&index=0&lang.ts":"_astro/collection.astro_astro_type_script_index_0_lang.BJRan1Vc.js","C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.B2fS1tLB.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/src/pages/collection.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{fetch(\"/api/increment-views\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({collectionId:\"{collection.id}\"})}).then(e=>e.json()).then(e=>{if(e&&e.views!==void 0){const t=document.getElementById(\"view-count\");t&&(t.textContent=e.views)}else return fetch(\"/api/get-all-views\").then(t=>t.json()).then(t=>{const i=t[\"{collection.id}\"]||0,n=document.getElementById(\"view-count\");n&&(n.textContent=i)})}).catch(e=>console.error(\"Error incrementing/viewing view count:\",e))});document.querySelectorAll(\".copy-link-btn\").forEach(e=>{e.addEventListener(\"click\",()=>{navigator.clipboard.writeText(e.dataset.link),e.innerHTML='<i class=\"fas fa-check mr-1\"></i>已复制',setTimeout(()=>{e.innerHTML='<i class=\"fas fa-copy mr-1\"></i>复制链接'},2e3)})});document.querySelectorAll(\".copy-password-btn\").forEach(e=>{e.addEventListener(\"click\",()=>{navigator.clipboard.writeText(e.dataset.password),e.innerHTML='<i class=\"fas fa-check mr-1\"></i>已复制',setTimeout(()=>{e.innerHTML='<i class=\"fas fa-key mr-1\"></i>复制密码'},2e3)})});"],["C:/Users/Cgaof/Desktop/trae/开源工具部署/盘搜/collections/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"backToTopBtn\");window.onscroll=function(){document.body.scrollTop>200||document.documentElement.scrollTop>200?o.style.display=\"flex\":o.style.display=\"none\"};o.addEventListener(\"click\",()=>{window.scrollTo({top:0,behavior:\"smooth\"})});"]],"assets":["/_astro/collection.OPFPM_p7.css","/favicon.svg","/logo.png","/_astro/client.DK-ogvXW.js","/_astro/index.BfjclWtw.js","/_astro/keystatic-page.TqjGIAgd.js","/images/2025movie.png","/images/bc.png","/images/cartoon.png","/images/episodes.png","/images/game.png","/images/movie.png","/images/placeholder.txt","/images/wyy.jpg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"xQlgFQMie6IOHptELvWIVdKR0ylvvkqSiLUM9moYleo=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\Cgaof\\Desktop\\trae\\开源工具部署\\盘搜\\collections\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
