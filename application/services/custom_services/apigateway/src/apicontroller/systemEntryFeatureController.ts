import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class systemEntryFeatureController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/systemEntryFeature/get/search', this.GpSearch);
this.router.put('/systemEntryFeature', this.GpUpdate);
this.router.get('/systemEntryFeature', this.GpGetAllValues);
this.router.delete('/systemEntryFeature/:id', this.GpDelete);
this.router.post('/systemEntryFeature', this.GpCreate);
    }

public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureController.ts: GpSearch');
        new ApiAdaptar().get(Constant.SYSTEMENTRYFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureController.ts: GpUpdate');
        new ApiAdaptar().put(Constant.SYSTEMENTRYFEATUREURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureController.ts: GpGetAllValues');
        new ApiAdaptar().get(Constant.SYSTEMENTRYFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureController.ts: GpDelete');
        new ApiAdaptar().delete(Constant.SYSTEMENTRYFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into systemEntryFeatureController.ts: GpCreate');
        new ApiAdaptar().post(Constant.SYSTEMENTRYFEATUREURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from systemEntryFeatureController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }




}
