var searchForm = document.querySelector('.formss');
const searchInput = document.querySelector('#search');
const results = document.querySelector('#results');
const btn = document.getElementById('btn');
const warning = document.querySelector('.warning');
const foots = document.querySelector('.foots');
const tols = document.querySelector('.tooltip');
const parent = document.querySelector('.mama');
const removes = document.getElementById('#popss')
const popup = document.querySelector('.popup');
const menu = document.querySelector('.menu');
const menubar = document.querySelector('.menubar');



searchForm.addEventListener('submit', (e) => {
    
   if(btn.click) {
    e.preventDefault();
    searchRecipes();
    warning.classList.add("show")
    results.classList.add("show")
    warning.innerHTML = `here is the result of ${searchInput.value}:`
    btn.classList.add("moveover")
    results.classList.add("height")
    warning.addEventListener("transitionend",() => {
        setTimeout(() => {
            window.location.href="#results", 1000

        }, 
    )})
        
   } if (searchInput.value ==='') {
    warning.innerHTML = " please type something"
    foots.classList.remove("labas")
    searchInput.classList.remove("removesearch")
   }

   
})

window.onload=function() {

    var clickCounter = 0;
    menu.onclick = function () {
        clickCounter++;
        if (clickCounter === 2) {
            menubar.classList.remove('toggleme')
         menubar.classList.toggle("removetoggle")
        } else if (clickCounter = 1) {
            menubar.classList.add('toggleme')
            menubar.classList.remove("removetoggle")

        } 
    };

}


window.addEventListener("click", () => {
    tols.classList.remove("tols")
})
window.onscroll = function() {onme()};

function onme() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if(scrolled > 90) {
    tols.classList.add("tols")
    foots.classList.add("labas")
    tols.classList.add("opa")
  }else if (scrolled > 85) {
    tols.classList.remove("tols")
    foots.classList.remove("labas")
  }
   else if (scrolled > 2) {
    searchInput.classList.add("removesearch")
    searchInput.classList.remove("togglesearch")
    btn.classList.remove("btnshow")
    btn.classList.add("btnrev")
  }
   
  else if (scrolled < 30) {
    searchInput.classList.remove("removesearch")
    searchInput.classList.add("togglesearch")
    btn.classList.remove("btnrev")
    btn.classList.add("btnshow")
  }
  console.log(scrolled)
}



function myfunc() {
        popup.classList.toggle('removes')
        menu.classList.add('shome')
}
menu.addEventListener("click", () => {
    menu.classList.toggle('toggles')
    menubar.classList.toggle('toggleme')

})

foots.addEventListener('mouseleave', () => {
    tols.classList.remove("tols")
})
foots.addEventListener('mouseover', () => {
    tols.classList.add("tols")
})


foots.addEventListener('click', () => {
    foots.classList.remove("labas")
    results.addEventListener("transitionend", () => {
        window.location.href="#first"
    })
})


btn.addEventListener('click', (e) => {

   if(btn.click) {
    e.preventDefault();
    searchRecipes();
    warning.classList.add("show")
    results.classList.add("show")
    warning.innerHTML = `here is the result of ${searchInput.value}:`
    btn.classList.add("moveover")
    results.classList.add("height")
    warning.addEventListener("transitionend",() => {
     setTimeout(() => {
            window.location.href="#results", 1000

        }, 
    )})
        
   } if (searchInput.value ==='') {
    warning.innerHTML = " please type something"
    foots.classList.remove("labas")
    searchInput.classList.remove("removesearch")
   }
   if(results.value === '') {
    warning.innerHTML = "I can't find what you're looking for"
   }

})


async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=7aa516a5&app_key=dc836a223fb788b11ae390504d9e97ce&from=0&to=10`);
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <div class = "parent" id="mama">
        <div class="image">
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <h3>${recipe.recipe.label}</h3>
            <div class="cont">
            <ul>
                ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>

            </div>
            </div> 
            <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
        </div> 
        `
    })
    results.innerHTML = html;
}

var load = document.querySelector('.loader')
var loads = document.querySelector('.wrapper')
const mytext = new SplitType('.textinside')
gsap.to(".char", {
    delay: 1,
    x: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .3,
    opacity: 1,
    y: 0

})

gsap.to(".loader", 1.1,{

    y: "-100%",
    delay: 2.3

}
)

gsap.to(".loader-2",  1, {
    y: "-100%",
    delay: 2
} )
gsap.to(".container", 1, {
    y: "0%",
    delay: 2,
    opacity: 1
})
gsap.to("header", 1, {
    width: "100%",
    delay: 3,
    opacity: 1
})
gsap.to(".headercon",1, {
    opacity: 1,
    delay: 4
})
gsap.to(".formss", 1, {
    opacity: 1,
    delay: 4.1
})


