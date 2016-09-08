namespace App.Class{
    export class Animal{
        private _eat:string;
        get eat():string{
            return this._eat;
        }

        set eat(value:string)
        {
            this._eat = value;
        }
    }
}