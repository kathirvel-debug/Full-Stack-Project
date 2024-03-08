export default class product_model{
    constructor(_name,_desc,_price,_size,_image,id){
        this._id = id;
        this.name=_name;
        this.desc=_desc;
        this.price=_price;
        this.size=_size;
        this.image=_image;
    }
}