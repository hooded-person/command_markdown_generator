document.getElementById("checkbox").checked = true;
document.getElementById("darkModePreview").checked = true;
document.getElementById("darkModePage").checked = true;

let blockStatus ="";

document.getElementById("inputValidationToggle").checked = true
let descriptionValid = true;
let commandValid = true
let previewBefore = "";
let before = "";
let Blocktype = "Impulse ";
let condition = "Unconditional ";
let redstone = "Needs Redstone ";
let tickDelay = 0;
let description = "";
let command = "";
let output = "";

console.log("loaded script");


document.getElementById("displayOutput").addEventListener("click", display_output);

function display_output(){
    if (document.getElementById("checkbox").checked == true) {
        console.log("update before: " + true);
        setBefore();
    } else {
        console.log("update before: " + false);
    };
    console.log("\n===================");
    blockStatus = Blocktype + condition + redstone + " | " + tickDelay + " tick delay";
    console.log("blockstatus: " + blockStatus);
    description = document.getElementById("description").value;
    console.log("description: " + description);
    command = document.getElementById("command").value;
    console.log("command: " + command);
    descriptionValidate()
    commandValidate()
    
    if (document.getElementById("inputValidationToggle").checked == true) {
        if (descriptionValid && commandValid) {
            if (description != ""){
                output = before + "\n* **" + blockStatus + "** \n - " + description + " ```" + command + "```";
            } else {
                output = before + "\n* **" + blockStatus + "** ```" + command + "```";
            };
            console.log(output);
            document.getElementById("output").innerHTML = output;
            update_preview();
        } else if (descriptionValid == false && commandValid == false) {
            console.warn("description and command are not valid");
        } else if (descriptionValid == false) {
            console.warn("description is not valid");
        } else if (commandValid == false) {
            console.warn("command is not valid");

        };
    } else {
        console.warn("input validation is disabled")
        if (description != ""){
            output = before + "\n* **" + blockStatus + "** \n - " + description + " ```" + command + "```";
        } else {
            output = before + "\n* **" + blockStatus + "** ```" + command + "```";
        };
        console.log(output);
        document.getElementById("output").innerHTML = output;
        update_preview();
    }
};

document.getElementById("setBefore").addEventListener("click", setBefore);
function setBefore(){
    before = document.getElementById("output").innerHTML;
    previewBefore = previewBefore = document.getElementById("previewBox").childNodes;
    console.log("before changed to " + document.getElementById("output").innerHTML);
};

document.getElementById("impulse").addEventListener("click", toImpulse);
function toImpulse(){
    Blocktype = "Impulse ";
    console.log("blocktype changed to Impulse");
    let blockTypeButtons = document.getElementsByClassName("blocktype");
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver";
    };
    document.getElementById("impulse").style.backgroundColor = "dimgray";
};

document.getElementById("chain").addEventListener("click", toChain);
function toChain(){
    Blocktype = "Chain ";
    console.log("blocktype changed to Chain");
    let blockTypeButtons = document.getElementsByClassName("blocktype");
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver";
    };
    document.getElementById("chain").style.backgroundColor = "dimgray";
};

document.getElementById("repeat").addEventListener("click", toRepeat);
function toRepeat(){
    Blocktype = "Repeating ";
    console.log("blocktype changed to Repeat");
    let blockTypeButtons = document.getElementsByClassName("blocktype");
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver";
    };
    document.getElementById("repeat").style.backgroundColor = "dimgray";
};

document.getElementById("conditional").addEventListener("click", toConditional);
function toConditional(){
    condition = "Conditional ";
    console.log("condition changed to Conditional");
    let blockTypeButtons = document.getElementsByClassName("condition");
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver";
        blockTypeButtons[i].style.color = "gray";
    };
    document.getElementById("conditional").style.backgroundColor = "dimgray";
    document.getElementById("conditional").style.color = "gainsboro";
};

document.getElementById("unconditional").addEventListener("click", toUnconditional);
function toUnconditional(){
    condition = "Unconditional ";
    console.log("condition changed to Unconditional");
    let blockTypeButtons = document.getElementsByClassName("condition");
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver";
        blockTypeButtons[i].style.color = "gray";
    };
    document.getElementById("unconditional").style.backgroundColor = "dimgray";
    document.getElementById("unconditional").style.color = "gainsboro";
};

