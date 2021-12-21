var app= new Vue({
    el:'#app' ,
    data:{
        
        products:[
            {id:1,product:'Filete Congelado de Salmon',marca:'MAR-VERDE',price:8390.00,stock:20, cant:1}
        ]
    },

    methods:{
        increment(index){
            console.log('---------increment'+index)
            this.products[index].cant++;
            this.products[index].stock--;

            
            
        },
        decrement(index){
            if (this.products[index].cant==0) return;
            console.log('---------decrement'+index)
            this.products[index].cant--;
        
        },
        del(index){
            this.products.splice(index,1);
            
        }
      
          
           
        
    },
 
    
    computed:{
        sum:{
            get(){
                let sum=0;
                for (let products of this.products){
                    sum+=products.cant*products.price;
                }
                return sum+'$';
            }
        },
        car:{
            get(){
                let car=0;
                for (let products of this.products){
                    car+=products.cant;
                }
                return car;
            }
        }
    }
})