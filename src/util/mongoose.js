const multipleMongooseToObject = function (mongooses){
    return mongooses.map(mongooses => mongooses.toObject());
}

const mongooseToObject = function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose
}

export { multipleMongooseToObject, mongooseToObject }
