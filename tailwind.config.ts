import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#090b10", panel: "#11151e", electric: "#4285ff" }, boxShadow: { glow: "0 12px 50px rgba(44,104,255,.18)" } } }, plugins: [] } satisfies Config;
