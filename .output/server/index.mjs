globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"465-Xt8yLpsaj69/HTZVx8vHPO16DMU"',
    "mtime": "2026-06-21T06:49:16.094Z",
    "size": 1125,
    "path": "../public/sitemap.xml"
  },
  "/llms.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"30c-tlFxKjnwstIZOrJqWRvvFRJKCDY"',
    "mtime": "2026-06-21T06:49:16.094Z",
    "size": 780,
    "path": "../public/llms.txt"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"3db7-swKTjDH9Fa0aeZB5q8FLy2ptoUU"',
    "mtime": "2026-06-21T06:49:16.094Z",
    "size": 15799,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"56-I0WB+ojunkhO67G/JnMkx2MJw5o"',
    "mtime": "2026-06-21T06:49:16.094Z",
    "size": 86,
    "path": "../public/robots.txt"
  },
  "/assets/activity-R7W6CXFW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f6-FMRFnqaNIPj/mRGxwZB2nUKBhv0"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 246,
    "path": "../public/assets/activity-R7W6CXFW.js"
  },
  "/assets/arrow-right-Bu7LbzbG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1-QfTduiq+Uz/bCdImTbC+wlRCmO4"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 177,
    "path": "../public/assets/arrow-right-Bu7LbzbG.js"
  },
  "/assets/case-studies.index-BbwgP8Xz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"de0-wOABPzWKUqZsYnvkjcx/uAwV0Zk"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 3552,
    "path": "../public/assets/case-studies.index-BbwgP8Xz.js"
  },
  "/assets/arrow-left-6wvmZv6x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1-WZBqEkxSe1dKKm2WvrCZoGH1ZWc"',
    "mtime": "2026-06-21T07:33:49.801Z",
    "size": 177,
    "path": "../public/assets/arrow-left-6wvmZv6x.js"
  },
  "/assets/case-studies._slug-Doxkt4H3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"222-2DdyXuKcRVOJKmXLyyyquH/GfZM"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 546,
    "path": "../public/assets/case-studies._slug-Doxkt4H3.js"
  },
  "/assets/book-appointment-CPGAlKaZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fdc1-A9+oMryYJNKfmlQ1koiSuVl/hyI"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 64961,
    "path": "../public/assets/book-appointment-CPGAlKaZ.js"
  },
  "/assets/case-studies._slug-teL11sbn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1cb-RgSYapfwsAFby5h8sMkeY1kmRUc"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 459,
    "path": "../public/assets/case-studies._slug-teL11sbn.js"
  },
  "/assets/case-studies._slug-tOXIJ1_4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"24b6-6iYECI0HQn9MPW43hsA/XngIsQU"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 9398,
    "path": "../public/assets/case-studies._slug-tOXIJ1_4.js"
  },
  "/assets/circle-check-KQdJSglI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18a-tDjRMxyzWK9xSkQ3Qa50AEBz1oA"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 394,
    "path": "../public/assets/circle-check-KQdJSglI.js"
  },
  "/assets/phone-e92MRuyD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2c6-LM8Y+xUpQ4okBKkKOtVACyjDol0"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 710,
    "path": "../public/assets/phone-e92MRuyD.js"
  },
  "/assets/createLucideIcon-ChmCG5tB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b2-JOz1BjHb67aULUNJYL2YaoZFr8g"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 1202,
    "path": "../public/assets/createLucideIcon-ChmCG5tB.js"
  },
  "/assets/dr-suranjana-hero-ihTcQCvq.jpg": {
    "type": "image/jpeg",
    "etag": '"5d421-myDdtK1joo4tn81mbdOmDiocLYY"',
    "mtime": "2026-06-21T07:33:49.798Z",
    "size": 381985,
    "path": "../public/assets/dr-suranjana-hero-ihTcQCvq.jpg"
  },
  "/assets/index-BXxbWhFq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3ba8-q30yIugq2JNeCDS6LHHRPgzLgWw"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 15272,
    "path": "../public/assets/index-BXxbWhFq.js"
  },
  "/assets/index-DaW3GxVZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"582f7-XQKKIbAEBWmbVhJZUeABsSQOY0o"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 361207,
    "path": "../public/assets/index-DaW3GxVZ.js"
  },
  "/assets/schwannoma-1-clinical-BCarsgbw.jpg": {
    "type": "image/jpeg",
    "etag": '"b2bb-wanz1H3LsSvLygI31s0QLK7vf70"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 45755,
    "path": "../public/assets/schwannoma-1-clinical-BCarsgbw.jpg"
  },
  "/assets/schwannoma-2-mri-BySlGZrq.jpg": {
    "type": "image/jpeg",
    "etag": '"182e1-I17mCJPR8prfybzp40A4r+9NE2E"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 99041,
    "path": "../public/assets/schwannoma-2-mri-BySlGZrq.jpg"
  },
  "/assets/schwannoma-4-specimen-C_rB6bdJ.jpg": {
    "type": "image/jpeg",
    "etag": '"1369e-6TspuugYXbt0kH4MBr/AJdz8XuQ"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 79518,
    "path": "../public/assets/schwannoma-4-specimen-C_rB6bdJ.jpg"
  },
  "/assets/schwannoma-3-intraop-DvpBwOy4.jpg": {
    "type": "image/jpeg",
    "etag": '"1c227-9L9xvax0XlkrkL4MyQH1FLMMqOk"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 115239,
    "path": "../public/assets/schwannoma-3-intraop-DvpBwOy4.jpg"
  },
  "/assets/stethoscope-DqX-doPS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"162-EuG/gzwlHOBOf+PdV9hYGmTjWAE"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 354,
    "path": "../public/assets/stethoscope-DqX-doPS.js"
  },
  "/assets/schwannoma-5-surgical-bed-CWd5_btE.jpg": {
    "type": "image/jpeg",
    "etag": '"20413-In1fv0+eWpRO0S/tNwdUBFlxgOg"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 132115,
    "path": "../public/assets/schwannoma-5-surgical-bed-CWd5_btE.jpg"
  },
  "/assets/styles-BZsSbsxX.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"14df1-e0s773ameOm52aCbw9fpRB4XBno"',
    "mtime": "2026-06-21T07:33:49.800Z",
    "size": 85489,
    "path": "../public/assets/styles-BZsSbsxX.css"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _5EHtZi = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_BZ2MyH = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_BZ2MyH };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_5EHtZi)
].filter(Boolean);
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    middleware.push(...h3App["~middleware"]);
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
