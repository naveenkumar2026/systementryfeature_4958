
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const systemEntryFeatureSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   first_name: String,
   last_name: String
})

const systemEntryFeatureModel = mongoose.model('systemEntryFeature', systemEntryFeatureSchema, 'systemEntryFeature');
export default systemEntryFeatureModel;
