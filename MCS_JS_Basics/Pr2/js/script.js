totalCash = Number(prompt('сколько у нас кэша?'))
watchesCount = Number(prompt('сколько часов берем?'))
earringsCount = Number(prompt('сколько сережек берем?'))
watchesSum = watchesCount*prompt('сколько стоят часы?')
earringsSum = earringsCount*prompt('сколько стоят сережки?')
window.alert(totalCash>=(watchesSum+earringsSum))
