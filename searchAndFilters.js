// const serieEnDeuxMots = [];
// for (let element of collection) {
//     if (element.title.match(' ')) {
//         ;
//         serieEnDeuxMots.push(element);
//     }
// }

// const serieCommencantParUnW = [];
// for (let element of collection) {
//     if (element.title.startsWith('W')) {
//         ;
//         serieCommencantParUnW.push(element);
//     }
// }

// const seriedrame = [];
// // const showdrame = () => {
// for (let element of collection) {
//     if (element.category.find(c => c.Name === 'Drame')) {
//         seriedrame.push(element);
//     }
// }
// //     collection=seriedrame;
// // }
// // buttonDrame.addEventListener("click", showdrame());

const body = document.querySelector("section");
body.innerHTML = "";
body.className = "container my-4";

const divResearch = document.createElement("div");
body.appendChild(divResearch);
divResearch.style.display = "flex";
divResearch.style.justifyContent = "center";

    const form = document.createElement("input");
    form.className = "input mb-6";
    form.style.width = "50%";
    form.placeholder = "Feel free to search for a specific serie here";
    divResearch.appendChild(form);
    form.addEventListener("change", function (inputSearchWords) {
    filterSeries(inputSearchWords.target.value);
    });

    // const divDropdown = document.createElement("div");
    // divResearch.appendChild(divDropdown);
    // divDropdown.style.display="flex";
    // divDropdown.style.flexDirection = "column";

    //     const dropCategory = document.createElement("div");
    //     dropCategory.className = "button";
    //     dropCategory.innerText = "Research category";
    //     divDropdown.appendChild(dropCategory);
    //     dropCategory.addEventListener("mouseover", function () {
    //     dropCategoryUnder.style.display = "flex";
    //     dropCategoryUnder.style.flexDirection = "row-reverse";
    //     }); 
        
    //     const dropCategoryUnder = document.createElement("div");
    //     dropCategoryUnder.style.display = "none";
    //     divDropdown.appendChild(dropCategoryUnder);

    //         // const dropTitle = document.createElement("div");
    //         // dropCategoryUnder.appendChild(dropTitle);
    //         // dropCategoryUnder.className = "button";
    //         // dropCategoryUnder.innerText = "Title";

    //         const dropAuthor = document.createElement("div");
    //         dropCategoryUnder.appendChild(dropAuthor);
    //         dropCategoryUnder.className = "button";
    //         dropCategoryUnder.innerText = "Author";
    //         dropAuthor.addEventListener("mouseover", function (){
    //             dropAuthor.style.backgroundColor="blue";
    //         })



    const buttonHome = document.createElement("button");
    buttonHome.className = "button";
    buttonHome.innerText = "Home";
    buttonHome.addEventListener("click", function () {
    window.location = "";
    });
    divResearch.appendChild(buttonHome);

let divColA = document.createElement("div");
divColA.className = "columns is-flex-wrap-wrap";

for (let element of collection) {
  const div = document.createElement("div");
  div.className = "column is-3";
  div.addEventListener("click", function () {
    let interest = confirm(
      "Wanna watch " +
        element.title +
        ", don't you ?! Click ok to check the trailer"
    );
    if (interest == true) {
      window.location.href = element.link;
    } else {
      return false;
    }
  });

  const card = document.createElement("div");
  card.className = "card";
  card.style.boxShadow = "1px 1px 10px grey";

  const image = document.createElement("img");
  image.src = element.image;
  image.className = "card-image has-text-centered px-6 mt-5";

  const title = document.createElement("h1");
  title.className = "title is-4 mt-2";
  title.textContent = element.title;

  const author = document.createElement("h2");
  author.innerText = element.author;
  author.className = "subtitle is-6 mx-2 my-3";

  const description = document.createElement("p");
  description.textContent = element.description;
  description.className = "has-text-justified mx-2";
  const divdesciption = document.createElement("div");
  divdesciption.appendChild(description);
  divdesciption.style.marginBottom = "50px";

  const footer = document.createElement("footer");
  footer.className = "card-footer";

  const youtube = document.createElement("a");
  youtube.className = "card-footer-item fas fa-2x";
  youtube.href = element.link;
  youtube.target = "_blank";

  const lien = document.createElement("i");
  lien.className = "fab fa-youtube";

  card.appendChild(image);
  card.appendChild(title);

  for (let tag of element.category) {
    const tag1 = document.createElement("span");
    tag1.innerText = tag.Name;
    tag1.className = tag.Style;
    card.appendChild(tag1);
  }

  card.appendChild(author);
  card.appendChild(divdesciption);
  footer.appendChild(youtube);
  youtube.appendChild(lien);
  card.appendChild(footer);
  div.appendChild(card);
  divColA.appendChild(div);
  body.appendChild(divColA);
}

function filterSeries(searchWords) {
  const results = [];

  for (let serie of collection) {
    if (
      serie.title.match(searchWords) ||
      serie.description.match(searchWords) ||
      serie.author.match(searchWords)
    ) {
      divColA.innerHTML = "";
      results.push(serie);
    }
  }

  for (let element of results) {
    const div = document.createElement("div");
    div.className = "column is-3";
    div.addEventListener("click", function () {
      let interest = confirm(
        "Wanna watch " +
          element.title +
          ", don't you ?! Click ok to check the trailer"
      );
      if (interest == true) {
        window.location.href = element.link;
      } else {
        return false;
      }
    });

    const card = document.createElement("div");
    card.className = "card";
    card.style.boxShadow = "1px 1px 10px grey";

    const image = document.createElement("img");
    image.src = element.image;
    image.className = "card-image has-text-centered px-6 mt-5";

    const title = document.createElement("h1");
    title.className = "title is-4 mt-2";
    title.textContent = element.title;

    const author = document.createElement("h2");
    author.innerText = element.author;
    author.className = "subtitle is-6 mx-2 my-3";

    const description = document.createElement("p");
    description.textContent = element.description;
    description.className = "has-text-justified mx-2";
    const divdesciption = document.createElement("div");
    divdesciption.appendChild(description);
    divdesciption.style.marginBottom = "50px";

    const footer = document.createElement("footer");
    footer.className = "card-footer";

    const youtube = document.createElement("a");
    youtube.className = "card-footer-item fas fa-2x";
    youtube.href = element.link;
    youtube.target = "_blank";

    const lien = document.createElement("i");
    lien.className = "fab fa-youtube";

    card.appendChild(image);
    card.appendChild(title);

    for (let tag of element.category) {
      const tag1 = document.createElement("span");
      tag1.innerText = tag.Name;
      tag1.className = tag.Style;
      card.appendChild(tag1);
    }

    card.appendChild(author);
    card.appendChild(divdesciption);
    footer.appendChild(youtube);
    youtube.appendChild(lien);
    card.appendChild(footer);
    div.appendChild(card);
    divColA.appendChild(div);
    body.appendChild(divColA);
  }
}
