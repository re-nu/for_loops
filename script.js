const  basic=[
                {name:"Renuka Borade"},
                {email:"renukaborade88@gmai.com"},
                {location:"Aurangabad,Maharashtra"},
            
            ]

const degree= { 
    institute:"Deogiri institute of engineering and management studies" ,
degree:"BE",
branch:"electronics and telecommunication"
} 

// for loop for all basic array in resume
console.log("for loop for basic array")
for(let i=0;i<basic.length;i++){
    console.log(basic[i])
}

// for in loop to display just values of object in degree
console.log("for in loop for degree object")
for(let key in degree){
    console.log("degree",degree[key]);
}

// for of loop It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
const str="If u can win over your mind ,you can win over the whole world "
const ar=[];
for (let c of str){
    ar.push(c);
}
console.log(ar.join(''))