import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proaraz.caption'),
          title: i18n.t('forms.application.sitemap.proaraz.title'),
          children: [{
            link: 'i-i-s-proaraz-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-сотрудник-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proaraz-форма-рег-карт-l',
            caption: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-форма-рег-карт-l.caption'),
            title: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-форма-рег-карт-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proaraz-форма-рег-входа-l',
            caption: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-форма-рег-входа-l.caption'),
            title: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-форма-рег-входа-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proaraz-карты-l',
            caption: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-карты-l.caption'),
            title: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-карты-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proaraz-должности-l',
            caption: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-должности-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-proaraz-гость-l',
            caption: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-гость-l.caption'),
            title: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-гость-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-proaraz-комната-l',
            caption: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.proaraz.i-i-s-proaraz-комната-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})