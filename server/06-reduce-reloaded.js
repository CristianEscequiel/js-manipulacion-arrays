const items = [ 1 , 3 , 2 , 3 , 3 , 1 , 10];

const rta = items.reduce(( obj , item ) => {
    if(!obj[item]){
        obj[item] = 1
    }else {
        obj[item] = obj[item] +1
    }
    return obj
} , {} )


console.log(rta)


const data = [
    {
        name: 'Nicolas',
        lvl:'low'
    },
    {
        name: 'Andrea',
        lvl:'medium'
    },
    {
        name: 'Zulema',
        lvl:'hight'
    },
    {
        name: 'Santiago',
        lvl:'low'
    },
    {
        name: 'Valentina',
        lvl:'medium'
    }
]


const rta2 = data
            .map(item => item.lvl)
            .reduce(( obj , item ) => {
                if(!obj[item]){
                    obj[item] = 1
                }else {
                    obj[item] = obj[item] +1
                }
                return obj
            } , {} )

console.log(rta2)