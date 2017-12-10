import Application from '@ember/application';
import { run } from '@ember/runloop';
import { initialize } from 'testing-testing-2-17/instance-initializers/do-stuff';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Instance Initializer | do stuff - old', {
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach() {
    run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.appInstance);

  assert.equal(self.foo, true);
});
