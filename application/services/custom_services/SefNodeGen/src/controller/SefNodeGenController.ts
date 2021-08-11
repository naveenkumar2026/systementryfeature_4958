import { Request, Response } from 'express';
import { sefNodeGenService } from '../service/SefNodeGenService';
import { CustomLogger } from '../config/Logger'
let sefNodeGen = new sefNodeGenService();

export class sefNodeGenController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
sefNodeGen.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SefNodeGenController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SefNodeGenController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
sefNodeGen.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SefNodeGenController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SefNodeGenController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
sefNodeGen.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SefNodeGenController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SefNodeGenController.ts: GpGetAllValues');
    })}
public GpDelete(req: Request, res: Response) {
sefNodeGen.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SefNodeGenController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SefNodeGenController.ts: GpDelete');
    })}
public GpCreate(req: Request, res: Response) {
sefNodeGen.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into SefNodeGenController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from SefNodeGenController.ts: GpCreate');
    })}


}