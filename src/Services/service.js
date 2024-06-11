const dbConnection = require('../../config/dbConfig');

exports.create = async(data) => {
    try {
        const results = dbConnection.query(
            `INSERT INTO players(id, first_name, last_name, position, number, image, user_name) VALUES (?, ?, ?, ?, ?, ?, ?)`, 
            [data.id, data.first_name, data.last_name, data.position, data.number, data.image, data.user_name]
        );
        return results;
    } catch(error) {
        throw error;
    }
}

exports.list = async() => {
    try {
        const [rows, fields] = await dbConnection.query(`SELECT * from players`);
        return rows;
    } catch(error) {
        throw error;
    }
} 

exports.update = async (id, data) => {
    try {
        const updateData = await dbConnection.query(
            `UPDATE players SET first_name = ?, last_name = ?, position = ?, number = ?, image = ?, user_name = ? WHERE id = ?`,
            [data.first_name, data.last_name, data.position, data.number, data.image, data.user_name, id]
        );
        return updateData;
    } catch (error) {
        throw error;
    }
}

exports.delete = async(req, res) => {
    try {
        const id = req.params.id;
        const deleteData = await dbConnection.query(`DELETE from players WHERE id = ?`, [id]);
        return deleteData;
    } catch(error) {
        throw error;
    }
}

