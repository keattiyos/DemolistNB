
f = [{name:'a',size:30},{name:'b',size:40},{name:'c',size:50}] ;

f2 = f.map((item,index)=>{
    // return Object.assign({},{key:index,data:item})
    return Object.assign({key:index.toString()})
});

console.log(f2);