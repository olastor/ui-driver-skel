/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/node-driver/driver-skel/component', ['exports', 'ember', 'shared/components/node-driver/driver-skel/component'], function (exports, _ember, _component) {
  exports['default'] = _component['default'];
});

define('shared/components/node-driver/driver-skel/component', ['exports', 'ember', 'shared/mixins/node-driver', 'shared/components/node-driver/driver-skel/template'], function (exports, _ember, _uiMixinsDriver, _template) {
/* ^--- And here */

  // You can put embmer object here
  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;

/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    layout: _template.default,
    driverName: 'skel',
    config: alias('model.skelConfig'),
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = get(this, 'globalStore').createRecord({
        type: 'skelConfig',
        cpuCount: 2,
        memorySize: 2048,
      });

      set(this, 'model.skelConfig', config);
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = get(this, 'errors')||[];
      if ( !get(this, 'model.name') ) {
        errors.push('Name is required');
      }

      // Add more specific errors

      // Check something and add an error entry if it fails:
      if ( parseInt(get(this, 'config.memorySize'),10) < 1024 )
      {
        errors.push('Memory Size must be at least 1024 MB');
      }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( get(errors, 'length') )
      {
        set(this, 'errors', errors);
        return false;
      }
      else
      {
        set(this, 'errors', null);
        return true;
      }
    },

    // Any computed properties or custom logic can go here
  });
});
;
define("shared/components/node-driver/driver-skel/template",["exports"],function(exports){

exports["default"] = Ember.HTMLBars.template({"id":"aNxOl2vB","block":"[[[10,\"section\"],[14,0,\"horizontal-form\"],[12],[1,\"\\n\"],[6,[39,0],null,[[\"showExpandAll\"],[false]],[[\"default\"],[[[[1,\"    \"],[10,0],[14,0,\"over-hr mb-20\"],[12],[10,1],[12],[1,[34,1]],[13],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"row box mt-20\"],[12],[1,\"\\n      \"],[10,\"h4\"],[12],[1,\"Instance Options\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"col span-2 col-inline\"],[12],[1,\"\\n          \"],[10,\"label\"],[12],[1,\"CPUs\"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"col span-1\"],[12],[1,\"\\n          \"],[1,[33,2,[\"cpuCount\"]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"col span-3\"],[12],[1,\"\\n          \"],[1,[28,[35,3],null,[[\"value\",\"valueMin\",\"valueMax\"],[[33,2,[\"cpuCount\"]],1,32]]]],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"col span-2 col-inline\"],[12],[1,\"\\n          \"],[10,\"label\"],[12],[1,\"Memory Size\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"col span-4\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"input-group\"],[12],[1,\"\\n            \"],[1,[28,[35,4],null,[[\"min\",\"value\",\"classNames\"],[1,[33,2,[\"memorySize\"]],\"form-control\"]]]],[1,\"\\n            \"],[10,0],[14,0,\"input-group-addon bg-default\"],[12],[1,\"MB\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"over-hr\"],[12],[10,1],[12],[1,[34,5]],[13],[13],[1,\"\\n\\n    \"],[1,[28,[35,6],null,[[\"model\",\"nameRequired\"],[[33,7],true]]]],[1,\"\\n\\n    \"],[1,[28,[35,8],null,[[\"initialLabels\",\"setLabels\",\"expandAll\",\"expand\"],[[33,9,[\"labels\"]],[28,[37,10],[[30,0],\"setLabels\"],null],[33,11],[28,[37,10],[[30,0],[30,2]],null]]]]],[1,\"\\n\\n    \"],[1,[28,[35,12],null,[[\"machine\",\"showEngineUrl\"],[[33,7],[33,13]]]]],[1,\"\\n\"]],[1,2]]]]],[1,\"\\n\"],[1,\"  \"],[1,[28,[35,14],null,[[\"errors\"],[[33,15]]]]],[1,\"\\n\\n\"],[1,\"  \"],[1,[28,[35,16],null,[[\"save\",\"cancel\"],[\"save\",\"cancel\"]]]],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"al\",\"expandFn\"],false,[\"accordion-list\",\"driverOptionsTitle\",\"config\",\"input-slider\",\"input-integer\",\"templateOptionsTitle\",\"form-name-description\",\"model\",\"form-user-labels\",\"labelResource\",\"action\",\"expandAll\",\"form-engine-opts\",\"showEngineUrl\",\"top-errors\",\"errors\",\"save-cancel\"]]","moduleName":"(unknown template module)","isStrictMode":false});;

});
