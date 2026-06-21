import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const SplitErrorComponent = ({
  error,
  reset
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", style: {
    color: "var(--navy)"
  }, children: "Something went wrong" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: error.message }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "text-primary", children: "Try again" })
] });
export {
  SplitErrorComponent as errorComponent
};
