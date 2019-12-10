class ApaliTaxi{
    constructor(distance,carType){
        this.distance = distance;
        this.carType = carType;
    }
    cap = () =>{
        // let capType = this.carType.toLowerCase()
        minicap()
        suvcap()
        sedancap()
    }

    minicap = () =>{
        if(this.distance < 75){
            console.log(this.distance)
        }
    }

}

const name = new ApaliTaxi(10);
name.cap()