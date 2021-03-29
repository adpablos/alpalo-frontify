const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/alpalo-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "alpalo-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
