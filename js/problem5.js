"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */


function changeElementText(element, answer) {
    $(element).text(answer);
}

function correctText(advertisementArray){
    var advertisingText="";
    var correctedText="";
    var numberOfWords=0;

    for( var arrNumber=0; arrNumber<advertisementArray.length; arrNumber++){
        var line = advertisementArray[arrNumber];
        for (var wordNumber=0; wordNumber<line.length; wordNumber++){
            advertisingText=advertisingText.concat(line[wordNumber]," ");
            numberOfWords++;
        }
        advertisingText=advertisingText.concat(" \n");

    }
    changeElementText("#advertisingText", advertisingText);

    for(var wordNumber=0;wordNumber<advertisementArray[0].length;wordNumber++){
        correctedText=correctedText.concat(advertisementArray[0][wordNumber]," ");
    }

    for(var wordNumber=advertisementArray[1].length-1; wordNumber>=0; wordNumber--){
        correctedText=correctedText.concat(advertisementArray[1][wordNumber]," ");
    }

    for(var wordNumber=0;wordNumber<advertisementArray[2].length;wordNumber++){
        correctedText=correctedText.concat(advertisementArray[2][wordNumber]," ");
    }

    changeElementText("#correctedText", correctedText);

    changeElementText("#numberOfWords", numberOfWords);

}

