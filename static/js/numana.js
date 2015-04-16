/**
 * Created by Yuntian Chai on 15-3-30.
 */

/*
* custom log function
* @param m - log content
* @param t - log either to console or to html document
* */
var log = function(m,t){
    if(!t){console.log(m);}
    else{
        document.write(m+'<br>');
    }
};



/* use dichotomie to solve the equation of one unknown variable x.
 * @param f -f(x)=0 equation expression on the left side
 * @param l -start_guess for x in range [a, b]
 * @param r -start_guess for x in range [a, b]
 * @param t -tolerance for precision
 * @param itl -iterate times
 * @return estimation of x
 */
//
// exp: f(x) = 0
var dichotomie = function(f,l,r,t,it){
    it = it||20;
    if(f(l)*f(r)>=0.0){
        log("please make sure the start value setting is right:f(l)*f(r)<=0");
        return;
    }
    var a = l,b = r,i=0;
    while((b-a)/2.0>t)
    {
        var c = (a+b)/2.0;
        if(f(c)==0.0){return c;}
        if(f(c)*f(a)<0.0){b=c;}
        else{a = c;}
        i++;if(i>it){break;}
    }
    return (a+b)/2.0;
};

/* Fixed Point Iteration
 * @param f - f(x) = x equation expression on the left side
 * @param x0 - start point of x
 * @param n - number of iterations
 * @return estimation of x
 */
var FPI = function(f, x0, n)
{
    var a = x0,i;
    for(i=0;i<n;i++){a = f(a);}
    return a;
};


/* Newton Iteration
 * @param f - f(x) = 0 equation expression on the left side
 * @param f1 - f'(x): first-order derivative of f(x)
 * @param x0 - start point of x
 * @param n - number of iterations
 * @return estimation of x
 */
var newton = function(f, f1, x0, n)
{
    var a = x0,i;
    for(i=0;i<n;i++){a = a-f(a)/f1(a);}
    return a;
};


/* Secant Method
 * @param f - f(x) = 0 equation expression on the left side
 * @param x0 - 1st start point
 * @param x1 - 2st start point
 * @param n - number of iterations
 * @return estimation of x
 */
var Secant = function(f,x0,x1,n){var i,a=x0,b=x1,c=x0;for(i=0;i<n;i++){var m=f(a);var n=f(b);c=(b*m-a*n)/(m-n);if(c==0){return c;}if(m*f(c)<0){b = c;}else{a = c;}}return c;};


eqsolve = {
    dic:dichotomie,
    fpi:FPI,
    nwt:newton,
    sec:Secant
};



var Exec = function(f,autolog){
    var d = new Date();
    var st,ed,delta;
    var r;

    st= new Date();
    r = f();
    ed= new Date();
    if(r){}else{r="NULL";}

    delta = ed.getTime()-st.getTime();
    if(autolog)
    {
        log("Result:"+r+","+"Time:"+delta,true);
    }
    return{result:r,time:delta};
};



/*TODO*/
// Add Equation Group And Matrix
/* */