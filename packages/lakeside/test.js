let clothesArray = [];
let clothesJSON = "";

let clothesColShapes = [
    {
        name: "Binco LSPD",
        type: "binco",
        posx: 427.02,
        posy: -806.15,
        posz: 29.49,
    },
    {
        name: "Ponsonbys Fake",
        type: "ponsonbys",
        posx: 393.96,
        posy: -804.41,
        posz: 29,
    },
    {
        name: "Suburban Fake",
        type: "suburban",
        posx: 393.89,
        posy: -795,
        posz: 29.29,
    }
];

let hatColShapes = [
    {
        name: "Binco LSPD",
        type: "binco",
        posx: -1618.625,
        posy: -1081.693,
        posz: 13.49,
    }
];

let maskColShapes = [
    {
        name: "Binco LSPD",
        type: "binco",
        posx: -1336.969,
        posy: -1277.335,
        posz: 4.879,
    }
];

let outfitColshape = [
    {
        name: "Binco LSPD",
        type: "binco",
        posx: 429.87,
        posy: -811.59,
        posz: 29.49,
    },
    {
        name: "Anna's Villa",
        type: "binco",
        posx: -797.259,
        posy: 328.152,
        posz: 190.488,
    },
    {
        name: "Anna's Villa",
        type: "binco",
        posx: -37.107,
        posy: -583.627,
        posz: 83.91,
    },
    {
        name: "Anna's Villa",
        type: "binco",
        posx: 351.184,
        posy: -993.743,
        posz: -99.196,
    },
    {
        name: "Anna's Villa",
        type: "binco",
        posx: -1468.1057,
        posy: -537.946,
        posz: 50.73,
    },
    {
        name: "Anna's Villa",
        type: "binco",
        posx: -903.611,
        posy: -363.918,
        posz: 113.56,
    },
    {
        name: "Anna's Villa",
        type: "binco",
        posx: 259.842,
        posy: -1003.957,
        posz: -99.00,
    }

];

