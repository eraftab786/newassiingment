// Add Segment Form Pop-up && table form
function openform() {

    let customanim = document.getElementById("addsegform");
    customanim.style.display = "block";
}


function opentable() {
    let customanim = document.getElementById("addtable");
    customanim.style.display = "block";
}

function closeform() {
    document.getElementById("addsegform").style.display = "none";
    document.getElementById("addtable").style.display = "none";
}


//setting button state to disabled

let input = document.querySelector(".input-data");
let button = document.querySelector(".save-btn");
button.disabled = true;

input.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector(".input-data").value === "") {
        button.disabled = true; //button remains disabled
    } else {
        button.disabled = false; //button is enabled
        button.style.backgroundColor = "#334BFA";
    }
}

//store segment data in array

{

function addsegment() {

    let segmentName = [];
    let segmentEmoji = [];
    let insertlist = document.getElementById("segment-name-list");
    let insertsegmentblock = document.getElementById("main-body");

    let name = document.getElementById("name-segment").value;
    let emoji = document.getElementById("icon-segment").value;


    if (emoji.length < 0) {


        window.alert("Enter A valid Data");


    } else {
        segmentName.push(name);
        localStorage.setItem('names', JSON.stringify(segmentName));
        segmentEmoji.push(emoji);
        localStorage.setItem('emoji', JSON.stringify(segmentEmoji));
        document.getElementById("addsegform").style.display = "none";




    }

    let storedNames = JSON.parse(localStorage.getItem("names"));
    let storedvalue = JSON.parse(localStorage.getItem("emoji"));


    for (i = 0; i <= storedNames.length - 1; i++) {

        let newlisthtml = ` <li><span class="emoji">${storedvalue[i]}</span><span class="segment-name">${storedNames[i]}</span></li>`
        insertlist.innerHTML += newlisthtml;

        let newsegmentblock = ` <div class="segments-section" id="${storedNames[i]}">
                  <h2 class="segment-header">
                     <span class="emoji">${storedvalue[i]}</span> ${storedNames[i]} <i class="fa fa-chevron-down" aria-hidden="true"></i>
                  </h2>
                  <div class="table-wrapper">
                     <div class="table-list" id="segment1">
                        <div class="table-card">
                           <div style="border-color: red;">
                              &#128104;
                              <span class="color-indicator" style="background-color:red;"></span>
                           </div>
                           <p>
                              Newyork-ITeS-11-50
                           </p>
                        </div>

                        <div class="table-card">
                           <div style="border-color: red;">
                              &#128104;
                              <span class="color-indicator" style="background-color:red;"></span>
                           </div>
                           <p>
                              Newyork-ITeS-11-50
                           </p>
                        </div>

                        <div class="table-card">
                           <div style="border-color: red;">
                              &#128104;
                              <span class="color-indicator" style="background-color:red;"></span>
                           </div>
                           <p>
                              Newyork-ITeS-11-50
                           </p>
                        </div>
                     </div>
                     <button class="add-table" onclick="opentable()"><i class="fa fa-plus" aria-hidden="true"></i></button>
                  </div>
               </div>`


        insertsegmentblock.innerHTML += newsegmentblock;


    }

}
}