document.getElementById("alwaysActive").addEventListener("click", toAlwaysActive);
function toAlwaysActive(){
    redstone = "Always Active ";
    console.log("redstone changed to Always Active");
    let blockTypeButtons = document.getElementsByClassName("redstone");
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver";
    };
    document.getElementById("alwaysActive").style.backgroundColor = "dimgray";
};

document.getElementById("needsRedstone").addEventListener("click", toNeedsRedstone);
function toNeedsRedstone(){
    redstone = "Needs Redstone ";
    console.log("redstone changed to Needs Redstone");
    let blockTypeButtons = document.getElementsByClassName("redstone");
    for (let i = 0; i< blockTypeButtons.length; i++) {
        blockTypeButtons[i].style.backgroundColor = "silver";
    };
    document.getElementById("needsRedstone").style.backgroundColor = "dimgray";
};

document.getElementById("darkModePreview").addEventListener("change", darkModePreview);
function darkModePreview() {
    if (document.getElementById("darkModePreview").checked == false) {
        if (confirm("are you sure?\nLight mode might burn your eyes and leave you blind for ever") == true) {
            document.getElementById("previewBox").style.backgroundColor = "#f5f5f5";
            document.getElementById("previewBox").style.color = "black";
            document.getElementById("previewBox").style.border = "3.5px solid #676767";
        };
    } else {
        document.getElementById("previewBox").style.backgroundColor = "#36393f";
        document.getElementById("previewBox").style.color = "white";
        document.getElementById("previewBox").style.border = "3.5px solid #202225";
    };
};

document.getElementById("darkModePage").addEventListener("change", darkModePage);
function darkModePage() {
    let textarea = document.getElementsByTagName("textarea");
    let number = document.querySelectorAll('input[type="number"]')
    if (document.getElementById("darkModePage").checked == false) {
        /*light mode*/
        if (confirm("are you sure?\nLight mode might burn your eyes and leave you blind for ever") == true) {
            document.body.style.backgroundColor = "#ececec";
            document.body.style.color = "black";
            for (let i = 0; i< textarea.length; i++) {
                textarea[i].style.color = "black";
                textarea[i].style.backgroundColor = "#f5f5f5";
                textarea[i].style.border = "4px solid #676767";
            };
            for (let i = 0; i< number.length; i++) {
                number[i].style.color = "black";
                number[i].style.backgroundColor = "#f5f5f5";
                number[i].style.border = "4px solid #676767";
            };
        };
    } else {
        /*dark mode*/
        document.body.style.backgroundColor = "#2f3136";
        document.body.style.color = "white";
        for (let i = 0; i< textarea.length; i++) {
            textarea[i].style.color = "white";
            textarea[i].style.backgroundColor = "#36393f";
            textarea[i].style.border = "4px solid #202225";
        };
        for (let i = 0; i< textarea.length; i++) {
            number[i].style.color = "white";
            number[i].style.backgroundColor = "#36393f";
            number[i].style.border = "4px solid #202225";
        };
    };
};

function updateIMG() {
    console.log("updated images");
    document.querySelector("#impulse img").src = "images/" + condition.replace(" ", "") + "_Impulse_Command_Block.gif";
    document.querySelector("#chain img").src = "images/" + condition.replace(" ", "") + "_Chain_Command_Block.gif";
    document.querySelector("#repeat img").src = "images/" + condition.replace(" ", "") + "_Repeating_Command_Block.gif";

    document.querySelector("#conditional img").src = "images/Conditional_" + Blocktype.replace(" ", "") + "_Command_Block.gif";
    document.querySelector("#unconditional img").src = "images/Unconditional_" + Blocktype.replace(" ", "") + "_Command_Block.gif";
};
console.log(document.getElementsByTagName("button"));
let ButtonElements = document.getElementsByTagName("button");
for (let i = 0; i< ButtonElements.length; i++) {
    ButtonElements[i].addEventListener("click", updateIMG);
}

