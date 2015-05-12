ListItems.allow({
	'insert': (userId, doc) => {
		return true;
	},
	'update': (userId, doc) => {
		return true;
	},
	'remove': (userId, doc) => {
		console.log('this: ', this);
		return true;
	}
});
