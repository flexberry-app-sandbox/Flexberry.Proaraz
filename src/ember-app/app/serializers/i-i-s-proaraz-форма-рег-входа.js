import { Serializer as ФормаРегВходаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proaraz-форма-рег-входа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФормаРегВходаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
