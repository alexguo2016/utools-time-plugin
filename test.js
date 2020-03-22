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


var show = () => {
    __ShowDoneList()
}

show()