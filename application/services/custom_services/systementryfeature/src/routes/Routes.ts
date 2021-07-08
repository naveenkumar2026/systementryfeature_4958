import { Request, Response, NextFunction } from "express";
import { systemEntryFeatureController } from '../controller/systemEntryFeatureController';


export class Routes {
    private systemEntryFeature: systemEntryFeatureController = new systemEntryFeatureController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/systemEntryFeature/get/search').get(this.systemEntryFeature.GpSearch);
app.route('/systemEntryFeature').put(this.systemEntryFeature.GpUpdate);
app.route('/systemEntryFeature').get(this.systemEntryFeature.GpGetAllValues);
app.route('/systemEntryFeature/:id').delete(this.systemEntryFeature.GpDelete);
app.route('/systemEntryFeature').post(this.systemEntryFeature.GpCreate);
     }

}