Template['items'].helpers({

    listItems() {
        return ListItems.find();
    }

});


Template['items'].events({

    'submit .new-list-item': (event) => {
        let title = event.target.title.value;

        ListItems.insert({
            title: title,
            createdAt: new Date()
        });

        event.target.title.value = '';
        return false;
    }

});