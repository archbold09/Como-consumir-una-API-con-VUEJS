var url="https://randomuser.me/api/?results=10"

new Vue({
    el:'#app',
    created:function(){
        this.getUsuarios();
    },
    data(){
        return{
            lista:[]            
        } 
    },
    methods:{
        getUsuarios:function(){
                // "$http"  Esto lo podemos hacer gracias a que importamos el recurso AJAX que esta arriba 
            this.$http.get(url).then(function(response){
                            //.Data ignora el estatus de la respuesta
                this.lista = response.data.results
            });                      //.<nombre del array> ingresa de lleno a los datos necesarios para listar
        }
    }
});