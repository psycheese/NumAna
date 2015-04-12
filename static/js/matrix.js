// Matrix constructor
// @param args - array of dimensions e.g. [2,3,3]
var matrix = function(args){

    this.d = args; // dimensions
    this.ia = []; // index arrays

    var i= 0,j=0;
    var L=1;
    for(i=0;i<args.length;i++)
    {
        L *= args[i]; // length calculation
    }

    // initialize the index array
    var k=1;
    for(i=0;i<args.length;i++)
    {

        this.ia.push([]);
        k *= args[i];
        for(j=0;j<L;j++)
        {
           this.ia[i].push(parseInt(j/k));
        }
    }


};

matrix.prototype.item = function(d){

};
