document.addEventListener('DOMContentLoaded', () => {

    let isButtonOneClicked = false; 

    const firstInstruction = document.getElementById('click1');
    const firstBoxText = ["cambridge: law degree; first class", "prior career: screenwriter", "hobbies: being autistic", " > Click on item above to hear more", " > "];
    const firstBoxId = ["col1Type1", "col1Type2", "col1Type3", "col1Type4", "col1Type5"];

    firstInstruction.addEventListener('click', function () { addText(isButtonOneClicked, firstBoxText, firstBoxId); }); 

    function addText(buttonBool, textList, idList) {

        if (buttonBool) {
            return; 
        }

        buttonBool = true; 

 
        let i = 0;
        let j = 0; 

        let text = textList[i];
        let emptySpan = document.getElementById(idList[i]);

        typeWriter();

        function typeWriter() {

            if (j < text.length) {
                emptySpan.innerHTML += text.charAt(j);
                j++;
                setTimeout(typeWriter, 50);
            } else if (i < 5) {
                i++; 
                j = 0; 
                text = textList[i];
                emptySpan = document.getElementById(idList[i]);
                setTimeout(typeWriter, 50);
            }
        }

        
    }


});