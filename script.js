document.getElementById("checkbox").checked = true
document.getElementById("darkModePreview").checked = true
document.getElementById("darkModePage").checked = true

let blockStatus ="";

let before = "";
let Blocktype = "Impulse";
let condition = "Unconditional";
let redstone = "Needs Redstone ";
let description = "";
let command = "";

console.log("loaded script");


document.getElementById("displayOutput").addEventListener("click", display_output);

function display_output(){
    if (document.getElementById("checkbox").checked == true) {
        console.log("update before: " + true)
        setBefore()
    } else {
        console.log("update before: " + false)
    }
    console.log("\n===================")
    blockStatus = Blocktype + condition + redstone;
    console.log("blockstatus: " + blockStatus);
    description = document.getElementById("description").value;
    console.log("description: " + description)
    command = document.getElementById("command").value;
    console.log("command: " + command)
 
 
    let output = before + "\n* **" + blockStatus + "** \n - " + description + "```" + command + "```";
    console.log(output);
    document.getElementById("output").innerHTML = output;
};

document.getElementById("setBefore").addEventListener("click", setBefore);
function setBefore(){
    before = document.getElementById("output").innerHTML;
    console.log("before changed to " + document.getElementById("output").innerHTML);
};

document.getElementById("impulse").addEventListener("click", toImpulse);
function toImpulse(){
    Blocktype = "Impulse ";
    console.log("blocktype changed to Impulse");
    let blockTypeButtons = document.getElementsByClassName("blocktype")
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver"
    }
    document.getElementById("impulse").style.backgroundColor = "dimgray"
};

document.getElementById("chain").addEventListener("click", toChain);
function toChain(){
    Blocktype = "Chain ";
    console.log("blocktype changed to Chain");
    let blockTypeButtons = document.getElementsByClassName("blocktype")
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver"
    }
    document.getElementById("chain").style.backgroundColor = "dimgray"
};

document.getElementById("repeat").addEventListener("click", toRepeat);
function toRepeat(){
    Blocktype = "Repeating ";
    console.log("blocktype changed to Repeat");
    let blockTypeButtons = document.getElementsByClassName("blocktype")
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver"
    }
    document.getElementById("repeat").style.backgroundColor = "dimgray"
};

document.getElementById("conditional").addEventListener("click", toConditional);
function toConditional(){
    condition = "Conditional ";
    console.log("condition changed to Conditional");
    let blockTypeButtons = document.getElementsByClassName("condition")
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver"
        blockTypeButtons[i].style.color = "gray"
    }
    document.getElementById("conditional").style.backgroundColor = "dimgray"
    document.getElementById("conditional").style.color = "gainsboro"
};

document.getElementById("unconditional").addEventListener("click", toUnconditional);
function toUnconditional(){
    condition = "Unconditional ";
    console.log("condition changed to Unconditional");
    let blockTypeButtons = document.getElementsByClassName("condition")
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver"
        blockTypeButtons[i].style.color = "gray"
    }
    document.getElementById("unconditional").style.backgroundColor = "dimgray"
    document.getElementById("unconditional").style.color = "gainsboro"
};

document.getElementById("alwaysActive").addEventListener("click", toAlwaysActive);
function toAlwaysActive(){
    redstone = "Always Active ";
    console.log("redstone changed to Always Active");
    let blockTypeButtons = document.getElementsByClassName("redstone")
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver"
    }
    document.getElementById("alwaysActive").style.backgroundColor = "dimgray"
};

document.getElementById("needsRedstone").addEventListener("click", toNeedsRedstone);
function toNeedsRedstone(){
    redstone = "Needs Redstone ";
    console.log("redstone changed to Needs Redstone");
    let blockTypeButtons = document.getElementsByClassName("redstone")
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver"
    }
    document.getElementById("needsRedstone").style.backgroundColor = "dimgray"
};

document.getElementById("darkModePreview").addEventListener("change", darkModePreview)
function darkModePreview() {
    if (document.getElementById("darkModePreview").checked == false) {
        if (confirm("are you sure?\nLight mode might burn your eyes and leave you blind for ever") == true) {
            document.getElementById("previewBox").style.backgroundColor = "#f5f5f5"
            document.getElementById("previewBox").style.color = "black"
            document.getElementById("previewBox").style.border = "3.5px solid #676767"
        }
    } else {
        document.getElementById("previewBox").style.backgroundColor = "#36393f"
        document.getElementById("previewBox").style.color = "white"
        document.getElementById("previewBox").style.border = "3.5px solid #202225"
    }
}

document.getElementById("darkModePage").addEventListener("change", darkModePage)
function darkModePage() {
    let textarea = document.getElementsByTagName("textarea")
    if (document.getElementById("darkModePage").checked == false) {
        if (confirm("are you sure?\nLight mode might burn your eyes and leave you blind for ever") == true) {
            document.body.style.backgroundColor = "#ececec"
            document.body.style.color = "black"
            for (let i = 0; i< textarea.length; i++) {
                textarea[i].style.color = "black"
                textarea[i].style.backgroundColor = "#f5f5f5"
                textarea[i].style.border = "4px solid #676767"
            }
        }
    } else {
        document.body.style.backgroundColor = "#2f3136"
        document.body.style.color = "white"
        for (let i = 0; i< textarea.length; i++) {
            textarea[i].style.color = "white"
            textarea[i].style.backgroundColor = "#36393f"
            textarea[i].style.border = "4px solid #202225"
        }
    }
}

function updateIMG() {
    console.log("updated images")
    document.querySelector("#impulse img").src = "images/" + condition.replace(" ", "") + "_Impulse_Command_Block.gif"
    document.querySelector("#chain img").src = "images/" + condition.replace(" ", "") + "_Chain_Command_Block.gif"
    document.querySelector("#repeat img").src = "images/" + condition.replace(" ", "") + "_Repeating_Command_Block.gif"

    document.querySelector("#conditional img").src = "images/Conditional_" + Blocktype.replace(" ", "") + "_Command_Block.gif"
    document.querySelector("#unconditional img").src = "images/Unconditional_" + Blocktype.replace(" ", "") + "_Command_Block.gif"
    console.log("'" + Blocktype.replace(" ", "") + "'")
    console.log("'" + Blocktype)
}
console.log(document.getElementsByTagName("button"))
let ButtonElements = document.getElementsByTagName("button")
for (let i = 0; i< ButtonElements.length; i++) {
    ButtonElements[i].addEventListener("click", updateIMG)
}
