Template.items.helpers({

    listItems() {
        return ListItems.find();
    }

});


Template.items.events({

    'submit .new-list-item': (event) => {
        let title = event.target.title.value;

        if (!title || title.length < 2) {
        	alert('minimu 2 chars');
        	return false;
        }

        ListItems.insert({
            title: title,
            createdAt: new Date()
        });

        event.target.title.value = '';
        return false;
    }

});

Template.item.events({

    'click .delete': function() {
        ListItems.remove(this._id);
    },
    'click input[type="checkbox"]': function() {
    	ListItems.update(this._id, { $set: { checked: !this.checked } });
    }

});
