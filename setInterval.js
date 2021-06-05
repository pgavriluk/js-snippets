var botCount = 0;

var botCreator = setInterval(function() {
    document.querySelector('input.new-todo').value = 'todo ' + botCount
    document.querySelector('input.new-todo').dispatchEvent(new Event('change',{
        'bubble': true
    }))

    botCount++

    if (botCount >= 100) {
        clearInterval(botCreator)
    }
}, 500)
