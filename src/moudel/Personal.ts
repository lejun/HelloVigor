let animal = App.Class.Animal;
let anim = new animal();

namespace App.Class{
export class Personal{
    private _name :string;
    private _age:number;


	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}


	public get age(): number {
		return this._age;
	}

	public set age(value: number) {
		this._age = value;
	}

}


}
