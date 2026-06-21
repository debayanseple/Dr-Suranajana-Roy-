import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", style: {
    color: "var(--navy)"
  }, children: "Case study not found" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies", className: "text-primary inline-flex items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
    " Back to all cases"
  ] })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
