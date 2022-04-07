export class Alert {
    id!: string;
    message!: string;
    autoClose!: boolean;
    fade!: boolean;
    alertType!: string;

    constructor(init?:Partial<Alert>){
        Object.assign(this, init);
    }

}

export class AlertSettings {
    public static SUCCESS = "success";
    public static ERROR = "error";
    public static INFO = "info";
    public static WARNING = "warning";
}