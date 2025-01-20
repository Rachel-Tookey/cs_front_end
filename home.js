document.addEventListener('DOMContentLoaded', () => {

    const firstInstruction = document.getElementById('click1');
    const secondInstruction = document.getElementById('click2');
    const thirdInstruction = document.getElementById('click3');


    const firstTextBox = ["cambridge: law degree; first class",
        "prior career: screenwriter",
        "hobbies: being autistic",
        "Click on item above to hear more"
    ];


    const secondTextBox = ["🐍🐍 Pythonista 🐍🐍" , "I'm rava for java", "C# Northcoders represent", "Click on item above to hear more" ];


    firstInstruction.addEventListener('click', function () { addText(firstTextBox, "firstBox"); }, {once: true}); 

    secondInstruction.addEventListener('click', function () { addText(secondTextBox, "secondBox") }, { once: true });

    thirdInstruction.addEventListener('click', function () { addUserInput() }, { once: true });


    function addUserInput() {

        const getDiv = document.getElementById("thirdBox");

        const newP = document.createElement("p");

        newP.textContent += " > Enter your email";

        getDiv.appendChild(newP); 

        const form = document.createElement("form");

        getDiv.appendChild(form);

        const input = document.createElement("input");

        input.type = "text";
        input.style.background = "black"; 
        form.appendChild(input); 
    };


    function addText(textList, divId) {
 
        let i = 0;
        let j = 0; 

        let text = textList[i];

        const getDiv = document.getElementById(divId);

        let currentObj;

        typeWriter();

        function typeWriter() {

            let end = (i === textList.length - 1) ? true : false; 

            if (j === 0 && end === false) {

                currentObj = document.createElement("p");
                currentObj.className = "response highlight";
                getDiv.appendChild(currentObj); 
                currentObj.textContent += text.charAt(j);
                j++;
                setTimeout(typeWriter, 30);

            } else if (j < text.length) {

                currentObj.textContent += text.charAt(j);
                j++;
                setTimeout(typeWriter, 30);

            } else if (i < textList.length - 2) {

                i++;
                j = 0;
                text = textList[i];
                const newBr = document.createElement("br");
                getDiv.appendChild(newBr); 
                setTimeout(typeWriter, 30);

            } else if (i === textList.length - 2) {

                i++; 
                j = 0; 
                text = textList[i];
                const newP = document.createElement("p");
                newP.textContent += " > ";
                const newS = document.createElement("span");
                newS.className = "highlight";
                newP.appendChild(newS);
                getDiv.appendChild(newP);
                currentObj = newS; 
                setTimeout(typeWriter, 30); 
            }
        }

        
    }





});