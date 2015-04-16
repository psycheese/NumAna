/**
 * Created by Yuntian Chai on 15-3-30.
 */

/*TODO: Add unit test for each function*/

var test = {};

test.dichotomie = function()
{
    var fx = function(x){
        return x*x*x+x-1;
    };

    log(eqsolve.dic(fx,0,1,0.00005),true);
    log(eqsolve.dic(fx,0,1,0.00005,10),true);
    log(eqsolve.dic(fx,0,1,1E-10,100),true);
};

//test.dichotomie();

test.FPI = function()
{
    var fx1 = function(x){
        return 1.0-x*x*x;
    }; // Failed to converge，either at x0 = 0 or x0 = 1.


    var fx2 = function(x){
        return Math.pow(1.0-x,1/3.0);
    }; // 0.5 is a good start point but 0 is not.

    log(eqsolve.fpi(fx2,0.5,20),true);

};

test.Newton = function()
{
    var fx = function(x){
        return x*x*x + x -1.0;
    };
    var f1x = function(x){
        return 3.0*x*x + 1.0;
    };

    Exec(function(){
        return eqsolve.nwt(fx,f1x,0.7,20);
    });

};

test.Secant = function()
{
    var fx = function(x){
        return x*x*x -2*x*x + 1.5*x;
    };

    Exec(function(){
            for(var i = 0;i<50000;i++){eqsolve.sec(fx,-1.0,1.0,i);}
        }
    )

};


test.ndarray = function()
{
    var m = new ndarray([2,4,5,5]);
    log(m);

};

//test.Secant();
// to compare two ways of storage 1d and 2d array. which get the element faster.
test.matrixStorage = function(r,c,iT)
{

    r = r||3;
    c = c||3;
    iT = iT||1E4;
    var a1 =[];// 1d
    var a2 =[];// 2d


    for(var m=0;m<r;m++){
        a2.push([]);
        for(var n = 0;n<c;n++)
        {
            var e = Math.random();
            // make sure the store the same elements
            a1.push(e);
            a2[m].push(e);
        }
    }

    var m1 = new matrix(a1,3,3);
    var m2 = new matrix2d(a2);

    var t1 = Exec(function(){
      for(var i = 0;i<iT;i++)
      {
          for(m=0;m<r;m++){
              for(n = 0;n<c;n++)
              {
                  var k = m1.ij(m,n);
                  //console.log(k);
              }
          }

      }
    }).time;

    var t2 = Exec(function(){

        for(var i = 0;i<iT;i++)
        {

            for(m=0;m<r;m++){
                for(n = 0;n<c;n++)
                {
                    var k = m2.ij(m,n);
                    //console.log(k);
                }
            }
        }
    }).time;

    log("row:"+r+", column:"+c+", iters:"+iT+", time 1d:"+t1+", time 2d:"+t2,true);
};


//test.ndarray();

test.matrixStorage(3,3);
test.matrixStorage(10,10);
test.matrixStorage(200,200);
test.matrixStorage(10,200);
test.matrixStorage(200,10);

/* tested on 2015-04-16
* row:3, column:3, iters:10000, time 1d:2, time 2d:1
* row:10, column:10, iters:10000, time 1d:13, time 2d:12
* row:200, column:200, iters:10000, time 1d:3900, time 2d:399
* row:10, column:200, iters:10000, time 1d:190, time 2d:198
* row:200, column:10, iters:10000, time 1d:193, time 2d:202
* */
//test.matrixStorage(1000,1000); too afraid to test this, cannot wait.