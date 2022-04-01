export class MarcaApi {
	public constructor(init?: Partial<MarcaApi>){
		Object.assign(this,init);
	}
	
	id  : number;
	description : string;
	
}  