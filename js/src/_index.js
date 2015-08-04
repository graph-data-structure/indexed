
const index = function ( Graph ) {

	return function ( ) {

		return new Indexed( new Graph( ) , [ ] , new WeakMap( ) ) ;

	} ;

} ;

exports.index = index ;
