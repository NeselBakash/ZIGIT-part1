import Cookies from 'universal-cookie';



export default new class Cookie {
    private cookie : Cookies;

    constructor(){
        this.cookie = new Cookies();
    }
    set(name:string, value:any) {
        if (value) {
            this.cookie.set(name,value)
        }
        else {
            console.log(`value is ${value}`);
        }
    }

    get(name: string) {
        return this.cookie.get(name);
    }

    deleteToken(name:string) {
        if(this.get(name)){
            this.cookie.remove(name)
        }
        else{
            console.log('no value for this name has found.')
        }
    }

}