import { useEffect, useState } from "react";
import { DocsThemeConfig, useTheme } from "nextra-theme-docs"; // Correct hook for Nextra

function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <span style={{ visibility: "hidden" }}>Loading...</span>;

  return (
    <img
      src={
        resolvedTheme === "dark" ? "/coding75darklogo.png" : "/coding75logo.png"
      }
      alt="Site Logo"
      style={{ width: "auto", height: "45px" }}
    />
  );
}

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
