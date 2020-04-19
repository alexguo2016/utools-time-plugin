/**
 * 主要功能
 * 1. 输入框的事项, 回车进入 plan-list
 * 2. plan-list里面的事项, 点击即可快捷输入到代办
 * 3. 使用 localStorage
 */

 
var plan_input = find('.plan-input')

plan_input.addEventListener("keyup", (e) => {
    // log(e)
    // e.key == "Enter"
    if (e.key == "Enter") {
        var p = plan_input.value
        addPlan(p)
        __showPlanList()
    }
})

/**
 * 加入计划
 * 1. 读取 plan
 * 2. 新增 plan
 * 3. 写入 plan
 * @param {string} planStr 
 */
var addPlan = (planStr) => {
    var oriPlan = getStorage('localPlan') || []
    oriPlan.push(planStr)
    var str = JSON.stringify(oriPlan)
    setStorage('localPlan', str)
}

/**
 * 显示 plan 列表
 */
var __showPlanList = () => {
    var plan_list = find('.plan-list')
    var plans = getStorage('localPlan')
    var planHTML = getPlanHTML(plans)
    var html = `
    <div class="plan-title">
        what you want to do ?
        ${planHTML}
    </div>
    `
    plan_list.innerHTML = html
}

/**
 * 将 plan 数组转换成html
 * @param {array} plansArr 
 */
var getPlanHTML = (plansArr) => {
    var html = ''
    plansArr.forEach(e => {
        html += `<div class="plan-item">${e}</div>`
    })
    // log(html)
    return html
}

/**
 * 清除 plan
 */
var plan_clear = find('.plan-clear')
plan_clear.addEventListener('click', () => {
    setStorage('localPlan', '')
    __showPlanList()
})


var plan_list = find('.plan-list')
plan_list.addEventListener('click', e => {
    // log(e)
    var {className} = e.target
    if (className == 'plan-item') {
        var input = find('.title')
        input.value = e.target.innerHTML
    }
})