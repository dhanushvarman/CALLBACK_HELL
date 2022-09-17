let ele=document.createElement("div");
ele.setAttribute("id","div1");
ele.classList.add("container","justify-content-center","d-flex","p-5");
ele.innerHTML="10";

document.body.append(ele);

let time=document.getElementById("div1").textContent;

setTimeout(()=>{
    ele.innerHTML=--time;
    setTimeout(()=>{
        ele.innerHTML=--time;
        setTimeout(()=>{
            ele.innerHTML=--time;
            setTimeout(()=>{
                ele.innerHTML=--time;
                setTimeout(()=>{
                    ele.innerHTML=--time;
                    setTimeout(()=>{
                        ele.innerHTML=--time;
                        setTimeout(()=>{
                            ele.innerHTML=--time;
                            setTimeout(()=>{
                                ele.innerHTML=--time;
                                setTimeout(()=>{
                                    ele.innerHTML=--time;
                                    setTimeout(()=>{
                                        ele.innerHTML="HAPPY INDEPENDANCE DAY";
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);