Package.describe({
  name: 'trimurtix:native-components',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.4.1');

  api.mainModule('native-components.js');


  api.use([
    'templating',
    'ecmascript',
    'fastclick',
    'tracker',
    'session',
    'fourseven:scss@3.10.0'
  ]);

  api.addFiles([

    // LAYOUT
    'components/layout/gestures/Gestures.js',
    'components/layout/grid/Grid.js',
    'components/layout/scroll/Scroll.js',
    'components/layout/scroll/Scroll.html',
    'components/layout/transitions/Transitions.js',
    'components/layout/view/View.js',
    'components/layout/view/View.html',
    'components/layout/content/Content.js',
    'components/layout/content/Content.html',

    // UI
    'components/ui/actionsheet/ActionSheet.js',
    'components/ui/actionsheet/ActionSheet.html',
    'components/ui/badge/Badge.js',
    'components/ui/badge/Badge.html',
    'components/ui/button/Button.js',
    'components/ui/button/Button.html',
    'components/ui/card/Card.js',
    'components/ui/card/Card.html',
    'components/ui/collapse/Collapse.js',
    'components/ui/collapse/Collapse.html',
    'components/ui/imageview/ImageView.js',
    'components/ui/imageview/ImageView.html',
    'components/ui/item/Item.js',
    'components/ui/item/Item.html',
    'components/ui/item/ItemGroup.js',
    'components/ui/item/ItemGroup.html',
    'components/ui/item/ItemDivider.html',
    'components/ui/label/Label.js',
    'components/ui/label/Label.html',
    'components/ui/listview/ListView.js',
    'components/ui/listview/ListView.html',
    'components/ui/listview/ListViewHeader.html',
    'components/ui/menu/Menu.js',
    'components/ui/menu/Menu.html',
    'components/ui/modal/Modal.js',
    'components/ui/modal/Modal.html',
    'components/ui/mapview/MapView.js',
    'components/ui/mapview/MapView.html',
    'components/ui/navbar/NavBar.js',
    'components/ui/navbar/NavBar.html',
    'components/ui/footer/Footer.js',
    'components/ui/footer/Footer.html',
    'components/ui/popover/Popover.js',
    'components/ui/popover/Popover.html',
    'components/ui/range/Range.js',
    'components/ui/range/Range.html',
    'components/ui/search/Search.js',
    'components/ui/search/Search.html',
    'components/ui/searchbar/SearchBar.js',
    'components/ui/searchbar/SearchBar.html',
    'components/ui/segment/Segment.js',
    'components/ui/segment/Segment.html',
    'components/ui/slides/Slides.js',
    'components/ui/slides/Slides.html',
    'components/ui/sticky/Sticky.js',
    'components/ui/sticky/Sticky.html',
    'components/ui/tabs/Tabs.js',
    'components/ui/tabs/Tabs.html',
    'components/ui/tabsbar/TabsBar.js',
    'components/ui/tabsbar/TabsBar.html',
    'components/ui/toolbar/Toolbar.js',
    'components/ui/toolbar/Toolbar.html',

    // FORM
    'components/form/checkbox/Checkbox.js',
    'components/form/checkbox/Checkbox.html',
    'components/form/datepicker/DatePicker.js',
    'components/form/datepicker/DatePicker.html',
    'components/form/fileupload/FileUpload.js',
    'components/form/fileupload/FileUpload.html',
    'components/form/radio/Radio.js',
    'components/form/radio/Radio.html',
    'components/form/select/Select.js',
    'components/form/select/Select.html',
    'components/form/switch/Switch.js',
    'components/form/switch/Switch.html',
    'components/form/textfield/TextField.js',
    'components/form/textfield/TextField.html',
    'components/form/timepicker/TimePicker.js',
    'components/form/timepicker/TimePicker.html',

    // MESSAGES
    'components/message/loading/Loading.js',
    'components/message/loading/Loading.html',
    'components/message/toast/Toast.js',
    'components/message/toast/Toast.html',
    'components/message/popup/Popup.js',
    'components/message/popup/Popup.html',


  ], 'client');

   api.addFiles([

        // Config Variables
        'stylesheets/scss/config/_variables.scss',
        'stylesheets/scss/config/_mixins.scss',
        'stylesheets/scss/config/_reset.scss',
        'stylesheets/scss/config/_utilities.scss',

        // Base
        'stylesheets/scss/base/_view.scss',
        'stylesheets/scss/base/_content.scss',
        'stylesheets/scss/base/_colors.scss',
        'stylesheets/scss/base/_images.scss',
        'stylesheets/scss/base/_forms.scss',
        'stylesheets/scss/base/_flexbox.scss',
        'stylesheets/scss/base/_media.scss',
        'stylesheets/scss/base/_text.scss',

        // Layout
        'stylesheets/scss/layout/_grid.scss',
        'stylesheets/scss/layout/_toolbar.scss',
        'stylesheets/scss/layout/_footer.scss',
        'stylesheets/scss/layout/_navigation.scss',

        // Modules
        'stylesheets/scss/modules/_article.scss',
        'stylesheets/scss/modules/_avatar.scss',
        'stylesheets/scss/modules/_badge.scss',
        'stylesheets/scss/modules/_breadcrumb.scss',
        'stylesheets/scss/modules/_button.scss',
        'stylesheets/scss/modules/_card.scss',
        'stylesheets/scss/modules/_chips.scss',
        'stylesheets/scss/modules/_collapse.scss',
        'stylesheets/scss/modules/_depths.scss',
        'stylesheets/scss/modules/_dialog.scss',
        'stylesheets/scss/modules/_list.scss',
        'stylesheets/scss/modules/_loading.scss',
        'stylesheets/scss/modules/_pagination.scss',
        'stylesheets/scss/modules/_toast.scss',
        'stylesheets/scss/modules/_table.scss',

        // Adaptive
        'stylesheets/scss/adaptive/_widescreen.scss',
        'stylesheets/scss/adaptive/_desktop.scss',
        'stylesheets/scss/adaptive/_tablet.scss',
        'stylesheets/scss/adaptive/_landscape.scss',
        'stylesheets/scss/adaptive/_portrait.scss',
        'stylesheets/scss/adaptive/_no-screen.scss',

        // Platforms
        'stylesheets/scss/platforms/_ios.scss',
        'stylesheets/scss/platforms/_android.scss',

        // @imports
        'stylesheets/scss/styles.scss'


    ], 'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('trimurtix:native-components');
  api.mainModule('native-components-tests.js');
});
