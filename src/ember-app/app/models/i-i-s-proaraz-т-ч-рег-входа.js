import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧРегВходаMixin
} from '../mixins/regenerated/models/i-i-s-proaraz-т-ч-рег-входа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧРегВходаMixin, Validations, {
});

defineProjections(Model);

export default Model;