function update_preview() {
    let parsed = output;
    console.log(parsed);
    parsed = parsed.replace(/\* \*\*(.*?)\*\* /g, '<ul><li><b>$1</b></li></ul>');
    parsed = parsed.replace(/```(.*?)```/g, '\n<p style="margin-left: 20px;"><code>$1</code></p>');
    parsed = parsed.replace(/\- (.*?)\n/g, '<ul><ul><li>$1</li></ul></ul>');
    console.log(parsed);

    let previewOutput = parsed;
    console.log(output);
    document.getElementById("previewBox").innerHTML = previewOutput;
};

document.getElementById("description").addEventListener("focusout", descriptionValidate);
function descriptionValidate() {
    if (document.getElementById("inputValidationToggle").checked == true) {
        descriptionValid = true;
        let descriptionBox = document.getElementById("description").value;
        if (descriptionBox == "") {
            document.getElementById("description_error").innerHTML = '<span style="color: orange;">if the description is empty, it will be removed</span>';
        } else if (descriptionBox.includes("*") == true) {
            document.getElementById("description_error").innerHTML = '<span style="color: red;">the description may not contain the special characters *, _, `, > or ~ because these conflict with the markdown</span>';
            descriptionValid = false;
        } else if (descriptionBox.includes("_") == true) {
            document.getElementById("description_error").innerHTML = '<span style="color: red;">the description may not contain the special characters *, _, `, > or ~ because these conflict with the markdown</span>';
            descriptionValid = false;
        } else if (descriptionBox.includes("`") == true) {
            document.getElementById("description_error").innerHTML = '<span style="color: red;">the description may not contain the special characters *, _, `, > or ~ because these conflict with the markdown</span>';
            descriptionValid = false;
        } else if (descriptionBox.includes(">") == true) {
            document.getElementById("description_error").innerHTML = '<span style="color: red;">the description may not contain the special characters *, _, `, > or ~ because these conflict with the markdown</span>';
            descriptionValid = false;
        } else if (descriptionBox.includes("~") == true) {
            document.getElementById("description_error").innerHTML = '<span style="color: red;">the description may not contain the special characters *, _, `, > or ~ because these conflict with the markdown</span>';
            descriptionValid = false;
        } else {
            document.getElementById("description_error").innerHTML = '';
            descriptionValid = true;
        };
    } else {
        console.warn("Input validation for description is disabled")
        document.getElementById("description_error").innerHTML = '<span style="color: gold;">Input validation for description is disabled</span>';
    }
};

document.getElementById("command").addEventListener("focusout", commandValidate);
function commandValidate() {
    if (document.getElementById("inputValidationToggle").checked == true) {
        commandValid = true;
        let commandBox = document.getElementById("command").value;
        if (commandBox == "") {
            document.getElementById("command_error").innerHTML = '<span style="color: red;">The command may not be empty</span>';
            commandValid = false
        } else if (commandBox[0] != "/") {
            document.getElementById("command_error").innerHTML = '<span style="color: orange;">It is advised to start a command with a /<br>This is not required</span>';
        }  else {
            document.getElementById("command_error").innerHTML = '';
            commandValid = true;
        };
    } else {
        console.warn("Input validation for command is disabled")
        document.getElementById("command_error").innerHTML = '<span style="color: gold;">Input validation for command is disabled</span>';
    }
};


document.getElementById("tickDelay").addEventListener("change", tickDelayValidate);
function tickDelayValidate() {
    if (document.getElementById("tickDelay").value < 0) {
        document.getElementById("tickDelay").value = 0;
        document.getElementById("tickDelay_error").innerHTML = '<span style="color: orange;">Tick delay can not be negative</span>';
    } else { 
        document.getElementById("tickDelay_error").innerHTML = '';
    };
    tickDelay = document.getElementById("tickDelay").value
};



/*function isMobile() {
    var check = false;
    (function(a){
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
        check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
if (isMobile() == true) {
    let body = document.getElementById("body")
    body.classList.add("zoom")
    alert("welcome mobile user")
} else {
    alert("welcome pc user")
}*/
