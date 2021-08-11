import { Request, Response } from 'express';
import {sefNodeGenDao} from '../dao/SefNodeGenDao';
import { CustomLogger } from '../config/Logger'
let sefNodeGen = new sefNodeGenDao();

export class sefNodeGenService {
    
    constructor() { }
    
    public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SefNodeGenService.ts: GpSearch')
     const  sefNodeGenData = req.query;
     sefNodeGen.GpSearch(sefNodeGenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from SefNodeGenService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SefNodeGenService.ts: GpUpdate')
     const  sefNodeGenData = req.body;
     sefNodeGen.GpUpdate(sefNodeGenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from SefNodeGenService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SefNodeGenService.ts: GpGetAllValues')
     
     sefNodeGen.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from SefNodeGenService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SefNodeGenService.ts: GpDelete')
     const  sefNodeGenId = req.params.id;
     sefNodeGen.GpDelete(sefNodeGenId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from SefNodeGenService.ts: GpDelete')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into SefNodeGenService.ts: GpCreate')
     const  sefNodeGenData = req.body;
     sefNodeGen.GpCreate(sefNodeGenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from SefNodeGenService.ts: GpCreate')
         callback(response);
         });
    }


}