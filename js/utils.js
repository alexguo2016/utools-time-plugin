var log = console.log.bind(console)

var find = str => {
    var e = document.querySelector(str)
    return e
}


/**
 * 将输入的数字转换成时间
 * x小时y分钟z秒
 * @param {number, string} time 
 */
var msToTime = (time) => {
    var t = Number(time)
    if (isNaN(t)) {
        log('时间格式不对, 应该是可以转换成数值的字符串或者数值', time, t)
        return
    }
    var h = Math.floor(t / 3600)
    var m = Math.floor((t - h * 3600) / 60)
    var s = t % 59
    return `${h}小时${m}分钟${s}秒`
}

var timeToMs = (timeStr) => {
    var str = timeStr
    var hIndex = str.indexOf('小时')
    var mIndex = str.indexOf('分钟')
    var sIndex = str.indexOf('秒')
    var h = str.substring(0, hIndex)
    var m = str.substring(hIndex+2, mIndex)
    var s = str.substring(mIndex+2, sIndex)
    // log('h', h, 'm', m, 's', s)
    var ms = parseInt(h * 3600 + m * 60 + s * 1)
    // log('ms-->', ms)
    return ms
}
/**
 * test
 */
var testFun = (input, assume) => {
    if (input == assume) {
        return true
    } else {
        log('input', input, 'assume', assume)
        return false
    }
}
// var test1 = '2小时7分钟26秒'
// var test2 = '2小时0分钟26秒'
// var test3 = '2小时7分钟0秒'
// var test4 = '0小时7分钟26秒'
// var test5 = '0小时0分钟26秒'
// var test6 = '0小时7分钟0秒'
// var test7 = '2小时7分钟0秒'
// testFun(timeToMs(test1), 2 * 3600 + 7 * 60 + 26)
// testFun(timeToMs(test2), 2 * 3600 + 26)
// testFun(timeToMs(test3), 2 * 3600 + 7 * 60)
// testFun(timeToMs(test4), 7 * 60 + 26)
// testFun(timeToMs(test5), 26)
// testFun(timeToMs(test6), 7 * 60)
// testFun(timeToMs(test7), 2 * 3600 + 7 * 60)

/**
 * 返回本地缓存数据
 * @param {string} key 
 */
var getStorage = (key) => {
    var item = localStorage.getItem(key)
    if (item) {
        return JSON.parse(item)
    } else {
        return []
    }
}

/**
 * 存到本地缓存
 * @param {string} key 
 * @param {string} item 
 */
var setStorage = (key, item) => {
    localStorage.setItem(key, item)
}