function searchLexicon(input){
    var c;
    var partsOfSpeech = "";
    var text="";
    var line=0;
    var sentence="";
    var found = false;
    var dataString;
    var returnArr = [];
    var poem = ["The Compleynte of the Virgin before the Cross","Address to Sir John Oldcastle","La Male Regle","Balade to King Henry V","Two Balades to Henry V and the Knights of the Garter [Ballad #]","Two Balades to Henry V and the Knights of the Garter [Ballad #]","Ad Beatam Virginem","Balade, after K. Richard II's Bones . . . ","Balade to my gracious Lord of York",
        "Ad Beatam Vriginem, the 'Mother of God' ","Balade to the Duke of Bedford","Balade to my Lord the Chancellor","Balade and Roundel or Chanceon to Mr. Henry Somer, Subtreasurer","Balade to King Henry V","Balade to King Henry V, for Money","Balade to my maister Carpenter","Balade by the Court of Good Company","Balade to the Virgin and Christ","The Letter of Cupid to Lovers, his Subjects","Regiment of Princes","Verba compilatoris ad librum [envoi at end of regiment]","Inoucacio ad patrem","ad filium honor et gloria","ad spiritum sanctum","Ad Beatam Virginem","item de beata virgine (prologus)","item de beata virgine (fabula)","the story of the monk who clad the virgin","Three Roundels - Hoccleve's appeal to Lady Money","Three Roundels - Lady Money's scornful answer","Three Roundels - Hoccleve's Humorous praise of his lady","epilogue to three roundels","Lerne to Dye.","Thomas Hoccleve's Complaint","Dialog with a Friend","POEM ","Lerne to Dye.","POEM ","Hoccleve's Dedication to Lady Westmoreland"];


    $.getJSON('../JSON/newPoemHub.json', function (query) {
//        alert("success");
        c = data;
        for( var i=0; i< c.container.poem.length; i++) {
            line = 0;
            for (var j = 0; j < c.container.poem[i].lg.length; j++) {
                for (var k = 0; k < c.container.poem[i].lg[j].l.length; k++) {
                    sentence = "";
                    line++;
                    for (var l = 0; l < c.container.poem[i].lg[j].l[k].seg.length; l++) {
                        var word = c.container.poem[i].lg[j].l[k].seg[l];
                        sentence += word.__text + " ";
//                         console.log(sentence);

                        if (word.__text == query) {
                            found = true;
                            theword = '"' + word.__text + '"';
                            partsOfSpeech = word._pos;
                            console.log("The parts of speech is :" + partsOfSpeech);
                            dataString = theword + "," + " " +"Poem: " + poem[i]+ "," + " " + "line" + " " + line + "," + " " + partsofspeech + "<br />";
//                            document.getElementById("demo").innerHTML += "Poem:" + i + " " + theword + "," + " " + "line" + " " + line + "," + " " + partsOfSpeech + "<br />";
                        }
                        ;



                    }
                    ;
                    if (found == true) {
//                        console.log(sentence);
//                        document.getElementById("demo").innerHTML += sentence +"<br>" + "<br>";
                        dataString += sentence + "<br>" + "<br>";
                        returnArr.push(dataString);
                    }
                    found = false;
                }
                ;
            }
            ;
        };
        // for(var i=0;i<returnArr.length;i++)
        //     document.getElementById("demo").innerHTML += returnArr[i];
        return returnArr;
    });
}

function searchPoem(poemNumber, input){
    var c;
    var partsOfSpeech = "";
    var text="";
    var line=0;
    var sentence="";
    var found = false;
    var dataString;
    var i = poemNumber;
    var returnArr = [];

    $.getJSON('../JSON/newPoemHub.json', function (data) {
//        alert("success");
        c = data;

           for (var j = 0; j < c.container.poem[i].lg.length; j++) {
                for (var k = 0; k < c.container.poem[i].lg[j].l.length; k++) {
                    sentence = "";
                    line++;
                    for (var l = 0; l < c.container.poem[i].lg[j].l[k].seg.length; l++) {
                        var word = c.container.poem[i].lg[j].l[k].seg[l];
                        sentence += word.__text + " ";
//                         console.log(sentence);

                        if (word.__text == input) {
                            found = true;
                            theword = '"' + word.__text + '"';
                            partsOfSpeech = word._pos;
                            console.log("The parts of speech is :" + partsOfSpeech);
                            //returnArr[word.__text].push([[line, partsofspeech, ""]]);
                            dataString = theword + "," + " " + "line" + " " + line + "," + " " + partsOfSpeech + "<br />";
//                            document.getElementById("demo").innerHTML += "Poem:" + i + " " + theword + "," + " " + "line" + " " + line + "," + " " + partsofspeech + "<br />";
                        }
                        ;



                    }
                    ;
                    if (found == true) {
//                        console.log(sentence);
//                        document.getElementById("demo").innerHTML += sentence +"<br>" + "<br>";
                        dataString += sentence + "<br>" + "<br>";
                        returnArr.push(dataString);
                    }
                    found = false;
                }
                ;
            }
            ;

        // for(var i=0;i<returnArr.length;i++)
        //     document.getElementById("demo").innerHTML += returnArr[i];
        return returnArr;
    });
}

