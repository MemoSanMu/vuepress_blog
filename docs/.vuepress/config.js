module.exports = {
  title: 'Sunflower',
  description: '偶尔更新doc',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/img/sunshine.jpeg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: '首页', link: '/' },
      { text: 'sunshine', link: '/sunshine/' },
      { text: '插件', link: '/plugin/' },
      { text: 'React', link: '/react/' },
      {
        text: '面试',
        ariLabel: 'interView',
        items: [
          //多级导航栏
          { text: '58', link: '/interView/58/' },
          { text: 'other', link: '/interView/other/' },
          { text: 'view', link: '/interView/view/' },
        ],
      },
      {
        text: '学习',
        ariLabel: 'learn',
        items: [
          //多级导航栏
          { text: 'Js方法/思路', link: '/learn/index/' },
          { text: 'TS-骚操作写法', link: '/learn/ts/' },
          { text: 'TS-使用用例', link: '/learn/ts_demo/' },
          {
            text: '开发中产品的各版本定义(beta,alpha,rc,release)',
            link: '/learn/version/',
          },
          {
            text: 'git 删除历史 commit',
            link: '/learn/remove_commit/',
          },
          {
            text: 'rollup&js/ts sdk',
            link: '/learn/rollup/',
          },
          {
            text: '在 README.md 中生成项目目录结构',
            link: '/learn/tree/',
          },
          {
            text: 'Git commit message 规范',
            link: '/learn/git/',
          },
        ],
      },
      {
        text: 'es6(ryf)',
        ariLabel: 'es6',
        items: [
          //多级导航栏
          { text: 'array', link: '/es6/array/' },
          { text: 'let_const', link: '/es6/let_const/' },
          { text: 'class', link: '/es6/class/' },
          { text: 'class_extends', link: '/es6/class_extends/' },
          { text: 'function', link: '/es6/function/' },
          { text: 'module', link: '/es6/module/' },
          { text: 'number', link: '/es6/number/' },
          { text: 'object', link: '/es6/object/' },
          { text: 'object_methonds', link: '/es6/object_methonds/' },
          { text: 'set_map', link: '/es6/set_map/' },
          { text: 'async', link: '/es6/async/' },
          { text: 'string', link: '/es6/string/' },
          { text: 'string_methonds', link: '/es6/string_methonds/' },
          { text: 'symbol', link: '/es6/symbol/' },
          { text: '遍历器', link: '/es6/iterator/' },
          { text: 'proxy', link: '/es6/proxy/' },
          { text: 'promise', link: '/es6/promise/' },
          { text: 'generator', link: '/es6/generator/' },
          { text: '编程风格', link: '/es6/style/' },
        ],
      },
      { text: 'github', link: 'https://github.com/MemoSanMu' },
    ],
    serviceWorker: true,
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
