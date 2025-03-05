function receivesAFunction(callback){

    callback()
}

function returnsANamedFunction(){

return function named(){

}
}
returnsANamedFunction()

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}