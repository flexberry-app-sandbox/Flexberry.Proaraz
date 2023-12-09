import {
  defineNamespace,
  defineProjections,
  Model as ТЧРегВходаMixin
} from '../mixins/regenerated/models/i-i-s-proaraz-т-ч-рег-входа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧРегВходаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
