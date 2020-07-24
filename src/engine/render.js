function renderSiteHTML() {
    let string =  
    `<div class="hub">
        <div class="innerhub top">
        top
        </div>
        <div class="innerhub middle">
        middle
        </div>
        <div class="innerhub bottom">
        bottom
        </div>
    </div>`;
    
    $('#root').append(string);
    
}


$(function(){ // .ready() callback, is only executed when the DOM is fully loaded
    renderSiteHTML();
});