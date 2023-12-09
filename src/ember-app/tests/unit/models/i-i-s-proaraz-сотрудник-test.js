import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proaraz-сотрудник', 'Unit | Model | i-i-s-proaraz-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proaraz-гость',
    'model:i-i-s-proaraz-должности',
    'model:i-i-s-proaraz-карты',
    'model:i-i-s-proaraz-комната',
    'model:i-i-s-proaraz-сотрудник',
    'model:i-i-s-proaraz-т-ч-рег-входа',
    'model:i-i-s-proaraz-форма-рег-входа',
    'model:i-i-s-proaraz-форма-рег-карт',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
