new Vue({
    el: '#app',
    data:{
        valOperator: "",
        valScreen : "0",
        subValScreen : null
    },
    methods: {
        screen(inc){
            if(this.valOperator.length>0){
                if(this.valOperator.length > 0 && !this.subValScreen && inc!=="."){
                    this.subValScreen = this.valScreen;
                    this.valScreen = ""
                }
            }

            if(this.valScreen === "0" && inc === "0"){
                this.valScreen = "0"
            } else if(inc === "."){
                let isThere = false
                this.valScreen.split().map(elem => {
                    if(elem === "."){
                        isThere = true
                    }
                });

                console.log(isThere)

                if(isThere === true){
                    this.valScreen = this.valScreen
                } else{
                    if(this.valScreen === '~'){
                        this.valScreen = '0'
                    } else{
                        this.valScreen+="."
                    }
                }
            }else{
                if(this.valScreen === "0"){
                    this.valScreen = ""
                }
                this.valScreen += inc
            }

            return this.valScreen
        },
        remove(){
            this.valScreen = "0"
            this.subValScreen = ""
            this.valOperator = ""
        },
        addOperator(op){
            if(this.subValScreen && this.valOperator){
                this.valOperator = op
                this.counting()
            } else{
                this.valOperator = op
            }
        },
        counting(){
            let result;
            if(!this.valOperator){
                this.valScreen = this.valScreen
            } else{
                switch(this.valOperator){
                    case "+":
                        result = Number(this.valScreen) + Number(this.subValScreen);
                        break;
                    case "-":
                        result = Number(this.subValScreen) - Number(this.valScreen);
                        break;
                    case "x":
                        result = Number(this.valScreen) * Number(this.subValScreen);
                        break;
                    case "/":
                        result = Number(this.subValScreen) / Number(this.valScreen);
                        break;
                    default:
                        break;
                }

                if(result === "infinity"){
                    this.valScreen = "~"
                }else{
                    this.valScreen = `${result}`
                }
                this.subValScreen = ""
                this.valOperator = ""
            }
        }
    },
})