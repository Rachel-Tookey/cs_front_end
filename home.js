document.addEventListener('DOMContentLoaded', () => {

    let isClickedButtonOne = false; 

    const firstInstruction = document.getElementById('click1');

    firstInstruction.addEventListener('click', function test() {


        if (isClickedButtonOne) {
            return; 
        }

        isClickedButtonOne = true; 

        const hiddenElements = document.getElementsByClassName('hidden1');
        const textList = ["cambridge: law degree; first class", "prior career: screenwriter", "hobbies: being autistic"];
        const idList = ["col1Type1", "col1Type2", "col1Type3"];

        let i = 0;
        let j = 0; 

        hiddenElements[i].style.visibility = "visible";
        let text = textList[i];
        let emptySpan = document.getElementById(idList[i]);

        typeWriter();

        function typeWriter() {

            if (j < text.length) {
                emptySpan.innerHTML += text.charAt(j);
                j++;
                setTimeout(typeWriter, 50);
            } else if (i < 3) {
                i++; 
                j = 0; 
                hiddenElements[i].style.visibility = "visible";
                text = textList[i];
                emptySpan = document.getElementById(idList[i]);
                setTimeout(typeWriter, 50);
            }
        }

        
    })


});