'use strict';
//This variable represents the current state of the program
//allList contains all the housing options from json file 
//selectedList contains the items that the user chooses to put in the cart
//filteredList contains the items based on what the user checks in the checkbox
//based on the user wants  private bath or not 
let state = {
    allList: [],
    selectedList:[],
    filteredList:[]
};

// this function generates the data from json file and 
// puts all of the housing items in the array `state.allList`
// this function  also calls the functions we are going to be used later
function fetchData() {
    fetch("data/mydata.json").then(function(data){
        return data.json();
    }).then(function(datajson){
        console.log(datajson);
        for(let i = 0; i < datajson.housing.length; i++) {
            state.allList.push(datajson.housing[i]);
        }
    }).then(() => {
        renderHousingOptions(state.allList);
        let clearButton = $('#clear');
        clearButton.attr('style', 'display:none;')
        makeTable();
        checkbox();
    })
}
fetchData();

// this function generates one housing item in the ul list and one button at a time
// by creating html elements and it also calls a callbacks function
// when the users `click` or `remove` the button 
function renderHousingItem(object) {
    let housingItem = $(` <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <img>
        <p></p>
        <button class="add-cart">Add to Cart</button>
        </div>`
    );
    let imgName = object.name;
    housingItem.find("img").attr('src', object.url);
    housingItem.find("img").attr('alt', imgName);
    housingItem.find("p").text(imgName);
    housingItem.find("button").attr('name',imgName);
    housingItem.find("button").click(function(){
        state.selectedList.push(object);
        let list = $('div.list ul');
        let li  = $('<li></li>');
        list.append(li);
        let newButton = this;
        newButton.disabled = true; 
        let removeButton = $(`<span class="input-group-append">
            <button type="button" class="btn btn-danger">
            <span class="fa fa-times" aria-label="remove"></span> ${object.name}
            </button>
            </span>`
        );

        li.append(removeButton);
        removeButton.find('button').on('click', function() {
            for(let j = 0; j < state.selectedList.length; j++) {

                if(state.selectedList[j].name === object.name) {
                    state.selectedList.splice(j, 1);
                }
            }
            li.remove();
            newButton.disabled=false;
        });
    });
    return housingItem;
}

// this function takes a parameter `list` and iterates through the list
// and append the housing items that our previous function `renderHousingItem` creates
function renderHousingOptions(list) {
    let housingOptions = $('.housing-options');
    housingOptions.html("");
    for(let i=0; i<list.length; i++){
      let newElem = renderHousingItem(list[i]);
      housingOptions.append(newElem);
    }
}

// this function generates the housing options 
// based on what the user puts in the checkbox
// by filering the `state.allList` which displays on the webstie
function checkbox() {
    state.filteredList = state.allList;
    let filter = $('.filter li');
    console.log("Here", filter.find('button'))
    filter.find('button').on('click', function() {      
        if (($('#filter-categorya').is(':checked') === true) && ($('#filter-categoryb').is(':checked') === false)) { //private bath
            state.filteredList = state.allList.filter(function( obj ) {
                return obj.privateBath === true;
            });
        } else if (($('#filter-categorya').is(':checked') === false) && ($('#filter-categoryb').is(':checked') === true)){ //community bath 
            state.filteredList = state.allList.filter(function( obj ) {
                return obj.privateBath === false;
            });
        } else if(($('#filter-categoryb').is(':checked') === true) && ($('#filter-categorya').is(':checked') === true)) {
            state.filteredList =  state.allList;
        }  else {
            state.filteredList = '';
        }
        renderHousingOptions(state.filteredList);
    });
}

