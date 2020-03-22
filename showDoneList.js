// var dones = [
//     {
//         title: '1',
//         time: 233
//     },
//     {
//         title: '2',
//         time: 233
//     },
//     {
//         title: '3',
//         time: 233
//     },
// ]

var insterDone = (outerDom, listDom) => {
    outerDom.innerHTML = listDom
}

var createListDom = (doneList) => {
    var dl = doneList
    // log('dl', dl)
    var list = ''
    dl.forEach(e => {
        var template = `
            <li class="item-line">
                <div class="outer-box">
                    <div class="item-label">
                        ${e.title}
                    </div>
                    <div class="item-time">
                        ${e.time}
                    </div>
                </div>
            </li>
        `
        list += template
    })
    var res = "<ol class='item-list'>" + list + "</ol>"
    return res
}

var setDones = () => {
    var title = find('.title').value
    var time = find('.time').innerHTML
    // var clock = countUp // 这个做法是不对的, 还是直接转换过来把..
    log('time-->', time)
    var clock = timeToMs(time)
    var item = {
        title,
        time,
        clock,
    }
    var dones = localStorage.getItem('dones')
    var donesArr = JSON.parse(dones) || []
    donesArr.push(item)
    var donesStr = JSON.stringify(donesArr)
    localStorage.setItem('dones', donesStr)
}


var getDones = () => {
    var dones = localStorage.getItem('dones') || []
    var str = JSON.stringify(dones)
    return str
}

var __ShowDoneList = () => {
    var dones = getDones()
    // log('dones-->', dones)
    var donesArr = JSON.parse(JSON.parse(dones))
    donesArr = combineSame(donesArr)
    // log('dones-->', dones, donesArr)
    var outerDom = find(".done-list")
    var listDom = createListDom(donesArr)
    insterDone(outerDom, listDom)
}

var clearDones = () => {
    var empty = []
    var str = JSON.stringify(empty)
    localStorage.setItem('dones', str)
}

// var testArr = [
//     {
//         title: 'a', time: '', clock: 111,
//     },
//     {
//         title: 'a', time: '', clock: 222,
//     },
//     {
//         title: 'b', time: '', clock: 444,
//     },
//     {
//         title: 'b', time: '', clock: 666,
//     },
//     // {
//     //     title: 'a', time: '', clock: 333,
//     // },
// ]

var combineSame = (donesArr) => {
    var arr = donesArr
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i]
        var {title, clock} = item
        if (obj[title]) {
            obj[title] = Number(clock) + Number(obj[title])
        } else {
            obj[title] = Number(clock)
        }
    }
    // log('res', obj)
    var  resArr = []
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const clock = obj[key]
            const title = key
            const time = msToTime(clock)
            const ele = {title, time, clock,}
            resArr.push(ele)
        }
    }
    // log('resArr', resArr)
    return resArr
}

// combineSame(testArr)