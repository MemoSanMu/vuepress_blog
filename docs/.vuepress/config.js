module.exports = {
    title: 'Sen blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {text: 'sunshine', link: '/algorithm/'},
        {text: '独家记忆', link: '//'},
        { text: 'JS', link: '/js_docs/' },
        { text: 'CSS', link: '/css_docs/' },
        { text: 'Vue', link: '/vue_docs/' },
        { text: 'React', link: '/react_docs/' },
        {
            text: '2020',
            ariLabel: '2020',
            items: [  //多级导航栏
                { text: 'May', link: '/2020/5/' },
                { text: 'June', link: '/2020/6/' }
            ]
        }
      ],
      serviceWorker: true,
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };