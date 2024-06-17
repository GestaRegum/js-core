class EventEmitter {
  constructor() {
    this.events = {};
   }


  on(eventName, callback) {
    if (!this.events[eventName]) {
    this.events[eventName] = [];
  }                 
    this.events[eventName].push(callback);
    // Пишите код здесь
  }

  off(eventName, callback) {
 if (this.events[eventName]) {
    this.events[eventName] = this.events[eventName].filter(el => el !== callback)
 }
      
    // Пишите код здесь
  }

  once(eventName, callback) {

     const onceWrapper = (...args) => {
            callback(...args);

            this.off(eventName, onceWrapper);
        };
        this.on(eventName, onceWrapper);
    // Пишите код здесь
  }

  emit(eventName, ...args) {

    if(this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(...args));
    }
    // Пишите код здесь
  }

}
class BroadcastEventEmitter extends EventEmitter {
  constructor() {
    super();
  }

  emit(eventName, ...args) {

    if (eventName === "*") {
      Object.keys(this.events).forEach(event => {
        this.events[event].forEach(callback => {
          callback(...args);
        });
      });
    } else {
    
      super.emit(eventName, ...args);

}
  }
}
export { BroadcastEventEmitter, EventEmitter };
//     npm run test:current -- EventEmitter.test.js
