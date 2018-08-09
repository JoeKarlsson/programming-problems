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



const emitor = new Emitor();

const callback = function(x, y) {console.log(x + y)}
const sub = emitor.subscribe('event_1', callback);

sub.emit('event_1')
