Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {

    this.route('home', {
        path: '/',
        onBeforeAction() {
            Router.go('items');
        }
    });

    this.route('items', {
        path: '/items',
        template: 'items',
        // yieldRegions: {
        //     'layout_footer': { to: 'footer' }
        // },
        onBeforeAction() {


            this.next();
        },
        action() {
            this.render();
            // this.render(null, { to: 'containerOverlay' });
            // this.render('views_' + this.params.insurance + 'InsuranceWizard', { to: 'wizard' });
            // this.render('elements_headerMain', { to: 'header' });
        },
        data() {
            return {
                 items: [
                  {
                    title: 'test1'
                  },
                  {
                    title: 'test2'
                  }
               ]
            };
        }
    });

});