import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  комната: DS.belongsTo('i-i-s-proaraz-комната', { inverse: null, async: false }),
  тЧРегВхода: DS.hasMany('i-i-s-proaraz-т-ч-рег-входа', { inverse: 'формаРегВхода', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proaraz-форма-рег-входа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-proaraz-форма-рег-входа.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегВхода: {
    descriptionKey: 'models.i-i-s-proaraz-форма-рег-входа.validations.тЧРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаРегВходаE', 'i-i-s-proaraz-форма-рег-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-proaraz-комната', 'Комната', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' }),
    тЧРегВхода: hasMany('i-i-s-proaraz-т-ч-рег-входа', 'Т ч рег входа', {
      карты: belongsTo('i-i-s-proaraz-карты', 'Карты', {
        кодКарты: attr('Код карты', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'кодКарты' }),
      сотрудник: belongsTo('i-i-s-proaraz-сотрудник', 'Сотрудник', {
        фамилия: attr('Фамилия', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'фамилия' }),
      гость: belongsTo('i-i-s-proaraz-гость', 'Гость', {
        фамилия: attr('Фамилия', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'фамилия' })
    })
  });

  modelClass.defineProjection('ФормаРегВходаL', 'i-i-s-proaraz-форма-рег-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-proaraz-комната', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
