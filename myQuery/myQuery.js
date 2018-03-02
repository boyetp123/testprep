var myQuery = (function(){

} );


function myQuery( s1 ) {
    var elem = null;
    var that = {
        hide: function() {
            elem.style.display = "none";
            return that;
        },
        show: function() {
            elem.style.display = "";            
            elem.style.visibility = "";            
            return that;
        },
        find: function(s2) {
            elem = document.querySelector(s1);
            return that;
        }
    }
    if (s1) {
        elem.find(s1);        
    }
    return that;
}