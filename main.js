var start = find('.start')
var end = find('.end')
var show = find('.time')

var countUp = 0
var globalClock = ""
var onGoing = false

start.addEventListener("click", () => {
    if (onGoing) {
        return
    } else {
        onGoing = true
        show.innerHTML = "WAITING"
        globalClock = setInterval(() => {
            countUp += 1
            show.innerHTML = msToTime(countUp)
        }, 1000)
    }
})

end.addEventListener("click", () => {
    if (!onGoing) {
        return
    } else {
        onGoing = false
        show.innerHTML = msToTime(countUp)
        countUp = 0
        setDones()
        clearInterval(globalClock)
        var __s = setTimeout(() => {
            __ShowDoneList()
            clearTimeout(__s)
        }, 200)
    }
})