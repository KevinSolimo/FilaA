const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const findDocuments = function(db, query ,callback) {
  // Get the documents collection
  const collection = db.collection('Countries');
  // Find some documents
  collection.find(query).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    callback(docs);
  });
};

const url = "mongodb+srv://ksolimo:wkyP8ch7MvVZnul8@cluster0-yosjr.mongodb.net/";

module.exports = {
    
    findByCountryMatch: function (p1,p2) {
        return "La Somma di " + p1 + "+" + p2 + " è " +(p1 + p2);
    },
    all : function (callback) {
        // Use connect method to connect to the server
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
         
            const db = client.db("Tecnologie");
         
            findDocuments(db, {}, function(docs) {
                client.close();
                callback(docs);
            });
        });
    },
    capital : function(country, callback){
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
         
            const db = client.db("Tecnologie");
            
            var query = {name : country};
         
            findDocuments(db, query, function(docs) {
                client.close();
                //console.log(docs[0].capital);
                callback(docs[0].capital);
            });
        });
    },
    states : function(country, callback){
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
         
            const db = client.db("Tecnologie");
            
            var query = {name : country};
         
            findDocuments(db, query, function(docs) {
                client.close();
                //console.log(docs[0].provinces);
                callback(docs[0].provinces);
            });
        });
    },
    info : function(country, callback){
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
         
            const db = client.db("Tecnologie");
            
            var query = {name : country};
         
            findDocuments(db, query, function(docs) {
                client.close();
                //console.log(docs[0].provinces);
                callback(docs[0]);
            });
        });
    }
    
};