mp.events.add("server:Keybind:KeyE", (player) => {
    clothesColShapes.forEach((colShapeToCheck) => {
        let tempColShape = mp.colshapes.newSphere(colShapeToCheck.posx, colShapeToCheck.posy, colShapeToCheck.posz, 3, 0);
        if(tempColShape.isPointWithin(player.position)) {
            top = parseFloat(player.getVariable("topprice")).toFixed(2);
            shirt = parseFloat(player.getVariable("tshirtprice")).toFixed(2);
            torso = parseFloat(player.getVariable("torsoprice")).toFixed(2);
            hose = parseFloat(player.getVariable("hoseprice")).toFixed(2);
            schuhe = parseFloat(player.getVariable("schuheprice")).toFixed(2);
            
            var gesammt = parseFloat( top+hose ).toFixed(2);

            player.call("client:clothesShop:Clothes",[player.data.gender, colShapeToCheck.type, gesammt]);
        }
    });
    outfitColshape.forEach((colShapeToCheck) => {
        let tempColShape = mp.colshapes.newSphere(colShapeToCheck.posx, colShapeToCheck.posy, colShapeToCheck.posz, 3, 0);
        if(tempColShape.isPointWithin(player.position)) {
            player.call("client:clothesShop:openOutfit");
        }
    });
    hatColShapes.forEach((colShapeToCheck) => {
        let tempColShape = mp.colshapes.newSphere(colShapeToCheck.posx, colShapeToCheck.posy, colShapeToCheck.posz, 3, 0);
        if(tempColShape.isPointWithin(player.position)) {
            player.call("client:clothesShop:OpenHatEye");
        }
    });
    maskColShapes.forEach((colShapeToCheck) => {
        let tempColShape = mp.colshapes.newSphere(colShapeToCheck.posx, colShapeToCheck.posy, colShapeToCheck.posz, 3, 0);
        if(tempColShape.isPointWithin(player.position)) {
            player.call("client:clothesShop:OpenMask");
        }
    });
});
mp.events.add("server:clothesShop:openSubMenu", (player, item, gender, shop) => {
    if (mp.players.exists(player)) {
      if (item == "Oberkörper") {
          mp.events.call("server:clothesShop:top",player, gender, shop, item);
      } else if (item == "T-Shirt") {
        mp.events.call("server:clothesShop:tshirt", player, gender, shop, item);          
      } else if (item == "Torso") {
        mp.events.call("server:clothesShop:torso", player, gender, shop, item);          
      } else if (item == "Hosen") {
        mp.events.call("server:clothesShop:hosen", player, gender, shop, item);          
      } else if (item == "Schuhe") {
        mp.events.call("server:clothesShop:schuhe", player, gender, shop, item);          
      } else if (item == "Texturen") {
          mp.events.call("server:clothesShop:textures",player, gender, item);
      } else if (item == "Hüte") {
        mp.events.call("server:clothesShop:hat",player, gender, item);
      } else if (item == "Brillen") {
        mp.events.call("server:clothesShop:eye",player, gender, item);
    } else if (item == "Masken") {
        mp.events.call("server:clothesShop:mask",player, gender, item);
    }
      
    }
  });

  mp.events.add("server:clothesShop:openbuyedSubMenu", (player, item) => {
    if (mp.players.exists(player)) {
      if (item == "Oberkörper") {
          mp.events.call("server:clothesbuyedShop:top",player, item);
      } else if (item == "T-Shirt") {
        mp.events.call("server:clothesbuyedShop:tshirt", player, item);          
      } else if (item == "Torso") {
        mp.events.call("server:clothesbuyedShop:torso", player, item);          
      } else if (item == "Hosen") {
        mp.events.call("server:clothesbuyedShop:hosen", player, item);          
      } else if (item == "Schuhe") {
        mp.events.call("server:clothesbuyedShop:schuhe", player,  item);          
      } else if (item == "Texturen") {
          mp.events.call("server:clothesbuyedShop:textures",player, item);
      } else if (item == "Hüte") {
        mp.events.call("server:clothesbuyedShop:hat", player, item);          
      } else if (item == "Brillen") {
        mp.events.call("server:clothesbuyedShop:eye", player,  item);          
      } else if (item == "Mask") {
          mp.events.call("server:clothesbuyedShop:mask",player, item);
      }
      
    }
  });

  mp.events.add("server:clothesShop:textures", (player) => {
    if(mp.players.exists(player)) {
        gm.databaseManager.getConnection().query("SELECT appearance, data FROM characterModel WHERE internalId = ?", [player.data.internalId], function (err2, res2) {
            if (err2) console.log("Error in setModel + Clothes on Login");
            else if (res2.length > 0) {
            res2.forEach(function (modelData) {
                var model = JSON.parse(modelData.data);
                var appearance = modelData.appearance;
                player.call("client:clothesShop:textures",[appearance, player.data.gender]);
            });
            }
        });          
    }
  });

  mp.events.add("server:clothesShop:loadOutfits", (player, gender, shop, item) => {
    if(mp.players.exists(player)) {
      gm.databaseManager.getConnection().query("SELECT * FROM user_outfits WHERE charID = ?", [player.data.internalId], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let OutfitList = [];
                res.forEach(function(clot) {
                    let obj = {"name": String(clot.name), "id": String(clot.id)};
                    OutfitList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:loadOutfits", [JSON.stringify(OutfitList)]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:loadOutfits", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesShop:loaddelOutfits", (player, gender, shop, item) => {
    if(mp.players.exists(player)) {
      gm.databaseManager.getConnection().query("SELECT * FROM user_outfits WHERE charID = ?", [player.data.internalId], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let OutfitList = [];
                res.forEach(function(clot) {
                    let obj = {"name": String(clot.name), "id": String(clot.id)};
                    OutfitList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:deleteOutfits", [JSON.stringify(OutfitList)]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:deleteOutfits", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesShop:top", (player, gender, shop, item) => {
    if(mp.players.exists(player)) {
        if (player.data.gender == 0){
            gender = "male"            
        } else {
            gender = "female"
        }
        console.log(gender);
        var part = "Oberteile"
      gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE gender = ? AND part = ?", [gender, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "price": String(cloth.price), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", [JSON.stringify(ClothList), item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesShop:tshirt", (player, gender, shop, item) => {
    if(mp.players.exists(player)) {
        if (player.data.gender == 0){
            gender = "male"            
        } else {
            gender = "female"
        }
        var part = "Unterhemden"
      gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE gender = ? AND part = ?", [gender, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "price": String(cloth.price), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", [JSON.stringify(ClothList),item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesShop:hosen", (player, gender, shop, item) => {
    if(mp.players.exists(player)) {
        if (player.data.gender == 0){
            gender = "male"            
        } else {
            gender = "female"
        }
        var part = "Hosen"
      gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE gender = ? AND part = ?", [gender, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "price": String(cloth.price), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", [JSON.stringify(ClothList), item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesShop:schuhe", (player, gender, shop, item) => {
    if(mp.players.exists(player)) {
        if (player.data.gender == 0){
            gender = "male"            
        } else {
            gender = "female"
        }
        var part = "Schuhe"
      gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE gender = ? AND part = ?", [gender, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "price": String(cloth.price), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", [JSON.stringify(ClothList),item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesShop:torso", (player, gender, shop, item) => {
    if(mp.players.exists(player)) {
        if (player.data.gender == 0){
            gender = "male"            
        } else {
            gender = "female"
        }
        var part = "Torsos"
      gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE gender = ? AND part = ?", [gender, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "price": String(cloth.price), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", [JSON.stringify(ClothList),item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", ["none"]);
            }
        });
    }
  });


  mp.events.add("server:clothesShop:hat", (player, gender, shop, item) => {
    if(mp.players.exists(player)) {
        if (player.data.gender == 0){
            gender = "male"            
        } else {
            gender = "female"
        }
        var part = "Hüte"
      gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE gender = ? AND part = ?", [gender, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "price": String(cloth.price), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openHatMenu", [JSON.stringify(ClothList),item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openHatMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesShop:eye", (player, gender, shop, item) => {
    if(mp.players.exists(player)) {
        if (player.data.gender == 0){
            gender = "male"            
        } else {
            gender = "female"
        }
        var part = "Brillen"
      gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE gender = ? AND part = ?", [gender, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "price": String(cloth.price), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openEyeMenu", [JSON.stringify(ClothList),item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openEyeMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesShop:mask", (player, gender, shop, item) => {
    if(mp.players.exists(player)) {
        if (gender == 0){
            player.data.gender = "male"            
        } else {
            gender = "female"
        }
        var part = "Masken"
      gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE gender = ? AND part = ?", [gender, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "price": String(cloth.price), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", [JSON.stringify(ClothList),"Masken"]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openSubMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesbuyedShop:top", (player, item) => {
    if(mp.players.exists(player)) {
        var part = "Oberteile"
      gm.databaseManager.getConnection().query("SELECT * FROM buyed_clothes WHERE playerCharID = ? AND zone = ?", [player.data.internalId, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openbuyedSubMenu", [JSON.stringify(ClothList), item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openbuyedSubMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesbuyedShop:tshirt", (player, item) => {
    if(mp.players.exists(player)) {
        var part = "Unterhemden"
      gm.databaseManager.getConnection().query("SELECT * FROM buyed_clothes WHERE playerCharID = ? AND zone = ?", [player.data.internalId, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openbuyedSubMenu", [JSON.stringify(ClothList),item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openbuyedSubMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesbuyedShop:hosen", (player, item) => {
    if(mp.players.exists(player)) {
        var part = "Hosen"
      gm.databaseManager.getConnection().query("SELECT * FROM buyed_clothes WHERE playerCharID = ? AND zone = ?", [player.data.internalId, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openbuyedSubMenu", [JSON.stringify(ClothList), item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openbuyedSubMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesbuyedShop:schuhe", (player, item) => {
    if(mp.players.exists(player)) {
        var part = "Schuhe"
      gm.databaseManager.getConnection().query("SELECT * FROM buyed_clothes WHERE playerCharID = ? AND zone = ?", [player.data.internalId, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "id": String(cloth.id)};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openbuyedSubMenu", [JSON.stringify(ClothList),item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openbuyedSubMenu", ["none"]);
            }
        });
    }
  });

  mp.events.add("server:clothesbuyedShop:torso", (player, item) => {
    if(mp.players.exists(player)) {
        var part = "Torsos"
      gm.databaseManager.getConnection().query("SELECT * FROM buyed_clothes WHERE playerCharID = ? AND zone = ?", [player.data.internalId, part], function(err, res) {
        if (err) console.log("ERROR in Select Vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let ClothList = [];
                res.forEach(function(cloth) {
                    let obj = {"name": String(cloth.name), "id":cloth.id};
                    ClothList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:clothesShop:openbuyedSubMenu", [JSON.stringify(ClothList),item]);
                    }
                    i++;
                });
            } else {
                if(mp.players.exists(player)) player.call("client:clothesShop:openbuyedSubMenu", ["none"]);
            }
        });
    }
  });
function setClothes(player,id,type,price){
    if(mp.players.exists(player)) {
        gm.databaseManager.getConnection().query("SELECT clothesID FROM clothes_new WHERE id = ?", [id], function (err, res) {
            if (err) console.log("Error in Select Clothes: "+err);
            res.forEach(function(cloth) {
                console.log(type);
                if (type == "Oberkörper") {  
                    player.setVariable("topprice", price);           
                    player.setVariable("oberteil", id);         
                    player.setClothes(11,cloth.clothesID,0,2);
                } else if (type == "T-Shirt") {
                    player.setVariable("tshirtprice", price); 
                    player.setVariable("tshirt", id);    
                    player.setClothes(8,cloth.clothesID,0,2);         
                } else if (type == "Torso") {
                    player.setVariable("torso", id);    
                    player.setClothes(3,cloth.clothesID,0,2);        
                } else if (type == "Hosen") {
                    player.setVariable("hoseprice", price);  
                    player.setVariable("hosen", id);   
                    player.setClothes(4,cloth.clothesID,0,2); 
                } else if (type == "Schuhe") {
                    player.setVariable("schuheprice", price); 
                    player.setVariable("schuhe", id);    
                    player.setClothes(6,cloth.clothesID,0,2);          
                } else if (type == "Masken") {
                    player.setVariable("schuheprice", price); 
                    player.setVariable("schuhe", id);    
                    player.setClothes(1,cloth.clothesID,0,2);          
                }                   
            });
        }); 
    }
}
  mp.events.add("server:clothesShop:setClothes", setClothes);

  function setProp(player,id,type,price){
    if(mp.players.exists(player)) {
        gm.databaseManager.getConnection().query("SELECT clothesID FROM clothes_new WHERE id = ?", [id], function (err, res) {
            if (err) console.log("Error in Select Clothes: "+err);
            res.forEach(function(cloth) {
                console.log(type);
                if (type == "Hüte") {
                    player.setVariable("hatprice", price);  
                    player.setVariable("hat", id);   
                    player.setProp(0, cloth.clothesID, 0);
                } else if(type == "Brillen") {
                    console.log(cloth.clothesID);
                    player.setVariable("hatprice", price);  
                    player.setVariable("hat", id);   
                    player.setProp(1, cloth.clothesID, 0);
                }                                      
            });
        }); 
    }
}
  mp.events.add("server:clothesShop:setProp", setProp);

  function setbuyedclothes(player,id,type){
    if(mp.players.exists(player)) {
        gm.databaseManager.getConnection().query("SELECT clothesID FROM buyed_clothes WHERE id = ?", [id], function (err, res) {
            if (err) console.log("Error in Select Clothes: "+err);
            res.forEach(function(cloth) {
                if (type == "Oberkörper") {         
                    player.setVariable("oberteil", id);         
                    player.setClothes(11,cloth.clothesID,0,2);
                } else if (type == "T-Shirt") {
                    player.setVariable("tshirt", id);    
                    player.setClothes(8,cloth.clothesID,0,2);         
                } else if (type == "Torso") {
                    player.setVariable("torso", id);    
                    player.setClothes(3,cloth.clothesID,0,2);        
                } else if (type == "Hosen") {
                    player.setVariable("hosen", id);   
                    player.setClothes(4,cloth.clothesID,0,2); 
                } else if (type == "Schuhe") {
                    player.setVariable("schuhe", id);    
                    player.setClothes(6,cloth.clothesID,0,2);          
                } else if (type == "Hüte") {
                    player.setVariable("hatprice", price);  
                    player.setVariable("hat", id);   
                    player.setProp(0, cloth.clothesID, 0);    
                } else if (type == "Brillen") {
                    player.setVariable("brillenprice", price); 
                    player.setVariable("brillen", id);    
                    player.setProp(1, cloth.clothesID, 0);         
                }               
            });
        }); 
    }
}
  mp.events.add("server:clothesShop:setbuyedClothes", setbuyedclothes);



  mp.events.add("server:clothesShop:saveClothes", (player) => {
      if(mp.players.exists(player)) {
        player.call(`notification`, ["2", "Du hast die Kleidung gekauft"]);
        mp.events.call("server:ClothesMenu:save", player);
        mp.events.call("server:Clothes:save", player);
       }                  
  });

  mp.events.add("server:clothesShop:savebuyedClothes", (player) => {
    if(mp.players.exists(player)) {
      player.call(`notification`, ["2", "Du hast die Kleidung angezogen"]);
      mp.events.call("server:ClothesMenu:save", player);
     }                  
});

  mp.events.add("server:clothesShop:reset", (player) => {
    player.setVariable("oberteil", "null"); 
    player.setVariable("tshirt", "null");  
    player.setVariable("torso", "null");   
    player.setVariable("hosen", "null");
    player.setVariable("schuhe", "null");
    gm.databaseManager.getConnection().query("SELECT appearance, data FROM characterModel WHERE internalId = ?", [player.data.internalId], function (err2, res2) {
        if (err2) console.log("Error in setModel + Clothes on Login");

        if (res2.length > 0) {
            res2.forEach(function (modelData) {
                var model = JSON.parse(modelData.data);
                var appearance = modelData.appearance;

                if(mp.players.exists(player)) mp.events.call("server:ClothesMenu:load", player, appearance);
            });
        }
    });
  });

  mp.events.add("server:Clothes:save", (player) => {
    if(mp.players.exists(player)) {
      var oberteil = player.getVariable("oberteil"); 
      var tshirt = player.getVariable("tshirt");  
      var torso = player.getVariable("torso");  
      var hose = player.getVariable("hosen");  
      var schuhe = player.getVariable("schuhe");
      console.log(oberteil);
      console.log(tshirt);
      console.log(torso);
      console.log(hose);
      console.log(schuhe);
      
      
        if (oberteil !== "null") {
            gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE id = ?",[oberteil], function(err1, res1){
                if (err1) console.log("Error in Select Price vom Clothes");
                gm.databaseManager.getConnection().query("INSERT INTO buyed_clothes(playerCharID,clothesID,name,zone) VALUES(?,?,?,?)",[player.data.internalId, res1[0].clothesID, res1[0].name, res1[0].part],function(err4, res4) {
                });
            });
        }
        if (tshirt !== "null") {
            gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE id = ?",[tshirt], function(err2, res2){
                if (err1) console.log("Error in Select Price vom Clothes");
                gm.databaseManager.getConnection().query("INSERT INTO buyed_clothes(playerCharID,clothesID,name,zone) VALUES(?,?,?,?)",[player.data.internalId, res2[0].clothesID, res2[0].name, res2[0].part],function(err4, res4) {
                });
            });
        }
        if (torso !== "null") {
            gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE id = ?",[torso], function(err1, res3){
                if (err1) console.log("Error in Select Price vom Clothes");
                gm.databaseManager.getConnection().query("INSERT INTO buyed_clothes(playerCharID,clothesID,name,zone) VALUES(?,?,?,?)",[player.data.internalId, res3[0].clothesID, res3[0].name, res3[0].part],function(err4, res4) {
                });
            });
        }
        if (hose !== "null") {
            gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE id = ?",[hose], function(err1, res4){
                if (err1) console.log("Error in Select Price vom Clothes");
                gm.databaseManager.getConnection().query("INSERT INTO buyed_clothes(playerCharID,clothesID,name,zone) VALUES(?,?,?,?)",[player.data.internalId, res4[0].clothesID, res4[0].name, res4[0].part],function(err5, res5) {
                });
            });
        }
        if (schuhe !== "null") {
            gm.databaseManager.getConnection().query("SELECT * FROM clothes_new WHERE id = ?",[schuhe], function(err1, res5){
                if (err1) console.log("Error in Select Price vom Clothes");
                gm.databaseManager.getConnection().query("INSERT INTO buyed_clothes(playerCharID,clothesID,name,zone) VALUES(?,?,?,?)",[player.data.internalId, res5[0].clothesID, res5[0].name, res5[0].part],function(res6, res7) {
                });
            });
        }
    }
});
  function setTexture(player, drawableID, textureID, type){
    if(mp.players.exists(player)) {   
        var drawable = parseInt(drawableID); 
        var texture = parseInt(textureID); 
        if (type == "Oberteile") {
            player.setClothes(11,drawable,texture,2);
        } else if (type == "Tshirt") {
            player.setClothes(8,drawable,texture,2);                
        } else if (type == "Hosen") {
            player.setClothes(4,drawable,texture,2);      
        } else if (type == "Schuhe") {
            player.setClothes(6,drawable,texture,2);          
        } else if (type == "Texturen") {
            player.setClothes(11,drawable,texture,2);
        }                  
    }
  }
  mp.events.add("server:clothesShop:setTexture", setTexture);


  mp.events.add('inputValue', (player, trigger, output) => {
    if(trigger === "Saveoutfit") {
        if(mp.players.exists(player)) {
            gm.databaseManager.getConnection().query("SELECT appearance, data FROM characterModel WHERE internalId = ?", [player.data.internalId], function (err2, res2) {
                if (err2) console.log("Error in setModel + Clothes on Login");
        
                if (res2.length > 0) {
                    res2.forEach(function (modelData) {
                        var model = JSON.parse(modelData.data);
                        var appearance = modelData.appearance;
        
                        if(mp.players.exists(player)) mp.events.call("server:ClothesMenu:load", player, appearance);
                    });
                
                    let arrClothes = [];
                    let arrProps = [];
                    arrClothes[1] = player.getClothes(1);
                    arrClothes[2] = player.getClothes(2);
                    arrClothes[3] = player.getClothes(3);
                    arrClothes[4] = player.getClothes(4);
                    arrClothes[5] = player.getClothes(5);
                    arrClothes[6] = player.getClothes(6);
                    arrClothes[7] = player.getClothes(7);
                    arrClothes[8] = player.getClothes(8);
                    arrClothes[9] = player.getClothes(9);
                    arrClothes[10] = player.getClothes(10);
                    arrClothes[11] = player.getClothes(11);
                    arrProps[0] = player.getProp(0);
                    arrProps[1] = player.getProp(1);
                    arrProps[2] = player.getProp(2);
                    arrProps[6] = player.getProp(6);
                    arrProps[7] = player.getProp(7);

                    player.data.propZero = JSON.stringify(player.getProp(0));
                    player.data.propOne = JSON.stringify(player.getProp(1));
                    player.data.propTwo = JSON.stringify(player.getProp(2));
                    player.data.propSix = JSON.stringify(player.getProp(6));
                    player.data.propSeven = JSON.stringify(player.getProp(7));

                    let arrFull = {};
                    arrFull['clothes'] = arrClothes;
                    arrFull['props'] = arrProps;
                    var arrFullJSON = JSON.stringify(arrFull);

                    gm.databaseManager.getConnection().query('INSERT INTO user_outfits(clothes,name,charID) VALUES(?,?,?)', [arrFullJSON,output,player.data.internalId], function (err, res, row) {
                            if (err) console.log("Error in Player Update Clothes Query: " + err);
                            player.call(`notification`, ["2", "Du hast dein Outfit gespeichert"]);
                    });	
                }
            });	
        }
    }
});

mp.events.add('server:clothesShop:turnClothing', (player, id) => {
	if(mp.players.exists(player)) {
		gm.databaseManager.getConnection().query("SELECT clothes FROM user_outfits WHERE id = ?", [id], function (err2, res2) {
            if (err2) console.log("Error in setModel + Clothes on Login");   
            if (res2.length > 0) {
                    var appearance = res2[0].clothes;    
                    if(mp.players.exists(player)) mp.events.call("server:ClothesMenu:load", player, appearance);
                    mp.events.call("server:ClothesMenu:save", player);
            }
        });
	}
});

mp.events.add('server:clothesShop:deleteClothing', (player, id) => {
	if(mp.players.exists(player)) {
		gm.databaseManager.getConnection().query("DELETE FROM user_outfits WHERE id = ? AND charID = ?", [id, player.data.internalId], function (err2, res2) {
            if (err2) console.log("Error in setModel + Clothes on Login");   
            if (res2.length > 0) {
                    var appearance = res2[0].clothes;
    
                    if(mp.players.exists(player)) mp.events.call("server:ClothesMenu:load", player, appearance);
                
            }
        });
	}
});

mp.events.add('setClothes', (player, componentId, drawable, texture) => {
	if(mp.players.exists(player)) {
		player.setClothes(parseInt(componentId), parseInt(drawable), parseInt(texture), 2);
	}
});

mp.events.add('setProp', (player, componentId, drawable, texture) => {
	if(mp.players.exists(player)) {
		player.setProp(parseInt(componentId), parseInt(drawable), parseInt(texture));
	}
});

mp.events.add('server:ClothesMenu:load', (player, appearance) => {
	if(mp.players.exists(player)) {
		if (appearance === null) return;
		var appearance = JSON.parse(appearance);
		var clothes = appearance.clothes;
		var props = appearance.props;
		player.data.playerProps = props;
		var i = 0;
		clothes.forEach(function(component) {
			if (component !== null) {
				player.setClothes(parseInt(i), parseInt(component.drawable), parseInt(component.texture), parseInt(component.palette));
			}
			i++;
		});
		i = 0;
		props.forEach(function(component) {
			if (i == 0) player.data.propZero = JSON.stringify(component);
			if (i == 1)	player.data.propOne = JSON.stringify(component);
			if (i == 2) player.data.propTwo = JSON.stringify(component);
			if (i == 6) player.data.propSix = JSON.stringify(component);
			if (i == 7) player.data.propSeven = JSON.stringify(component);

			if (component !== null) {
				player.setProp(parseInt(i), parseInt(component.drawable), parseInt(component.texture));
			}
			i++;
		});
	}
});

mp.events.add('server:ClothesMenu:loadhead', (player, appearance) => {
	if(mp.players.exists(player)) {
		if (appearance === null) return;
		var appearance = JSON.parse(appearance);
		var clothes = appearance.clothes;
		var props = appearance.props;
		player.data.playerProps = props;
		var i = 0;
		clothes.forEach(function(component) {
			if (component !== null) {
				player.setClothes(parseInt(i), parseInt(component.drawable), parseInt(component.texture), parseInt(component.palette));
			}
			i++;
		});
		i = 0;
		props.forEach(function(component) {
			if (i == 1)	player.data.propOne = JSON.stringify(component);
			if (i == 2) player.data.propTwo = JSON.stringify(component);
			if (i == 6) player.data.propSix = JSON.stringify(component);
			if (i == 7) player.data.propSeven = JSON.stringify(component);

			if (component !== null) {
				player.setProp(parseInt(i), parseInt(component.drawable), parseInt(component.texture));
			}
			i++;
		});
	}
});

mp.events.add('server:ClothesMenu:syncClothes', (player, playerToSync) => {
	if(mp.players.exists(player)) {
		if(mp.players.exists(playerToSync)) {
	    if (playerToSync.getVariable("state") == "INGAME") {
				if (playerToSync.data.propZero !== null) {
					var component = JSON.parse(playerToSync.data.propZero);
					playerToSync.setProp(0, parseInt(component.drawable), parseInt(component.texture));
				}
				if (playerToSync.data.propOne !== null) {
					var component = JSON.parse(playerToSync.data.propOne);
					playerToSync.setProp(1, parseInt(component.drawable), parseInt(component.texture));
				}
				if (playerToSync.data.propTwo !== null) {
					var component = JSON.parse(playerToSync.data.propTwo);
					playerToSync.setProp(2, parseInt(component.drawable), parseInt(component.texture));
				}
				if (playerToSync.data.propSix !== null) {
					var component = JSON.parse(playerToSync.data.propSix);
					playerToSync.setProp(6, parseInt(component.drawable), parseInt(component.texture));
				}
				if (playerToSync.data.propSeven !== null) {
					var component = JSON.parse(playerToSync.data.propSeven);
					playerToSync.setProp(7, parseInt(component.drawable), parseInt(component.texture));
				}
			}
		}
	}
});

mp.events.add('server:ClothesMenu:save', (player) => {
	if(mp.players.exists(player)) {
        let arrClothes = [];
        let arrProps = [];
        arrClothes[1] = player.getClothes(1);
        arrClothes[2] = player.getClothes(2);
        arrClothes[3] = player.getClothes(3);
        arrClothes[4] = player.getClothes(4);
        arrClothes[5] = player.getClothes(5);
        arrClothes[6] = player.getClothes(6);
        arrClothes[7] = player.getClothes(7);
        arrClothes[8] = player.getClothes(8);
        arrClothes[9] = player.getClothes(9);
        arrClothes[10] = player.getClothes(10);
        arrClothes[11] = player.getClothes(11);
        arrProps[0] = player.getProp(0);
        arrProps[1] = player.getProp(1);
        arrProps[2] = player.getProp(2);
        arrProps[6] = player.getProp(6);
        arrProps[7] = player.getProp(7);

        player.data.propZero = JSON.stringify(player.getProp(0));
        player.data.propOne = JSON.stringify(player.getProp(1));
        player.data.propTwo = JSON.stringify(player.getProp(2));
        player.data.propSix = JSON.stringify(player.getProp(6));
        player.data.propSeven = JSON.stringify(player.getProp(7));

        let arrFull = {};
        arrFull['clothes'] = arrClothes;
        arrFull['props'] = arrProps;
        var arrFullJSON = JSON.stringify(arrFull);

        gm.databaseManager.getConnection().query('UPDATE characterModel SET appearance = ? WHERE internalId = ?', [arrFullJSON, player.data.internalId], function (err, res, row) {
                if (err) console.log("Error in Player Update Clothes Query: " + err);
        });		
	}
});