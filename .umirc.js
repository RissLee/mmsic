// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'umi-dva',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
  publicPath: './',
};
