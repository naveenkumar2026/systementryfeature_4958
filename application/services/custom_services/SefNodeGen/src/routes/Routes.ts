import { Request, Response, NextFunction } from "express";
import { sefNodeGenController } from '../controller/SefNodeGenController';


export class Routes {
    private sefNodeGen: sefNodeGenController = new sefNodeGenController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/sefNodeGen/get/search').get(this.sefNodeGen.GpSearch);
app.route('/sefNodeGen').put(this.sefNodeGen.GpUpdate);
app.route('/sefNodeGen').get(this.sefNodeGen.GpGetAllValues);
app.route('/sefNodeGen/:id').delete(this.sefNodeGen.GpDelete);
app.route('/sefNodeGen').post(this.sefNodeGen.GpCreate);
     }

}