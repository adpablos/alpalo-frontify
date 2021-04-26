import Root from "./components"
import link from "@frontity/html2react/processors/link";
import resumeDataJSON from "./resumeData.json";

export default {
  name: "alpalo-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isUrlVisible: false,
      resumeData: resumeDataJSON
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      }
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
};
