import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import LastUpdated from "./components/Lastupdated";

const config: DocsThemeConfig = {
  logo: <span>fronix.se</span>,
  docsRepositoryBase: "https://github.com/fronix/fronix-se",
  footer: {
    text: "fronix.se",
  },
  editLink: {
    text: "",
  },
  feedback: {
    content: undefined,
  },
  search: {
    component: undefined,
  },
  gitTimestamp: LastUpdated,
  useNextSeoProps() {
    return {
      title: "fronix - i do stuff",
      description: "i watch movies and do some coding",
      openGraph: {
        type: "website",
        locale: "sv_SE",
        url: "https://fronix.se",
        site_name: "fronix.se",
      },
    };
  },
};

export default config;
