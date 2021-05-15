// variable declarations
let birth;
let day,month,year;
let tday,tyear,tdate,tmonth;
let nodaysy =0 ,nodaysm =0,nodays=0;
let a,b,c,d; // for nodaysm.
let x,y,z,w; //for nodaysy.
let h,final;
let days,s;


function birthday(){
    today_year=0;
    that_day=0;
    nodaysy=0;
    nodays=0;
    nodaysm=0;
    tday = document.getElementById('ear').valueAsDate;
    tyear = tday.getFullYear();
    tmonth = tday.getMonth();
    tdate = tday.getDate();
    //console.log(tday);
for (let e=0; e<tmonth;e++) {
    switch (e){
        case 0:
            h=31
            break;
            case 1:
                h=28
                break;
                case 2:
                    h=31

                    break;
                    case 3:
                        h=30;
                        break;
                        case 4:
                            h=31;
                            break;
                            case 5:
                            h=30;
                            break;
                            case 6:
                            h=31;
                            break;
                            case 7:
                            h=31;
                            break;
                            case 8:
                                h=30;
                                break;
                                case 9:
                            h=31;
                            break;
                            case 10:
                            h=30;
                            break;
                            
                            case 11:
                            h=31;
                            break;

    }
    nodays+=h;
}
nodays+=tdate;
  
    birth= document.getElementById('year').valueAsDate;
    day = birth.getDate();
    month = birth.getMonth();
    year = birth.getFullYear();
    days = birth.getDay();
    // few changes
    today_year=year;
    that_day=tyear;
    if (today_year > that_day){
    //   that_day=year;
    //   today_year=tyear;
    year=that_day;
    tyear=today_year;
      console.log('it works');
    }else{
        today_year=year;
        that_day=tyear;
        console.log(`year=${that_day} tyear=${today_year}`);
    }
    // few changes end
    switch(days){
       case 0:
           s='sunday';
           break;
           case 1:
               s='monday';
               break;
               case 2:
                   s='tuesday';
                   break;
                   case 3:
                       s='wednesday';
                       break;
                       case 4:
                           s='thursday';
                           break;
                           case 5:
                               s='friday';
                               break;
                               case 6:
                                   s='saturday';
                                   break;
    }
    console.log(s);
    x=(today_year - that_day) - 1;
    for (y=year+1;y<tyear;y++){
        z=y%4;
        if (z==0) {
            w=366;  
        }else{
            w=365;
        };
        nodaysy+=w;
    }
    for (a=month+1;a<12;a++){
        switch (a){
            case 0:
                b=31
                break;
                case 1:
                    b=28
                    break;
                    case 2:
                        b=31

                        break;
                        case 3:
                            b=30;
                            break;
                            case 4:
                                b=31;
                                break;
                                case 5:
                                b=30;
                                break;
                                case 6:
                                b=31;
                                break;
                                case 7:
                                b=31;
                                break;
                                case 8:
                                    b=30;
                                    break;
                                    case 9:
                                b=31;
                                break;
                                case 10:
                                b=30;
                                break;
                                
                                case 11:
                                b=31;
                                break;

        }
        nodaysm+=b;

    }   
    switch (month){
        case 0:
            c=31
            break;
            case 1:
                c=28
                break;
                case 2:
                    c=31

                    break;
                    case 3:
                        c=30;
                        break;
                        case 4:
                            c=31;
                            break;
                            case 5:
                            c=30;
                            break;
                            case 6:
                            c=31;
                            break;
                            case 7:
                            c=31;
                            break;
                            case 8:
                                c=30;
                                break;
                                case 9:
                            c=31;
                            break;
                            case 10:
                            c=30;
                            break;
                            
                            case 11:
                            c=31;
                            break;

    }
    d=c-day;
    nodaysm+=d;
   if (tyear>year) {
       final= (nodaysm+nodaysy+nodays);
       document.getElementById('final').innerHTML=final + ' Days there are between these two dates.'; 
   } else if (tyear=year) {
       final=(nodaysm+nodaysy+nodays)-365;
       document.getElementById('final').innerHTML=final + ' Days there are between these two dates.'; 
   } else{
       final=nodaysm+nodaysy+nodays;
       document.getElementById('final').innerHTML=final + ' Days there are between these two dates.'; 
   };
   
   console.log(`${nodaysm} ${nodaysy} ${nodays}`)
    
} 
let dated;
 function rest(){ 
     document.getElementById('ear').valueAsDate=null;
document.getElementById('year').valueAsDate=null;
document.getElementById('final').innerHTML="";   //
final=nodaysm+nodaysy+nodays;
console.log('hello')}
