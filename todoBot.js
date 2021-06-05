var rand = new function() {

    function getRandomInt(x) {
        return Math.floor(Math.random() * x)
    }

    function getRandomItemIndex() {
        max = document.querySelectorAll("ul.todo-list li").length;
        if (max === 0) {
            console.log("no items to choose from");
            return 0;
        }
        x = getRandomInt(max) + 1;
        return x;
    }

    this.selectRandomItem = function() {
        x = getRandomItemIndex();
        if (x > 0) {
            console.log("select item " + x);
            document.querySelector("ul > li:nth-child(" + x + ") > div > input.toggle").click();
        }
    }

    this.toggleAll = function() {
        document.querySelector('#toggle-all').click();
    }

    this.createRandomTodo = function() {
        console.log("random todo " + Date.now());
        document.querySelector('input.new-todo').value = "random todo " + Date.now();
        document.querySelector('input.new-todo').dispatchEvent(new Event('change',{
            'bubble': true
        }));
    }
}
