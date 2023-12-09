import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гость: DS.belongsTo('i-i-s-proaraz-гость', { inverse: null, async: false }),
  карты: DS.belongsTo('i-i-s-proaraz-карты', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-proaraz-сотрудник', { inverse: null, async: false }),
  формаРегВхода: DS.belongsTo('i-i-s-proaraz-форма-рег-входа', { inverse: 'тЧРегВхода', async: false })
});

export let ValidationRules = {
  гость: {
    descriptionKey: 'models.i-i-s-proaraz-т-ч-рег-входа.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карты: {
    descriptionKey: 'models.i-i-s-proaraz-т-ч-рег-входа.validations.карты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-proaraz-т-ч-рег-входа.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаРегВхода: {
    descriptionKey: 'models.i-i-s-proaraz-т-ч-рег-входа.validations.формаРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРегВходаE', 'i-i-s-proaraz-т-ч-рег-входа', {
    карты: belongsTo('i-i-s-proaraz-карты', 'Карты', {
      кодКарты: attr('Код карты', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'кодКарты' }),
    сотрудник: belongsTo('i-i-s-proaraz-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' }),
    гость: belongsTo('i-i-s-proaraz-гость', 'Гость', {
      фамилия: attr('Фамилия', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фамилия' })
  });
};
