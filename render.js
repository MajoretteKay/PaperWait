function renderSiteHTML() {
    let string =  
    `<div class="container">
        <div class="top">
        top
        </div>
        <div class="middle">
        middle
        </div>
        <div class="bottom">
        bottom
        </div>
    </div>`;
    
    $('#root').append(string);
    
}


$(function(){ // .ready() callback, is only executed when the DOM is fully loaded
    renderSiteHTML();
});