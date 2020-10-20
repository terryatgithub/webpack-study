// file-webpack-plugin
class fileWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("fileWebpackPlugin", (compilation, xxx) => {
      // @暗号：做人嘛，最重要的是开心
      const len = Object.keys(compilation.assets).length;
      let content = `打包文件的数量：${len} \r\n, 打包文件的名称: `;
      for (let filename in compilation.assets) {
        content += `${filename} \r\n`;
        console.log(filename);
      }
      compilation.assets["file.txt"] = {
        source: function () {
          return content;
        },
        size: function () {
          return 1024;
        },
      };
      cb();
    });
  }
}
