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


}

module.exports = new Tables