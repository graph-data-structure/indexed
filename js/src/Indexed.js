/**
 * Wrapper allowing
 * direct index reference for vertices (like in an adjacency matrix).
 *
 */

const Indexed = function ( G , V , indices ) {

	this.G = G ;
	this.V = V ;
	this.indices = indices ;

} ;

Indexed.prototype.vadd = function ( ) {

	const ref = this.G.vadd( ) ;

	this.indices.set( ref , this.V.length ) ;

	this.V.push( ref ) ;

	return ref ;

} ;

Indexed.prototype.vdel = function ( v ) {

	// id to delete
	const i = this.indices.get( v ) ;

	const len = this.V.length ;

	// last id
	const j = len - 1 ;

	if ( i < j ) {

		// swap deleted vertex
		// with last vertex

		// move vertex reference
		this.V[i] = this.V[j] ;

		// change vertex id
		this.indices.set( this.V[i] , i ) ;

	}

	// remove last vertex
	this.V.splice( j , 1 ) ;

	// remove vertex from underlying data structure
	this.G.vdel( v ) ;

} ;

Indexed.prototype.eadd = function ( u , v ) {

	return this.G.eadd( u , v ) ;

} ;

Indexed.prototype.edel = function ( e ) {

	return this.G.edel( e ) ;

} ;


Indexed.prototype.vitr = function ( ) {

	return this.G.vitr( ) ;

} ;

Indexed.prototype.iitr = function ( v ) {

	return this.G.iitr( v ) ;

} ;

Indexed.prototype.nitr = function ( w ) {

	return this.G.nitr( w ) ;

} ;

Indexed.prototype.eitr = function ( ) {

	return this.G.eitr( ) ;

} ;

Indexed.prototype.edges = function ( ) {

	return this.G.edges( ) ;

} ;

Indexed.prototype.incident = function ( v ) {

	return this.G.incident( v ) ;

} ;

Indexed.prototype.endpoints = function ( e ) {

	return this.G.endpoints( e ) ;

} ;

exports.Indexed = Indexed ;
