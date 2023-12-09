import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProarazГостьLForm from './forms/i-i-s-proaraz-гость-l';
import IISProarazДолжностиLForm from './forms/i-i-s-proaraz-должности-l';
import IISProarazКартыLForm from './forms/i-i-s-proaraz-карты-l';
import IISProarazКомнатаLForm from './forms/i-i-s-proaraz-комната-l';
import IISProarazСотрудникLForm from './forms/i-i-s-proaraz-сотрудник-l';
import IISProarazФормаРегВходаLForm from './forms/i-i-s-proaraz-форма-рег-входа-l';
import IISProarazФормаРегКартLForm from './forms/i-i-s-proaraz-форма-рег-карт-l';
import IISProarazГостьEForm from './forms/i-i-s-proaraz-гость-e';
import IISProarazДолжностиEForm from './forms/i-i-s-proaraz-должности-e';
import IISProarazКартыEForm from './forms/i-i-s-proaraz-карты-e';
import IISProarazКомнатаEForm from './forms/i-i-s-proaraz-комната-e';
import IISProarazСотрудникEForm from './forms/i-i-s-proaraz-сотрудник-e';
import IISProarazФормаРегВходаEForm from './forms/i-i-s-proaraz-форма-рег-входа-e';
import IISProarazФормаРегКартEForm from './forms/i-i-s-proaraz-форма-рег-карт-e';
import IISProarazГостьModel from './models/i-i-s-proaraz-гость';
import IISProarazДолжностиModel from './models/i-i-s-proaraz-должности';
import IISProarazКартыModel from './models/i-i-s-proaraz-карты';
import IISProarazКомнатаModel from './models/i-i-s-proaraz-комната';
import IISProarazСотрудникModel from './models/i-i-s-proaraz-сотрудник';
import IISProarazТЧРегВходаModel from './models/i-i-s-proaraz-т-ч-рег-входа';
import IISProarazФормаРегВходаModel from './models/i-i-s-proaraz-форма-рег-входа';
import IISProarazФормаРегКартModel from './models/i-i-s-proaraz-форма-рег-карт';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proaraz-гость': IISProarazГостьModel,
    'i-i-s-proaraz-должности': IISProarazДолжностиModel,
    'i-i-s-proaraz-карты': IISProarazКартыModel,
    'i-i-s-proaraz-комната': IISProarazКомнатаModel,
    'i-i-s-proaraz-сотрудник': IISProarazСотрудникModel,
    'i-i-s-proaraz-т-ч-рег-входа': IISProarazТЧРегВходаModel,
    'i-i-s-proaraz-форма-рег-входа': IISProarazФормаРегВходаModel,
    'i-i-s-proaraz-форма-рег-карт': IISProarazФормаРегКартModel
  },

  'application-name': 'Proaraz',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proaraz',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proaraz',
          title: 'Proaraz'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        proaraz: {
          caption: 'Proaraz',
          title: 'Proaraz',
          'i-i-s-proaraz-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-proaraz-форма-рег-карт-l': {
            caption: 'Форма рег карт',
            title: ''
          },
          'i-i-s-proaraz-форма-рег-входа-l': {
            caption: 'Форма рег входа',
            title: ''
          },
          'i-i-s-proaraz-карты-l': {
            caption: 'Карты',
            title: ''
          },
          'i-i-s-proaraz-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-proaraz-гость-l': {
            caption: 'Гость',
            title: ''
          },
          'i-i-s-proaraz-комната-l': {
            caption: 'Комната',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proaraz-гость-l': IISProarazГостьLForm,
    'i-i-s-proaraz-должности-l': IISProarazДолжностиLForm,
    'i-i-s-proaraz-карты-l': IISProarazКартыLForm,
    'i-i-s-proaraz-комната-l': IISProarazКомнатаLForm,
    'i-i-s-proaraz-сотрудник-l': IISProarazСотрудникLForm,
    'i-i-s-proaraz-форма-рег-входа-l': IISProarazФормаРегВходаLForm,
    'i-i-s-proaraz-форма-рег-карт-l': IISProarazФормаРегКартLForm,
    'i-i-s-proaraz-гость-e': IISProarazГостьEForm,
    'i-i-s-proaraz-должности-e': IISProarazДолжностиEForm,
    'i-i-s-proaraz-карты-e': IISProarazКартыEForm,
    'i-i-s-proaraz-комната-e': IISProarazКомнатаEForm,
    'i-i-s-proaraz-сотрудник-e': IISProarazСотрудникEForm,
    'i-i-s-proaraz-форма-рег-входа-e': IISProarazФормаРегВходаEForm,
    'i-i-s-proaraz-форма-рег-карт-e': IISProarazФормаРегКартEForm
  },

});

export default translations;
