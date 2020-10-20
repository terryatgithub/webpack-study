const setMpa = () => {
  // @暗号 等价交换，炼金术不变的原则
  const entry = {};
  const htmlWebpackPlugins = [];

  // 生成entry 指定目录
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));

  entryFiles.map((item) => {
    const entryFile = item;
    const match = entryFile.match(/src\/(.*)\/index\.js$/);
    const pageName = match[1];
    entry[pageName] = entryFile;

    htmlWebpackPlugins.push(
      new htmlWebpackPlugins({7886
        template: path.join(__dirname, `./src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName, "detail"],
      })
    );
  });

  return {
    entry,
    htmlWebpackPlugins,
  };
};
