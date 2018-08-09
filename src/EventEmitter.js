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

class Emitor {
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
  on(event, listener) {
    this.addListener(event, listener);
  }

	/**
   * Emits an event of the given type with the given data. All handlers of that particular type will be notified.
   *
   * @param {string} event Name of the event to emit
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

	// removeListener(eventName) {
	//   const events = this.events;
	//   let listeners;
	//   let listenerString;
	//
	//   if (
	// 		typeof listener === 'function' &&
	//     events.hasOwnProperty(event) &&
	//     Array.isArray(events[event])
	// 	) {
	//     listeners = this.listeners(event);
	//     listenerString = listener.toString();
	//     for (let i = 0; i < listeners.length; i++) {
	//       if (listeners[i].toString() === listenerString) {
	//         listeners.splice(i, 1);
	//       }
	//     }
	//   }
	// }

}


const emitor = new Emitor();

const callback1 = function(x, y) {console.log(x + y)}
const callback2 = function(x, y) {console.log(y + x)}

emitor.addListener('event_1', callback1);
// emitor.addListener('event_1', callback2);

console.log('emitor', emitor);

emitor.emit('event_1', 'hello', ' world')
