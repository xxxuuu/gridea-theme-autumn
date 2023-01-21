const generateOverride = (params = {}) => {
  let result = ''

  // Banner高度 - bannerHeight
  if (params.bannerHeight && params.bannerHeight !== '430px') {
    result += `
      .header {
        height: ${params.bannerHeight};
      }
    `
  }

  // Banner背景色 - bannerBackgroundColor
  if (params.bannerBackgroundColor && params.bannerBackgroundColor !== '#7c8280') {
    result += `
      .header {
        background-color: ${params.bannerBackgroundColor};
      }
    `
  }

  // Banner背景图 - bannerBackgroundImg
  if (params.bannerBackgroundImg && params.bannerBackgroundImg !== 'https://source.unsplash.com/random') {
    result += `
      .header .banner {
        background-image: url(${params.bannerBackgroundImg});
      }
    `
  }

  // Footer背景图 - footerBackgroundImg
  if (params.footerBackgroundImg && params.footerBackgroundImg !== '/media/images/footer-bg.webp') {
    result += `
      .footer:before {
        background: url(${params.footerBackgroundImg}) no-repeat center;
      }
    `
  }

  // 菜单颜色 - menuColor
  if (params.menuColor && params.menuColor !== '#dee2e6') {
    result += `
      .sidebar .top-container .site-nav {
        color: ${params.menuColor};
      }
    `
  }

  // 封面图圆角 - featureBorderRadius
  if (params.featureBorderRadius && params.featureBorderRadius !== '3px') {
    result += `
      .post-item .right .feature-container {
        border-radius: ${params.featureBorderRadius};
      }
    `
  }

  // 内容区背景色 - contentBgColor
  if (params.contentBgColor && params.contentBgColor !== '#f8f9fa') {
    result += `
      body {
        background: ${params.contentBgColor};
      }
    `
  }

  if (params.customCss) {
    result += `
      ${params.customCss}
    `
  }


  console.log('result', result)

  return result
}

module.exports = generateOverride
