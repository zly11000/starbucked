class isfile{
    constructor(file,obj){
        this.obj = obj;
        this.type = file.type;
        this.size = file.size;
    }
      isImage(){
         this.type =  this.type.match(/\/(\w+)$/i)[1];
         let {img} = this.obj;
         return img.includes(this.type);
    }
    isSize(){
        let {size} = this.obj;
        return (size * 1024 * 1024) > this.size
    }
}
export default isfile;