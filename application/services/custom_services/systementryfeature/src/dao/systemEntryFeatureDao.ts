import * as mongoose from 'mongoose';
import systemEntryFeatureModel from '../models/systemEntryFeature';
import { CustomLogger } from '../config/Logger'


export class systemEntryFeatureDao {
    private systemEntryFeature = systemEntryFeatureModel;
    constructor() { }
public GpSearch(systemEntryFeatureData, callback){
new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(systemEntryFeatureData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.systemEntryFeature.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(systemEntryFeatureData, callback){
new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureDao.ts: GpUpdate')

this.systemEntryFeature.findOneAndUpdate({ _id: systemEntryFeatureData._id }, systemEntryFeatureData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureDao.ts: GpGetAllValues')

this.systemEntryFeature.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(systemEntryFeatureId, callback){
new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureDao.ts: GpDelete')

this.systemEntryFeature.findByIdAndRemove(systemEntryFeatureId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(systemEntryFeatureData, callback){
new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureDao.ts: GpCreate')
let temp = new systemEntryFeatureModel(systemEntryFeatureData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}