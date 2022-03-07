/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

    class ContentItem{

        uniqueid;
        aname;
        descri;
        genere;

        constructor(id , name , description , category) {
            this.uniqueid = id;
            this.aname=name;
            this.descri=description;
            this.genere=category;
        }
        toString(){
           return display.uniqueid + display.aname + display.descri + display.genere;
        }

    }

    const display = new ContentItem(00,"james bond","special agent known as 008","spy movie");
    const adisplay = new ContentItem(01,"akshay kumar","he is known as comdey king","comedy movie");
    const bdisplay = new ContentItem(02,"katrina kaif","well known for actions and fight","action movie");
    const cdisplay = new ContentItem(03,"annabelle","it was a doll","horror movie");
    const ddisplay = new ContentItem(04,"cinderella","lost a shoe and became princess","action movie");


$("#content-item-list").wrap( "<div class='content-item-wrap' id='div#content-item-00'></div>" ).append(`<div>
<h2>${display.aname}</h2>
<p>${display.descri}</p>
<div>${display.genere}</div>
</div>`);
    


$("#content-item-list").wrap( "<div class='content-item-wrapper' id='div#content-item-01'></div>" ).append(`<div>
<h2>${adisplay.aname}</h2>
<p>${adisplay.descri}</p>
<div>${adisplay.genere}</div>
</div>`);

$("#content-item-list").wrap( "<div class='content-item-wrapper' id='div#content-item-02'></div>" ).append(`<div>
<h2>${bdisplay.aname}</h2>
<p>${bdisplay.descri}</p>
<div>${bdisplay.genere}</div>
</div>`);

$("#content-item-list").wrap( "<div class='content-item-wrapper' id='div#content-item-03'></div>" ).append(`<div>
<h2>${cdisplay.aname}</h2>
<p>${cdisplay.descri}</p>
<div>${cdisplay.genere}</div>
</div>`);

$("#content-item-list").wrap( "<div class='content-item-wrapper' id='div#content-item-04'></div>" ).append(`<div>
<h2>${ddisplay.aname}</h2>
<p>${ddisplay.descri}</p>
<div>${ddisplay.genere}</div>
</div>`);

//$(".content-item-wrapper").css("border" ,"3px inset lightcoral").css("border-radius", "2%").css("padding", "10px").css("text-algin", "center").css("width" ,"auto").css("margin","3px").css("height","70%");

let array=[
    {
        uniqueid:10,
        aname:"akshay kumar",
        descri:"herai pheri was the funniest movie he had work",
        genere:"comedy movie",
    },
    {
        uniqueid:11,
        aname:"akshay kumar",
        descri:"In shooryavanshi he was an cop",
        genere:"action movie",
    },
    {
        uniqueid:12,
        aname:"akshay kumar",
        descri:"In kesari movie he was an soldier when country was ruled by england",
        genere:"patriotic movie",
    },
    {
        uniqueid:13,
        aname:"akshay kumar",
        descri:"In mission managl movie he was an scientist based on true event of launching mars orbital mission ",
        genere:"sci-fi movie",
    },
    {
        uniqueid:14,
        aname:"akshay kumar",
        descri:"In OMG movie he played role of lord shree krishna ",
        genere:"fantasy movie",
    },
]

console.log(array);
console.log(Object.getPrototypeOf([10]) === Array.prototype);
});

