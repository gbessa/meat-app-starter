import { Response } from "@angular/http"
import { Observable } from "rxjs/Observable"

export class ErrorHandler {
    static handleError(error: Response | any) {
        let error_message: string
        if (error instanceof Response) {
            error_message = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        } else {
            error_message = error.toString()
        }
        console.log(error_message)
        return Observable.throw(error_message);
        
    }
}