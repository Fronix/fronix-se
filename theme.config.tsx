import { NextraBlogTheme } from "nextra-theme-blog";
import WavingHand from "./components/WavingHand";

const config: NextraBlogTheme = {
  components: {
    h1: ({ children }) => <h1>{children}</h1>,
  },
  head: () => <WavingHand />,
  navs: [
    {
      url: "https://github.com/fronix",
      name: "GitHub",
    },
  ],
  darkMode: true,
  dateFormatter: (date) =>
    `Last updated at ${date.toLocaleDateString("sv-SE")}`,
  footer: (
    <small style={{ display: "block", marginTop: "8rem" }}>
      {new Date().getFullYear()} © Oscar Martin
      <style jsx>{`
        a {
          float: right;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
};

export default config;
