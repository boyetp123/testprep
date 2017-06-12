// logging function so we can avoid console.log and alert
function log(varargs) {
    var args = Array.prototype.slice.call(arguments, 0);
    var message = args.join(" ");
    if ( typeof document !== 'undefined' && document.getElementById('log-container')){
      var container = document.getElementById('log-container');
      var messageDiv = document.createElement('div');
      messageDiv.innerHTML = message;
      container.appendChild(messageDiv);
    } else {
      console.log(message)
    }
}

function MyPromise(fn) {
    var state = 'pending';
    var value;
    var deferred = null;

    function resolve(newValue) {
        if (newValue && typeof newValue.then === 'function') {
            newValue.then(resolve);
            return;
        }
        state = 'resolved';
        value = newValue;

        if (deferred) {
            handle(deferred);
        }
    }

    function handle(handler) {
        if (state === 'pending') {
            deferred = handler;
            return;
        }

        if (!handler.onResolved) {
            handler.resolve(value);
            return;
        }

        var ret = handler.onResolved(value);
        handler.resolve(ret);
    }

    this.then = function (onResolved) {
        return new MyPromise(function (resolve) {
            handle({
                onResolved: onResolved,
                resolve: resolve
            });
        });
    };

    fn(resolve);
}

function doSomething() {
    return new MyPromise(function (resolve) {
        var value = 42;
        resolve(value);
    });
}

function doSomethingElse(value) {
    return new MyPromise(function (resolve) {
        resolve("did something else with " + value);
    });
}

doSomething().then(function (firstResult) {
    log("first result:", firstResult);
    return doSomethingElse(firstResult);
}).then(function (secondResult) {
    log("second result:", secondResult);
});