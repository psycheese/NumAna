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

test.ndarray();