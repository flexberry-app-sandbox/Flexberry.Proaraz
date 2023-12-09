import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proaraz-гость-l');
  this.route('i-i-s-proaraz-гость-e',
  { path: 'i-i-s-proaraz-гость-e/:id' });
  this.route('i-i-s-proaraz-гость-e.new',
  { path: 'i-i-s-proaraz-гость-e/new' });
  this.route('i-i-s-proaraz-должности-l');
  this.route('i-i-s-proaraz-должности-e',
  { path: 'i-i-s-proaraz-должности-e/:id' });
  this.route('i-i-s-proaraz-должности-e.new',
  { path: 'i-i-s-proaraz-должности-e/new' });
  this.route('i-i-s-proaraz-карты-l');
  this.route('i-i-s-proaraz-карты-e',
  { path: 'i-i-s-proaraz-карты-e/:id' });
  this.route('i-i-s-proaraz-карты-e.new',
  { path: 'i-i-s-proaraz-карты-e/new' });
  this.route('i-i-s-proaraz-комната-l');
  this.route('i-i-s-proaraz-комната-e',
  { path: 'i-i-s-proaraz-комната-e/:id' });
  this.route('i-i-s-proaraz-комната-e.new',
  { path: 'i-i-s-proaraz-комната-e/new' });
  this.route('i-i-s-proaraz-сотрудник-l');
  this.route('i-i-s-proaraz-сотрудник-e',
  { path: 'i-i-s-proaraz-сотрудник-e/:id' });
  this.route('i-i-s-proaraz-сотрудник-e.new',
  { path: 'i-i-s-proaraz-сотрудник-e/new' });
  this.route('i-i-s-proaraz-форма-рег-входа-l');
  this.route('i-i-s-proaraz-форма-рег-входа-e',
  { path: 'i-i-s-proaraz-форма-рег-входа-e/:id' });
  this.route('i-i-s-proaraz-форма-рег-входа-e.new',
  { path: 'i-i-s-proaraz-форма-рег-входа-e/new' });
  this.route('i-i-s-proaraz-форма-рег-карт-l');
  this.route('i-i-s-proaraz-форма-рег-карт-e',
  { path: 'i-i-s-proaraz-форма-рег-карт-e/:id' });
  this.route('i-i-s-proaraz-форма-рег-карт-e.new',
  { path: 'i-i-s-proaraz-форма-рег-карт-e/new' });
});

export default Router;
