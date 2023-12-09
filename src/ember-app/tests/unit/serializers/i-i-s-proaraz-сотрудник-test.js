import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proaraz-сотрудник', 'Unit | Serializer | i-i-s-proaraz-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proaraz-сотрудник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proaraz-вид-карты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
