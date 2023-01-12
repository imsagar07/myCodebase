const liquorDatas = require('./liquor.mongo');
var fs = require('fs');
async function saveLiquorData(liquor) {
    try {
        const liquorData = new liquorDatas({
            "brandType": liquor.brandType,
            "liquorname": liquor.liquorname,
            "price": liquor.price,
            "description": liquor.description,
            "liquorType": liquor.liquorType,
            'img': fs.readFileSync(liquor.image),
            'contentType': 'image/png'
        });
        await liquorData.save();
    } catch (err) {
        console.error(`Could not save liquor data ${err}`);
    }
}

async function getLiquor() {
    return await liquorDatas.find({});
}

module.exports = {
    saveLiquorData,
    getLiquor
};