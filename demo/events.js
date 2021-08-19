const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('anything', data => {
console.log('ON: anything', data)
})
emitter.emit('anything', {a: 1})
emitter.emit('anything', {b: 2})

setTimeout(() => {
    emitter.emit('anything', {c: 3})
}, 500)

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb){
        console.log('[subscribe...]')
        this.on(eventName, cb)
    }
    dispatch(eventName, data) {
        console.log('[dispatching...]')
        this.emit(eventName, data)
    }
}
const dis = new Dispatcher()
const cb = data => {
    console.log('ON: a', data)
}
dis.subscribe('a', cb)
dis.dispatch('a', {a: 22})
