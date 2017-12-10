import Application from '@ember/application';
import { initialize } from 'testing-testing-2-17/instance-initializers/do-stuff';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Instance Initializer | do stuff', function(hooks) {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.instanceInitializer({
      name: 'do stuff',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
    this.instance = this.application.buildInstance();
  });

  hooks.afterEach(function() {
    destroyApp(this.instance);
    destroyApp(this.application);
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    await this.instance.boot();

    assert.equal(self.foo, true);
  });
});
