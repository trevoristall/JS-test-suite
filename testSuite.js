class Testr {
    constructor() {
        this.queue = [];
        this.paused = false;
        this.results;
    }

    test(name, fn) {
        this.queue.push(() => {
            this.results = document.getElementById('results');
            this.results = assert(true, name)
                .appendChild(
                    document.createElement('ul')
                );
                fn();
        });
        this.runTest();
    };
    pause() {
        this.paused = true;
    };
    resume() {
        this.paused = false;
        setTimeout(runTest, 1);
    };
    runTest() {
        if (!this.paused && this.queue.length) {
            this.queue.shift()();
            if (!this.paused) {
                this.resume();
            }
        }
    }

    assert(value, desc) {
        const li = document.createElement('li');
        li.classname = value ? 'pass' : 'fail';
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = 'fail';
        }
        return li;
    };
}

    window.onload = () => {
        test('Async Test #1', () => {
            pause();
            setTimeout(() => {
                assert(true, 'First test completed');
                resume();
            }, 1000);
        });
        test('Async Test #2', () => {
            pause();
            setTimeout(() => {
                assert(true, 'Second test completed');
                resume();
            }, 1000);
        });
    };
