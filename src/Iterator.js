/*
	Implement an Iterator of Iterators which traverses through  an arbitrary number of iterators. IE, an iterator which iterates over three list iterators in the following way:

	L1 = a1, a2, a3
	L2 = b1, b2, b3
	L3 = c1, c2, c3

	Then the iterator should process them in this order:
	a1, b1, c1, a2, b2, c2, a3, b3, c3
*/

class IteratorFlattener {
	constructor (interlist) {
		this.interqueue = [];

		for (let iterator of interlist) {
			this.interqueue.push(iterator);
		}
	}

	next () {
		const iterator = this.interqueue.shift();
		let { value, done } = iterator.next();

		if (!value) {
			value = this.next();
		}
		if (!done) {
			this.interqueue.push(iterator);
		}
		return value;
	}
}

const arr1 = ['a1', 'a2', 'a3', 'a4'];
const arr2 = ['b1', 'b2', 'b3'];
const arr3 = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

const iterator1 = arr1[Symbol.iterator]();
const iterator2 = arr2[Symbol.iterator]();
const iterator3 = arr3[Symbol.iterator]();

const iterators = [iterator1, iterator2, iterator3];
const interList = iterators[Symbol.iterator]();

const iteratorFlattener = new IteratorFlattener(interList);
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // a1
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // b1
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // c1
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // a2
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // b2
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // c2
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // a3
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // b3
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // c3
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // a4
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // c4
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // c5
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // c6
