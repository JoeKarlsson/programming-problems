// Implement a method to effieciently exlude items from the items array, as outlined in the exlude array.

const itemList = [
	{type: 'computer', color: 'green', flavor: 'apple'},
	{type: 'cellphone', color: 'gold', flavor: 'orange'},
	{type: 'computer', color: 'silver', flavor: 'grape'},
]

const excludeList = [
	{k: 'type', v: 'cellphone'},
	{k: 'color', v: 'silver'},
	{k: 'color', v: 'gold'},
];

const itemExcluder = (items, exlude) => {
	const excludeCache = {};

	// Build exclude cache
	exlude.forEach(item => {
		if (excludeCache.hasOwnProperty(item.k)) {
			excludeCache[item.k][item.v] = true;
		} else {
			const newExludeObj = {};
			newExludeObj[item.v] = true
			excludeCache[item.k] = newExludeObj;
		}
	});



	// Check if any items are in the xclude cache
	const filteredItems = [];

	items.forEach(item => {
		let filterFlag = false;

		Object.keys(item).forEach(itemKey => {
			if (excludeCache[itemKey]) {
				if (excludeCache[itemKey][item[itemKey]] ) {
					filterFlag = true
				}
			}
		});
		if (!filterFlag) {
			return filteredItems.push(item);
		}
	});

	return filteredItems;
}

const result = itemExcluder(itemList, excludeList);
console.log('result', result);
