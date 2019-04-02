const db = require('./data');

class Fortune {
    constructor (id, fortunes){
        this.id = id;
        this.fortune = fortunes;
    }
    static getRandom(){
        return db.any(`select * from fortune_app`)
            .then((data)=>{
                return new Fortune(data[Math.floor(Math.random()* data.length)])
            })
    }
}

module.exports = Fortune;