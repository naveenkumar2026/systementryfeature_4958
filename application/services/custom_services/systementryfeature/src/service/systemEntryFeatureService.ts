import { Request, Response } from 'express';
import {systemEntryFeatureDao} from '../dao/systemEntryFeatureDao';
import { CustomLogger } from '../config/Logger'
let systemEntryFeature = new systemEntryFeatureDao();

export class systemEntryFeatureService {
    
    constructor() { }
    
    public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureService.ts: GpSearch')
     const  systemEntryFeatureData = req.query;
     systemEntryFeature.GpSearch(systemEntryFeatureData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureService.ts: GpUpdate')
     const  systemEntryFeatureData = req.body;
     systemEntryFeature.GpUpdate(systemEntryFeatureData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureService.ts: GpGetAllValues')
     
     systemEntryFeature.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureService.ts: GpDelete')
     const  systemEntryFeatureId = req.params.id;
     systemEntryFeature.GpDelete(systemEntryFeatureId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureService.ts: GpDelete')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureService.ts: GpCreate')
     const  systemEntryFeatureData = req.body;
     systemEntryFeature.GpCreate(systemEntryFeatureData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureService.ts: GpCreate')
         callback(response);
         });
    }


}