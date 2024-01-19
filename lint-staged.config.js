export default {
	"./src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["pnpm lint", "pnpm prettier:write"],
	"./__tests__/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["pnpm lint", "pnpm prettier:write"],
};
