import { Serializer as ТЧРегВходаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proaraz-т-ч-рег-входа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧРегВходаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
