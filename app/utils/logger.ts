export enum Severity {
    Debug = 1,
    Info,
    Warning,
    Error,
  }

export class Logger {
    static Log(severity: Severity, msg: string) {
        switch (severity) {
            case Severity.Debug:
                console.log(`DEBUG: ${msg}`); 
                break;
            case Severity.Info:  
                console.log(`INFO:  ${msg}`); 
                break;
            case Severity.Warning: 
                console.log(`WARN:  ${msg}`); 
                break;
            case Severity.Error: 
                console.log(`ERROR: ${msg}`); 
                break;
        }
    }
}