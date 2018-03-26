import { HttpErrorResponse } from "@angular/common/http"
import { Observable } from "rxjs/Observable"

export class ErrorHandler {
    static handleError(error: Response | any) {
        let error_message: string
        if (error instanceof HttpErrorResponse) {
            const body = error.error
            error_message = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText || ''} ${body}`
        } else {
            error_message = error.toString()
        }
        console.log(error_message)
        return Observable.throw(error_message);
        
    }
}