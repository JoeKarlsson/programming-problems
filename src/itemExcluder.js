// implement a method to effieciently exlude items from the items array, as outlined in the exlude array.

const items = [
	{type: 'computer', color: 'green', flavor: 'apple'},
	{type: 'cellphone', color: 'gold', flavor: 'orange'},
	{type: 'computer', color: 'silver', flavor: 'grape'},
]

const exclude = [
	{k: 'type', v: 'cellphone'},
	{k: 'color', v: 'silver'},
];
