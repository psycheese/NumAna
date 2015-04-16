/**
 * Created by CLay Chai on 15-4-16.
 */

/*
var hash = function(c){
    return function(i,j){
        return i*c+j;
    };
};
*/


/*
* constructor of matrix
* @param - d the data source of matrix
* @param -r row number
* @param -c column number
* */
var matrix = function(d,r,c)
{
    this.r = r||3;
    this.c = c||3;
    this.d = d||new Array(r*c);

    // length check
    if(d.length!=r*c){
        console.log("element number and row*column does not match!");
    }

    // get element at row i and column j
    this.ij = function(i,j){return d[i*c+j];};
};


/* [warning]: EXPERIMENTAL!
 * constructor of matrix using 2d array
 * @param - d the data source of matrix
 * */

var matrix2d = function(d)
{
    this.d = d||[[0,0,0],[0,0,0],[0,0,0]];
    this.r = d.length;
    this.c = d[0].length;


    // length check
    if(d.length!=this.r*this.c){
        console.log("element number and row*column does not match!");
    }

    // get element at row i and column j
    this.ij = function(i,j){return d[i][j];};
};



var mul = function(m,n){
  if(m.c != n.r) {
      console.log("row and column does not match!");
  }else{
    //TODO Calculation implementation
  }


};
