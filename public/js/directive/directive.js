/**
 * Created by intelligrape on 5/3/15.
 */
angular.module('inquiry').directive('hoverMenu',function(){
    return function(scope,element,attrs){

        cbpHorizontalMenu.init();
    }
})





var cbpHorizontalMenu = (function() {

    var $listItems = $( '#cbp-hrmenu > ul > li' ),
        $menuItems = $listItems.children( 'a' ),
        $body = $( 'body' ),
        current = -1;

    function init() {
        console.log('inti method called',$listItems.length);
        $menuItems.on( 'mouseover', open );

        $listItems.on( 'click', function( event ) { event.stopPropagation(); } );
    }

    function open( event ) {

        if( current !== -1 ) {
            $listItems.eq( current ).removeClass( 'cbp-hropen' );
        }

        var $item = $( event.currentTarget ).parent( 'li' ),
            idx = $item.index();

        if( current === idx ) {
            $item.removeClass( 'cbp-hropen' );
            current = -1;
        }
        else {
            $item.addClass( 'cbp-hropen' );
            current = idx;
            $body.off( 'click' ).on( 'click', close );
        }

        return false;

    }

    function close( event ) {
        $listItems.eq( current ).removeClass( 'cbp-hropen' );
        current = -1;
    }

    return { init : init };

})();
