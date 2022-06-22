var partClicked = document.querySelectorAll('.hand-container area'), // part buttons
outputItem = document.querySelectorAll('.output-table td'), // output items
partSelectedTitle = document.getElementById('output'), // body part selected title
saveBtn = document.querySelector('button'), // save button
sizeSelector = document.querySelector('.sizes'), // Selector items 
conversionValues = document.querySelectorAll('.size-values td'), // Conversion Items
outputConversionPart = document.getElementById("output-converter"); // Conversion title

var inputTxt;
sizeSelector.disabled = true;
saveBtn.disabled = true;

for (var i=0; i < partClicked.length; i++) {

    // Make map areas in image clickable
    partClicked[i].addEventListener('click', function(e) {

        // Update Body Part label to show selected part
        partSelectedTitle.innerHTML = e.target.getAttribute('value');

        // Set size selector to default
        sizeSelector.options.selectedIndex = 0;

        // Loop through output table list items
        for (var x=0; x<outputItem.length; x++) {

            // if table list item id = body part selected id
            if(outputItem[x].id === e.target.id) {

                // enable size selector
                sizeSelector.disabled = false;

                // link Body Part text to table output item
                inputTxt = outputItem[x];
                
                // if table output item is not empty
                if (inputTxt.innerHTML.length !== 0) {
                    
                    // give conversion chart title
                    outputConversionPart.innerHTML = e.target.getAttribute('value');

                    // pass size to size converter
                    sizeConversion(inputTxt.innerHTML);
                }
                else {
                    // empty conversion title if no size saved
                    outputConversionPart.innerHTML = ""

                    // empty conversion table data
                    sizeConversion(0);
                }

                // track input change in size selector
                sizeSelector.addEventListener('change', function(e) {

                    // if the selected option is not "Select Size" enable save button
                    if (e.target.options[e.target.selectedIndex].value !== "Select Size") {
                        saveBtn.disabled = false;
                    } 
                })
            }
        }
    });
    
}

// Make Save Button functional
saveBtn.addEventListener('click', function() {
    // store size in output table item
    inputTxt.innerHTML = sizeSelector.options[sizeSelector.selectedIndex].value;
    // reset conversion chart
    sizeConversion(0);
    // disable items
    sizeSelector.disabled = true;
    saveBtn.disabled = true;
    // reset selector
    sizeSelector.options.selectedIndex = 0;
    // reset title
    partSelectedTitle.innerHTML = "";

});

function sizeConversion(input) {
    let ausSize = input,
    usSize, 
    europeSize, 
    circumference;

    switch (input) {
        case "F":
            usSize = 3.00;
            europeSize = 4.25;
            circumference = 44.2;
            break;
        case "G":
            usSize = 3.50;
            europeSize = 5.50;
            circumference = 45.5;
            break;
        case "H":
            usSize = 4.00;
            europeSize = 6.75;
            circumference = 46.8;
            break;
        case "I":
            usSize = 4.5;
            europeSize = 8.00;
            circumference = 48.0;
            break;
        case "J":
            usSize = 4.75;
            europeSize = 8.75;
            circumference = 48.7;
            break;
        case "K":
            usSize = 5.25;
            europeSize = 10.00;
            circumference = 50.0;
            break;
        case "L":
            usSize = 5.75;
            europeSize = 11.25;
            circumference = 51.2;
            break;
        case "M":
            usSize = 6.25;
            europeSize = 12.50;
            circumference = 52.5;
            break;
        case "N":
            usSize = 6.75;
            europeSize = 13.75;
            circumference = 53.8;
            break;
        case "O":
            usSize = 7.25;
            europeSize = 15.00;
            circumference = 55.1;
            break;
        case "P":
            usSize = 7.75;
            europeSize = 16.25;
            circumference = 56.3;
            break;
        case "Q":
            usSize = 8.25;
            europeSize = 17.50;
            circumference = 57.6;
            break;
        case "R":
            usSize = 8.75;
            europeSize = 19.00;
            circumference = 58.9;
            break;
        case "S":
            usSize = 9.25;
            europeSize = 20.25;
            circumference = 60.2;
            break;
        case "T":
            usSize = 9.75;
            europeSize = 21.50;
            circumference = 61.4;
            break;
        case "U":
            usSize = 10.25;
            europeSize = 22.75;
            circumference = 62.7;
            break;
        case "V":
            usSize = 10.75;
            europeSize = 24.00;
            circumference = 64.0;
            break;
        case "W":
            usSize = 11.25;
            europeSize = 25.25;
            circumference = 65.3;
            break;
        case "X":
            usSize = 11.75;
            europeSize = 26.50;
            circumference = 66.6;
            break;
        case "Y":
            usSize = 12.25;
            europeSize = 27.75;
            circumference = 67.8;
            break;
        case "Z":
            usSize = 12.50;
            europeSize = 28.50;
            circumference = 68.5;
            break;
        case 0:
            ausSize = "";
            usSize = "";
            europeSize = "";
            circumference = "";
            break;
    }

    for (var i=0 ; i < conversionValues.length ; i++) {
        if (input !== "") {
            conversionValues[0].innerHTML = ausSize;
            conversionValues[1].innerHTML = usSize;
            conversionValues[2].innerHTML = europeSize;
            conversionValues[3].innerHTML = circumference;
        }
        else {
            conversionValues[0].innerHTML = "NA";
            conversionValues[1].innerHTML = "NA";
            conversionValues[2].innerHTML = "NA";
            conversionValues[3].innerHTML = "NA";
        }
    }
}