// ndarray constructor
// @param args - array of dimensions e.g. [2,3,3]
var ndarray = function(args){

    this.d = args; // dimensions
    this.ia = new Array(args.length); // index arrays

    var i= 0,j=0;
    var L= 1,M=args.length;
    var X=new Array(args.length);
    for(i=0;i<M;i++) {
        L *= args[i]; // length calculation
        X[i]=0;
        this.ia[i]=[];
    }

    // initialize the index array
    var pt= 0,n=0;
    for(n=0;n<L;n++)
    {
        for(i=0;i<M;i++)
            this.ia[i].push(X[i]);  //将第n+1种排列赋值给ia
        while(X[pt]>=this.d[pt]-1){ //进位
            X[pt]=0;
            pt++;
        }
        X[pt]++;  //X的值增加1
        pt=0; //归位
    }

};

ndarray.prototype.item = function(d){

};

//var m=new ndarray([5,5,6,11]);
//console.log("ndarray:",m);
