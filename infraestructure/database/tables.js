const moment = require('moment')

class Tables{
    init(connection){
        this.connection = connection
        this.createTableCars()
        this.createTableMotorcycles()
    }

    createTableCars(){
        const sql = `CREATE TABLE IF NOT EXISTS Cars (
                    id INT NOT NULL AUTO_INCREMENT,
                    brand VARCHAR(30) NOT NULL, 
                    model VARCHAR(30) NOT NULL, 
                    year INT NOT NULL,
                    price DECIMAL(11, 2) NOT NULL, 
                    engine DECIMAL(3, 1) NOT NULL,
                    data DATETIME NOT NULL,
                    picture VARCHAR(400),
                    PRIMARY KEY(id)
                    )`
        this.connection.query(sql, err => {
            if(err){
                console.log(err);
            }else{
                console.log('a tabela de carros foi criada com sucesso');
            }
        })            
                
    }

    createTableMotorcycles(){
        const sql = `CREATE TABLE IF NOT EXISTS Motorcycles (
                    id INT NOT NULL AUTO_INCREMENT,
                    brand VARCHAR(30) NOT NULL, 
                    model VARCHAR(30) NOT NULL, 
                    category VARCHAR(20) NOT NULL,
                    year INT NOT NULL,
                    price DECIMAL(11, 2) NOT NULL, 
                    capacity INT NOT NULL,
                    data DATETIME NOT NULL,
                    picture VARCHAR(400),
                    PRIMARY KEY(id)
                    )`
        this.connection.query(sql, err => {
            if(err){
                console.log(err);
            }else{
                console.log('a tabela de motocicletas foi criada com sucesso');
            }
        })
    }

    addDateToJson(json){
        const string = JSON.stringify(json)

        const year = moment().get('year')
        const month = moment().get('month')
        const day = moment().get('day')
    
        const hour = moment().get('hour')
        const minute = moment().get('minute')
        const second = moment().get('second')
    
        const datetime = `${year}-${month}-${day} ${hour}:${minute}:${second}`
        
        const stringJson = string.replace('}', `,"data": "${datetime}"\n}`)

        const finalJson = JSON.parse(stringJson)
    
        return finalJson
    }


}

module.exports = new Tables