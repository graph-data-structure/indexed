
var dll = require( "aureooms-js-dll" ) ;

var spec = require( "aureooms-js-graph-spec" ) ;
var list = require( "aureooms-js-adjacency-list" ) ;
var matrix = require( "aureooms-js-adjacency-matrix" ) ;

var index = graphindexed.index ;

spec.undirected1( "Indexed List" , index( list.List( dll.DoublyLinkedList ) ) ) ;
spec.undirected2( "Indexed List" , index( list.List( dll.DoublyLinkedList ) ) ) ;

spec.undirected1( "Indexed Matrix" , index( matrix.Matrix ) ) ;
spec.undirected2( "Indexed Matrix" , index( matrix.Matrix ) ) ;
