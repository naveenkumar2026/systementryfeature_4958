import { Request, Response } from 'express';
import { systemEntryFeatureService } from '../service/systemEntryFeatureService';
import { CustomLogger } from '../config/Logger'
let systemEntryFeature = new systemEntryFeatureService();

export class systemEntryFeatureController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
systemEntryFeature.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
systemEntryFeature.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
systemEntryFeature.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureController.ts: GpGetAllValues');
    })}
public GpDelete(req: Request, res: Response) {
systemEntryFeature.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureController.ts: GpDelete');
    })}
public GpCreate(req: Request, res: Response) {
systemEntryFeature.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureController.ts: GpCreate');
    })}


}