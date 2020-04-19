var test = find('.already-done')

test.addEventListener('click', () => {
    clearDones()
    __ShowDoneList()
})


var del = find('.clear')

del.addEventListener('click', () => {
    clearDones()
    __ShowDoneList()
})

var listAlreadyDone = find('.done-list')
listAlreadyDone.addEventListener('click', e => {
    const {label} = e.target.dataset
    if (label) {
        log('get', label)
        delItem(label)
        __ShowDoneList()
    }
})


var show = () => {
    __ShowDoneList()
    __showPlanList()
}

show()