// if there's no item in the cart => do nothing
// after the user chooses what item they'd like to  be in the cart
// this function  enerates a table based on what the user puts in the cart
// by accessing the property in the `state.allList`
// this function also allows the user to clear the table and re-pick the  items 
// in the cart
function makeTable() {
    $('.comparison-button').find('#comparison').on('click', function() { 
        if(state.selectedList.length === 0) return;
        let table = $('.housing-table');
        table.html("");
        let firstRow = $('<tr></tr>');
        let spareHead = $('<td>&nbsp</td>');
        firstRow.prepend(spareHead);
        let tableHead;
        for(let i = 0; i < state.selectedList.length; i++) {
            tableHead = $('<td></td>');
            let tableHeadElem = state.selectedList[i].name;
            tableHead.text(tableHeadElem);
            firstRow.append(tableHead);
        }
        table.append(firstRow);

        let secRow = $('<tr></tr>');
        let secSpareHead = $('<td>location</td>')
        secRow.prepend(secSpareHead);
        let tableHeadSec;
        for(let j = 0; j < state.selectedList.length; j++) {
            tableHeadSec = $('<td></td>');
            let secRowElem = state.selectedList[j].location;
            tableHeadSec.text(secRowElem);
            secRow.append(tableHeadSec);
        }
        table.append(secRow);

        let thirdRow = $('<tr></tr>');
        let thirdSpareHead = $('<td>Price</td>');
        let tableHeadThird;
        thirdRow.prepend(thirdSpareHead);
        for(let k = 0; k < state.selectedList.length; k++) {
            tableHeadThird = $('<td></td>');
            let thirdRowElem = state.selectedList[k].price;
            tableHeadThird.text(thirdRowElem);
            thirdRow.append(tableHeadThird);
        }
        table.append(thirdRow);

        let fourthRow = $('<tr></tr>');
        let fourthSpareHead = $('<td>Agreement Duration</td>');
        let tableHeadFourth;
        fourthRow.prepend(fourthSpareHead);
        for(let m = 0; m < state.selectedList.length; m++) {
            tableHeadFourth = $('<td></td>');
            let fourthRowElem = state.selectedList[m].agreementDuration;
            tableHeadFourth.text(fourthRowElem);
            fourthRow.append(tableHeadFourth);
        }
        table.append(fourthRow);

        let fifthRow = $('<tr></tr>');
        let fifthSpareHead = $('<td>Room Type</td>');
        let tableHeadFifth;
        fifthRow.prepend(fifthSpareHead);
        for(let n = 0; n < state.selectedList.length; n++) {
            tableHeadFifth = $('<td></td>');
            let fifthRowElem = state.selectedList[n].roomType;
            tableHeadFifth.text(fifthRowElem);
            fifthRow.append(tableHeadFifth);
        }
        table.append(fifthRow);

        let sixthRow = $('<tr></tr>');
        let sixthSpareHead = $('<td>Dining Nearby</td>');
        let tableHeadSixth;
        sixthRow.prepend(sixthSpareHead);
        for(let l = 0; l < state.selectedList.length; l++) {
            tableHeadSixth = $('<td></td>');
            let sixthRowElem = state.selectedList[l].diningNearby;
            tableHeadSixth.text(sixthRowElem);
            sixthRow.append(tableHeadSixth);
        }
        table.append(sixthRow);

        let seventhRow = $('<tr></tr>');
        let seventhSpareHead = $('<td>Living Learning Communities</td>');
        let tableHeadSeventh;
        seventhRow.prepend(seventhSpareHead);
        for(let s = 0; s < state.selectedList.length; s++) {
            tableHeadSeventh = $('<td></td>');
            let seventhRowElem = state.selectedList[s].livingLearningCommunities;
            tableHeadSeventh.text(seventhRowElem);
            seventhRow.append(tableHeadSeventh);
        }
        table.append(seventhRow); 

        if(state.selectedList.length === 0) {
            let table = $('.housing-table');
            table.empty();
        }
        state.selectedList= [];
        
        let list = $('div.list ul');
        let checkbox = $('.filter');
        list.find('li').hide(); 
        $('h5').hide();
        checkbox.hide();

        let addCartButton = $('.add-cart');
        for(let i = 0; i < addCartButton.length; i++) {
            addCartButton[i].disabled = true;
        }
        let comparisonButton = $('#comparison');
        comparisonButton.hide();

        let clearButton = $('#clear');
        //clearButton.attr('style', 'display:none;')
        clearButton.show();
    });

    $('.comparison-button').find('#clear').on('click', function() {
        let addCartButton = $('.add-cart');
        for(let i = 0; i < addCartButton.length; i++) {
            addCartButton[i].disabled = false;
        }
        let table = $('.housing-table');
        table.html('');
        let checkbox = $('.filter');
        checkbox.show();
        $('h5').show();
        let comparisonButton = $('#comparison');
        comparisonButton.show();
        let clearButton = $('#clear');
        clearButton.hide();
    });
}