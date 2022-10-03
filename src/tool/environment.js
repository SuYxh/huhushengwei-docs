/**
 * @description: 
 * javascript判断浏览器当前运行环境
 * https://blog.csdn.net/l2345432l/article/details/109735338
 * @return {*}
 */

const ua = navigator.userAgent.toLowerCase()

// 获取UserAgent是否包含字段：判断是否包含系统、平台、内核、载体、外壳的特有字段
const testUa = (regexp) => regexp.test(ua)

// 获取UserAgent对应字段的版本
const testVs = (regexp) =>
  (ua.match(regexp) + '').replace(/[^0-9|_.]/gi, '').replace(/_/gi, '.')

//系统
let system = 'unknown'
if (testUa(/windows|win32|win64|wow32|wow64/gi)) {
  system = 'windows' //Windows系统
} else if (testUa(/macintosh|macintel/gi)) {
  system = 'macos' //Macos系统
} else if (testUa(/x11/gi)) {
  system = 'linux' //Linux系统
} else if (testUa(/android|adr/gi)) {
  system = 'andriod' //Android 系统
} else if (testUa(/ios|iphone|ipad|iwatch/gi)) {
  system = 'ios' // iOS系统
}
//系统版本
let systemVs = 'unknown'
if (system === 'windows') {
  //windos版本
  if (testUa(/windos nt 5.0|windows 2000/gi)) {
    systemVs = '2000'
  } else if (testUa(/windows nt 5.1|windows xp/gi)) {
    systemVs = 'xp'
  } else if (testUa(/windows nt 5.2|windows 2003/gi)) {
    systemVs = '2003'
  } else if (testUa(/windows nt 6.0|windows vista/gi)) {
    systemVs = 'vista'
  } else if (testUa(/windows nt 6.1|windows 7/gi)) {
    systemVs = '7'
  } else if (testUa(/windows nt 6.2|windows 8/gi)) {
    systemVs = '8'
  } else if (testUa(/windows nt 6.3|windows 8.1/gi)) {
    systemVs = '8.1'
  } else if (testUa(/windows nt 10.0|windows 10/gi)) {
    systemVs = '10'
  }
} else if (system === 'macos') {
  systemVs = testVs(/os x [\d._]+/gi)
} else if (system === 'andriod') {
  systemVs = testVs(/andriod [\d._]+/gi)
} else if (system === 'ios') {
  systemVs = testVs(/os [\d._]+/gi)
}

//平台
let platform = 'unknow'
if (system === 'windows' || system === 'macos' || system === 'linux') {
  platform = 'desktop' //桌面端
} else if (system === 'andriod' || system === 'ios' || testUa(/mobile/gi)) {
  platform = 'mobile' //移动端
}

//内核+载体
let engine = 'unknown'
let supporter = 'unknown'
if (testUa(/applewebkit/gi) && testUa(/safsri/gi)) {
  engine = 'webkit' //webkit内核
  if (testUa(/edge/gi)) {
    supporter = 'edge' //Edge浏览器
  } else if (testUa(/opr/gi)) {
    supporter = 'opr' //Opera浏览器
  } else if (testUa(/chrome/gi)) {
    supporter = 'chrome' //Chrome浏览器
  } else {
    supporter = 'safari' //Safari浏览器
  }
} else if (testUa(/gecko/gi) && testUa(/firefox/gi)) {
  engine = 'gecko' //gecko内核
  supporter = 'firefox' //Firefox浏览器
} else if (testUa(/presto/gi)) {
  engine = 'presto' //presto 内核
  supporter = 'opera' //Opera 浏览器
} else if (testUa(/trident|compatible|msie/gi)) {
  engine = 'trident' //trident 内核
  supporter = 'iexplore' //IE 浏览器
}

//内核版本
let engineVs = 'unknown'
if (engine === 'webkit') {
  engineVs = testVs(/applewebkit\/[\d.]+/gi)
} else if (engine === 'gecko') {
  engineVs = testVs(/gecko\/[\d.]+/gi)
} else if (engine === 'presto') {
  engineVs = testVs(/presto\/[\d.]+/gi)
} else if (engine === 'trident') {
  engineVs = testVs(/trident\/[\d.]+/gi)
}
//载体版本
let supporterVs = 'unknown'
if (supporter === 'chrome') {
  supporterVs = testVs(/chrome\/[\d.]+/gi)
} else if (supporter === 'safari') {
  supporterVs = testVs(/verison\/[\d.]+/gi)
} else if (supporter === 'firefox') {
  supporterVs = testVs(/firefox\/[\d.]+/gi)
} else if (supporter === 'opera') {
  supporterVs = testVs(/opr\/[\d.]+/gi)
} else if (supporter === 'iexploer') {
  supporterVs = testVs(/(msie\/[\d.]+)|(rv:[\d.]+)/gi)
} else if (supporter === 'edge') {
  supporterVs = testVs(/edge\/[\d.]+/gi)
}

//外壳+外壳版本
let shell = 'none' //外壳
let shellVs = 'unknown'
if (testUa(/micromessenger/gi)) {
  shell = 'wechat' //微信浏览器
  shellVs = testVs(/micromessenger\/[\d.]+/gi)
} else if (testUa(/qqbrowser/gi)) {
  shell = 'qq' //QQ浏览器
  shellVs = testVs(/qqbrowser\/[\d.]+/gi)
} else if (testUa(/ubrowser/gi)) {
  shell = 'uc' //UC浏览器
  shellVs = testVs(/ubrowser\/[\d.]+/gi)
} else if (testUa(/2345explorer/gi)) {
  shell = '2345' //2345浏览器
  shellVs = testVs(/2345explorer\/[\d.]+/gi)
} else if (testUa(/metasr/gi)) {
  shell = 'sougou' //搜狗浏览器
} else if (testUa(/lbbrowser/gi)) {
  shell = 'liebao' //猎豹浏览器
} else if (testUa(/maxthon/gi)) {
  shell = 'maxthon' //傲游浏览器
  shellVs = testVs(/maxthon\/[\d.]+/gi)
} else if (testUa(/bidubrowser/gi)) {
  shell = 'baidu'
  shellVs = testVs(/bidubrowser [\d.]+/gi)
}

function browserType() {
  const ua = navigator.userAgent.toLowerCase()
  const testUa = (regexp) => regexp.test(ua)
  const testVs = (regexp) =>
    (ua.match(regexp) + '').replace(/[^0-9|_.]/gi, '').replace(/_/gi, '.')
  // 接上以上if...else条件判断
  // ......
  // 获取到system、systemVs、platform、engine、engineVs、supporter、supporterVs、shell、shellVs
  return Object.assign(
    {
      engine, // webkit gecko presto trident
      engineVs,
      platform, // desktop mobile
      supporter, // chrome safari firefox opera iexplore edge
      supporterVs,
      system, // windows macos linux android ios
      systemVs,
    },
    shell === 'none'
      ? {}
      : {
          shell, // wechat qq uc 2345 sougou liebao maxthon baidu
          shellVs,
        }
  )
}

console.log(browserType())

