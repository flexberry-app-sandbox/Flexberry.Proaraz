import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  почта: DS.attr('string'),
  серНомПаспорта: DS.attr('number'),
  телефон: DS.attr('number'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-proaraz-гость.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-proaraz-гость.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-proaraz-гость.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-proaraz-гость.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серНомПаспорта: {
    descriptionKey: 'models.i-i-s-proaraz-гость.validations.серНомПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-proaraz-гость.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-proaraz-гость.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостьE', 'i-i-s-proaraz-гость', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    датаРождения: attr('Дата рождения', { index: 3 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 4 }),
    телефон: attr('Телефон', { index: 5 }),
    почта: attr('Почта', { index: 6 })
  });

  modelClass.defineProjection('ГостьL', 'i-i-s-proaraz-гость', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    датаРождения: attr('Дата рождения', { index: 3 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 4 }),
    телефон: attr('Телефон', { index: 5 }),
    почта: attr('Почта', { index: 6 })
  });
};
