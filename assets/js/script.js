document.addEventListener('DOMContentLoaded', () => {

    const cols = document.querySelectorAll(".col1, .col2, .col3, .col4, .col5, .col6, .col7");
    const btnClear = document.getElementById("clear")
    
    function play() {
        cols.forEach(col => {
            col.addEventListener("click", () => {
                col.style.backgroundColor = "red";
            });
        });
        
    }

    function clear(){
        btnClear.addEventListener("click", () => {
            cols.forEach(col => {
                col.style.backgroundColor = "white";
            });
        });
    }
    
    play();
    clear();

});