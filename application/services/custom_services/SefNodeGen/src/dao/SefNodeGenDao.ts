import * as mongoose from 'mongoose';
import sefNodeGenModel from '../models/SefNodeGen';
import { CustomLogger } from '../config/Logger'


export class sefNodeGenDao {
    private sefNodeGen = sefNodeGenModel;
    constructor() { }
public GpSearch(sefNodeGenData, callback){
new CustomLogger().showLogger('info', 'Enter into SefNodeGenDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(sefNodeGenData).forEach(
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
this.sefNodeGen.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SefNodeGenDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(sefNodeGenData, callback){
new CustomLogger().showLogger('info', 'Enter into SefNodeGenDao.ts: GpUpdate')

this.sefNodeGen.findOneAndUpdate({ _id: sefNodeGenData._id }, sefNodeGenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SefNodeGenDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into SefNodeGenDao.ts: GpGetAllValues')

this.sefNodeGen.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SefNodeGenDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(sefNodeGenId, callback){
new CustomLogger().showLogger('info', 'Enter into SefNodeGenDao.ts: GpDelete')

this.sefNodeGen.findByIdAndRemove(sefNodeGenId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SefNodeGenDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(sefNodeGenData, callback){
new CustomLogger().showLogger('info', 'Enter into SefNodeGenDao.ts: GpCreate')
let temp = new sefNodeGenModel(sefNodeGenData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from SefNodeGenDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}