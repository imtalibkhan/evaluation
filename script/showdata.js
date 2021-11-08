async function getdata(url){

    let res = await fetch(url)
    let data = await res.json();

    return data.categories;
    
}

function append(data, container){

    data.forEach((el)=>{

        let div = document.createElement("div");

        let p = document.createElement("p");
        p.innerText=el.strCategoryDescription

        let img = document.createElement("img");
        img.src=el.strCategoryThumb;

        div.append(img,p);

        container.append(div)
    })
}


function append1(data, container){

    data.forEach((el)=>{

        let div = document.createElement("div");

        let p = document.createElement("p");
        p.innerText=el.strCategoryDescription;

        let img = document.createElement("img");
        img.src=el.strCategoryThumb;

        div.append1(img,p);

        container.append(div)
    })
}

export {getdata,append,append1}


//categories
//strCategoryThumb
//strCategoryDescription