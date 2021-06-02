
// mock data within application
// This section will be independent as a JSON file
    projectInfo = [
        {projectName:"Goal Master",description:"A web app written with pure JavaScript and HTML5 DOM. \
        Utilized Audio API, Storage API and JSON API. It Solved re-sequence problem, sorting problem and \
        synchronization problem."},
        {projectName:"Penetration Testing Hub",description:"A forum written in C#, ASP.Net Core MVC \
        dedicated to the penetration testers and cybersecurity enthusiasts. \
        It hosted on Amazon AWS VPS Linux machine with Nginx and MySQL database"},
        {projectName:"Symantec DCS Excel VBA Report Facilitator (GIF)",description:"A web app written with pure\
        JavaScript and HTML5 DOM and \
        utilized Audio API, Storage API and JSON API. It Solved re-sequence problem, sorting problem and \
        synchronization problem"},
    ];

    imgPathArray = ["goal_master_Demo.png", "PTH_Demo.png", "ExcelVBA_Macro_Demo.gif"];
    imgWidthHeightArray = [
        {Width:"800", Height:"560"},
        {Width:"950", Height:"500"},
        {Width:"1050", Height:"560"}
    ]
//
//


let currentCard;

function cardInitialize(){
    currentCard = 0;

    //show the first card
    document.querySelectorAll('.container-structure-item2 div').forEach(element=>{
        element.style.display = "none";
        if(element === document.querySelector(".card" + currentCard)){
            element.style.display = "";
        }
    });

    //hide the left button
    document.querySelector('#button-left').style.display = 'none';
}

function createCards(containerDiv){
    for(let i = 0; i < imgPathArray.length; i++){
        let cardDiv = document.createElement('div');
        let cardClassDiv = document.createAttribute('class');
        cardClassDiv.value = 'card' + i;
        cardDiv.setAttributeNode(cardClassDiv);
    
        let h2 = document.createElement('h2');
        let h2Div = document.createAttribute('class');
        h2Div.value = 'projectTitle';
        h2.setAttributeNode(h2Div);
        h2.innerHTML = projectInfo[i]["projectName"];
    
        let img = document.createElement('img');
        let imgSrc = document.createAttribute('src');
        let imgWidth = document.createAttribute('width');
        let imgHeight = document.createAttribute('height');
        imgSrc.value = 'img/index/' + imgPathArray[i];
        imgWidth.value = imgWidthHeightArray[i]["Width"];
        imgHeight.value = imgWidthHeightArray[i]["Height"];
        img.setAttributeNode(imgSrc);
        img.setAttributeNode(imgWidth);
        img.setAttributeNode(imgHeight);

    
        let paraDescription = document.createElement('p');
        let paraDescriptionId = document.createAttribute('class');
        paraDescriptionId.value = 'card-description';
        paraDescription.setAttributeNode(paraDescriptionId);
        paraDescription.innerHTML = projectInfo[i]["description"];

    
        cardDiv.appendChild(h2);
        cardDiv.appendChild(img);
        cardDiv.appendChild(paraDescription);
    
        containerDiv.appendChild(cardDiv);
    }
}


function moveCard(e){
    if(e.target.id == 'button-left' && currentCard >= 0){
        currentCard--;
        if(currentCard == 0) {
            document.querySelector('#button-left').style.display = 'none';
        }
        if(currentCard == 1) {
            document.querySelector('#button-right').style.display = 'block';
        }
        document.querySelectorAll('.container-structure-item2 div').forEach(element=>{
            element.style.display = "none";
            if(element === document.querySelector(".card" + currentCard)){
                element.style.display = "";
            }
        });
    }else if (e.target.id == 'button-right' && currentCard < 2){
        currentCard++;
        if(currentCard == 2) {
            document.querySelector('#button-right').style.display = 'none';
        }
        if(currentCard == 1) {
            document.querySelector('#button-left').style.display = 'block';
        }
        document.querySelectorAll('.container-structure-item2 div').forEach(element=>{
            element.style.display = "none";
            if(element === document.querySelector(".card" + currentCard)){
                element.style.display = "";
            }
        });
    }
}

function initialize(){
    let containerDiv = document.querySelector('.container-gallery');
    createCards(containerDiv);
    cardInitialize();
    //button functionality
    document.querySelector('#button-left').addEventListener('click', moveCard);
    document.querySelector('#button-right').addEventListener('click', moveCard);
    document.querySelector('#button-left').addEventListener('mouseover', e=>e.target.style.backgroundColor = "rgb(255, 188, 66)");
    document.querySelector('#button-right').addEventListener('mouseover', e=>e.target.style.backgroundColor = "rgb(255, 188, 66)");
    document.querySelector('#button-left').addEventListener('mouseleave', e=>e.target.style.backgroundColor = "");
    document.querySelector('#button-right').addEventListener('mouseleave', e=>e.target.style.backgroundColor = "");
}

initialize();