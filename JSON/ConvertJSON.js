var newJSON = {};

//"CondensedSimplJSON.json"

$.getJSON("SimplifiedJSON", function(json) {
    var numOfPoems = json.container.poem.length;
    
    // Iterate through poems
    for(var i = 0; i < numOfPoems; i++){
        var numOfLines = json.container.poem[i].length;
        
        // Iterate through lines
        for(var j = 0; j < numOfLines; j++){
            var numOfSeg = json.container.poem[i][j].length;
            
            // Iterate through segment tags
            for(var k = 0; k < numOfSeg; k++){
                var numSegEntries = json.container.poem[i][j][k].length;
                
                // Iterate through segment entries
                for(l = 0; l < numSegEntries; l++){
                    
                    // Iterate through properties of a given segment entry
                    $.each(json.container.poem[i][j][k][l], function(key, value){
                        newJSON[i][j][key] = value;
                    });
                }
            }
        }
    }
    
});

var stringJSON = JSON.stringify(newJSON);
console.log(stringJSON);
