const usersData = require('./users.mongo');
const fs = require("fs");

function loadUsersDataAndSave() {
    fs.readFile("./data/users.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err);
            return;
        }
        try {
            const customer = JSON.parse(jsonString);
            saveUsers(customer);
        } catch (err) {
            console.log("Error parsing JSON string:", err);
        }
    });
}


async function saveUsers(user) {
    try {
        for (let i = 0; i < user.length; i++) {
            //update user data if already available
            // await usersData.updateOne({
            //     userName: user[i].userName,
            //     age: user[i].age,
            //     mobileNumber: user[i].mobileNumber
            // }, {
            //     userName: user[i].userName,
            // }, {
            //     upsert: true,
            // });

            //save user data 
            const newUser = new usersData({
                "userName": user[i].userName,
                "age": user[i].age,
                "mobileNumber": user[i].mobileNumber
            });
            await newUser.save();
        }
    } catch (err) {
        console.error(`Could not save user ${err}`);
    }
}

async function addUserToDatabase(user) {
    try {
        const newUser = new usersData({
            "userName": user.body.userName,
            "age": user.body.age,
            "mobileNumber": user.body.mobileNumber
        });
        await newUser.save();
    } catch (err) {
        return err = `Could not save user ${err}`;
    }
}

module.exports = {
    loadUsersDataAndSave,
    saveUsers,
    addUserToDatabase
};