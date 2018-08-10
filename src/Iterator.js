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
		if (!this.hasNext()) {
			throw new Error('No such element')
		}
		const iterator = this.interqueue.shift();
		const val = iterator.next().value;
		if (this.hasNext()) {
			this.interqueue.push(iterator);
		}
		return val
	}

	hasNext (iterator) {
		return this.interqueue.length !== 0;
	}

}

const arr1 = ['a1', 'a2', 'a3', 'a4'];
const arr2 = ['b1', 'b2', 'b3'];
const arr3 = ['c1', 'c2', 'c3', 'c4'];

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
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // a3
console.log('iteratorFlattener.next()', iteratorFlattener.next()); // a3


// const array = ['a', 'b', 'c', 'd', 'e'];
// const iterator = array[Symbol.iterator]();
// const first = iterator.next().value
// console.log('first', first);
// console.log('iterator.next().value', iterator.next().value); // Since it was skipped, so it's not assigned
// const third = iterator.next().value
// console.log('third', third);
// console.log('iterator.next().value', iterator.next().value); // Since it was skipped, so it's not assigned
// const last = iterator.next().value
// console.log('last', last);
