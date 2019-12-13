class ApaliTaxi{
    constructor(distance,BasePriceUpto,BasePrice,ForNextkm,ForNextkmPrice,morethankm){
        this.distance = distance;
        this.BasePriceUpto = BasePriceUpto
        this.BasePrice = BasePrice
        this.ForNextkm = ForNextkm
        this.ForNextkmPrice = ForNextkmPrice
        this.morethankm = morethankm
    }
    cap = () =>{
        let result;
        let max = this.distance-this.BasePriceUpto
        if(this.distance <= this.BasePriceUpto){
            result = this.BasePriceUpto;
            console.log(result)
        }
        else if(this.distance < this.ForNextkm){
                result = ((max*this.ForNextkmPrice)+this.BasePrice)
                console.log(result)
        }
        else if(this.distance <= 75 ){
            result = (50+((max-(max-this.ForNextkmPrice))*this.ForNextkm)+((max-this.ForNextkmPrice)*8))
            console.log(result)
        }
        else if(this.distance > this.morethankm){
            result = this.distance*8
            console.log(result)
        }
        // return result
    }
}

class Mini{
    constructor(){
    const name = new ApaliTaxi(75,BasePriceUpto,BasePrice,ForNextkm,ForNextkmPrice,morethan);
    name.cap()
    }
}
const name = new Mini; 
