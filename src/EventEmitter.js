/*
	Event Emitter

	an event emitter is responsible for managing a set of listeners and publishing events to them when it is told such events happened
	used in async event driven architecture

	API:
		addListener
		removeListener
		removeAllListeners
		emit
		once
		listeners

	http://learnjswith.me/build-an-event-emitter-in-javascript/
*/

class Emitter {
	constructor () {
		this.events = {};
	}

	isValidEvent(eventName) {
		const events = this.events;
		return events.hasOwnProperty(eventName) && Array.isArray(events[eventName]);
	}

	/**
		* Adds a listener to be invoked when events of the specified type are emitted.
		*
		* @param {string}   eventName    Name of the event to listen to
		* @param {function} callback Function to invoke when the specified event is emitted
  **/
	addListener(eventName, callback) {
	  const events = this.events;

		if (typeof callback === 'function') {
	    if (this.isValidEvent(eventName)) {
	      events[eventName].push(callback);
	    } else {
	      events[eventName] = [callback];
	    }
	  }
	}

	/**
		* Alias to addListener
	**/
  on(eventName, callback) {
    this.addListener(eventName, callback);
  }

	/**
		* Emits an event of the given type with the given data. All handlers of that particular type will be notified.
		*
		* @param {string} eventName Name of the event to emit
		* @param {*}            Arbitrary arguments to be passed to each
		*                       registered listener
		*
		* @example
		*   emitter.addListener('someEvent', (message) => {
		*     console.log(message)
		*   })
		*
		*   emitter.emit('someEvent', 'hello') // logs 'hello'
  */

	emit(eventName,  ...args) {
	  const events = this.events

		if (this.isValidEvent(eventName)) {

	    // create a shallow copy
	    let listeners = [...events[eventName]];

			listeners.forEach((listener) => {
				if (listener) {
	        listener.apply(this, args);
	      }
			});
	  }
	}

	/**
		* Removes a registered listener from the emitter.
		*
		* @param {string}   event    Name of the event listening to
		* @param {function} callback Function to remove
	*/
	removeListener(eventName, callback) {
	  const events = this.events;

	  if (this.isValidEvent(eventName)) {
			const callbacks = events[eventName];
	    const stringifedCallback = callback.toString();

			callbacks.forEach((callback, idx) => {
				if (callback.toString() === stringifedCallback) {
					events[eventName].splice(idx, 1);
				}
			});
	  }
	}

	/**
		* Removes all of the registered listeners.
		*
		* @param {string} eventName Name of the event to remove listeners from
	*/
  removeAllListeners(eventName) {
    const events = this.events
    if (events.hasOwnProperty(eventName)) {
      events[eventName] = []
    }
  }

	/**
		* Much like addListener, except the listener is removed after being invoked.
		*
		* @param {string}   eventName    Name of the event to listen to
		* @param {function} listener Function to invoke only once when the given
		*                            event is emitted
	*/
  once(eventName, callback) {
    const emitter = this;

    emitter.on(eventName, function listenerWrapper () {
			callback.apply(emitter, arguments);
      emitter.removeListener(eventName, listenerWrapper)
    })
  }


  /**
		* Returns an array of listeners that are currently registered for the given
		* event.
		*
		* @param  {string} eventName Name of the event to query
		* @return {array}
	*/
  listeners(eventName) {
    return this.events.hasOwnProperty(eventName) ? this.events[eventName] : []
  }

}


const emitor = new Emitter();

const callback1 = function(x, y) {console.log(x + y)}
const callback2 = function(x, y) {console.log(y + x)}

// emitor.addListener('event_1', callback1);
// emitor.addListener('event_1', callback2);
//
// console.log('emitor', emitor);
//
// emitor.emit('event_1', ' hello', ' world');
// emitor.removeListener('event_1', callback2);
// emitor.emit('event_1', ' hello', ' world');
// // emitor.removeAllListeners('event_1');
console.log('emitor', emitor);
// emitor.once('event_2', callback1);
emitor.once('event_2', callback1);
emitor.emit('event_2', ' hello', ' world');
emitor.emit('event_2', ' hello', ' world');
emitor.emit('event_2', ' hello', ' world');
console.log('emitor', emitor);
