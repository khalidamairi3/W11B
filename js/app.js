let cat_generate = document.getElementById("cat-genrator");
cat_generate.addEventListener("click",function(){
    let loader = document.createElement("div");
    loader.classList.add("loader");
    document.getElementById("cat").appendChild(loader);
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange =function(){
        if(this.readyState == 4 &&  this.status == 200){
            let data = JSON.parse(this.responseText);
            let img= document.createElement("img");
            img.setAttribute("src",data[0].url);
            document.getElementById("cat").removeChild(loader);
            document.getElementById("cat").appendChild(img);
        
       
        }
        else{
            let img= document.createElement("img");
            img.setAttribute("alt","cat image couldn't be loaded");

        }
        
    }   
    ajax.open("GET", "https://api.thecatapi.com/v1/images/search" ,true );
    ajax.send();
});