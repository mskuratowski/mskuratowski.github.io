import coreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...coreWebVitals,
  {
    // eslint-plugin-react's automatic version detection is not yet compatible
    // with ESLint 10 — pin the React version explicitly to skip it.
    settings: {
      react: { version: "19.2" },
    },
  },
  {
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
