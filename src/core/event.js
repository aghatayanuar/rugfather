const listeners = {};

export function on(event, callback) {

    if (!listeners[event]) {
        listeners[event] = [];
    }

    listeners[event].push(callback);

}

export function emit(event, payload) {

    if (!listeners[event]) {
        return;
    }

    listeners[event].forEach(callback => callback(payload));

}

export function off(event, callback) {

    if (!listeners[event]) {
        return;
    }

    listeners[event] = listeners[event].filter(
        item => item !== callback
    );

}