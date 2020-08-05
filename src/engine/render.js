function renderSiteHTML() {
    let string =  
    `<header>PaperWait Logo Here</header>
    <div class="container">
        <button>Monthly Drawing Challenges</button>
        <button>Lesson Prompts</button>
        <button></button>
        <button></button>
    </div>
    <div class="hub">
        <div class="innerhub top">
        top
        </div>
        <div class="innerhub app middle">
        middle
        </div>
        <div class="innerhub bottom">
        bottom
        </div>
    </div>
    <footer>link to my site</footer>`;
    
    $('#root').append(string);
    
}


$(function(){ // .ready() callback, is only executed when the DOM is fully loaded
    renderSiteHTML();
});