const collection = [{
        title: 'Westworld',
        author: 'Jonathan Nolan',
        category: {'Science-Fiction', 'AI & Robots'},
        link: 'https://www.youtube.com/watch?v=9BqKiZhEFFw&ab_channel=WarnerBros.UK%26Ireland',
        description: "Un parc d'attractions peuplé de robots propose aux visiteurs de se replonger dans plusieurs époques. Lancés dans l'ouest sauvage, deux amis se retrouvent plongés en plein cauchemar quand l'un des androïdes se détraque et les prend en chasse.",
        image:'./Images/westworld.jpg',   
    },

    {
        title: 'Final Space',
        author: 'Olan Rogers',
        category: ['Comédie', 'Animation'],
        link: 'https://www.youtube.com/watch?v=Fy2wlCa31-M&ab_channel=OlanRogers',
        description: "l'astronaute Gary et son acolyte Mooncake le destructeur de planètes, voyagent dans l'espace pour trouver où l'univers s'arrête réellement.",
        image:'./Images/final space.jpg', 
    },

    {
        title: 'Breaking Bad',
        author: 'Mark Johnson',
        category: ['Crime', 'Drame'],
        link: 'https://www.youtube.com/watch?v=HhesaQXLuRY&ab_channel=TrailerBlend',
        description: "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour réunir de l'argent afin de subvenir aux besoins de sa famille, Walter met ses connaissances en chimie à profit pour fabriquer et vendre du crystal meth.",
        image: './Images/breaking bad.jpg',
    },

    {
        title: 'Chernobyl',
        author: 'Craig Mazin',
        category: ['Drame', 'Historique'],
        link: 'https://www.youtube.com/watch?v=s9APLXM9Ei8&feature=emb_title',
        description: "26 avril 1986, l'histoire vraie de la pire catastrophe causée par l'homme etde ceux qui ont sacrifié leur vie pour sauver l'Europe du drame.",
        image:'./Images/Chernobyl.jpg', 
    },


    {
        title: 'Sex Education',
        author: 'Laurie Nunn',
        category: ['Comédie', 'Sexualité'],
        link: 'https://www.youtube.com/watch?v=Hd2ldTR-WpI&ab_channel=RottenTomatoesTV',
        description: "La rebelle Maeve entraîne Otis, un ado vierge mais dont la mère est sexologue, dans la création d'une cellule de thérapie sexuelle clandestine au sein de leur lycée.",
        image:'./Images/sex education.jpg',
    },

    {
        title: 'Sherlock',
        author: 'Sue Vertue',
        category: ['Crime', 'Sherlock'],
        link: 'https://www.youtube.com/watch?v=xK7S9mrFWL4&ab_channel=TheEmptyHearse',
        description: "Dans cette nouvelle adaptation des fameuses intrigues d'Arthur Conan Doyle, l'excentrique détective recherche des indices dans les rues de Londres.",
        image:'./Images/westworld.jpg',
    },

    {
        title: 'When they see us',
        author: 'Ava DuVernay',
        category: ['Drame', 'Historique'],
        link: 'https://www.youtube.com/watch?v=KyIrJeK2DKY&ab_channel=KinoCheckInternational',
        description: "Cette série expose l'effondrement du système judiciaire pénal américain lors de l'affaire Central Park Five, une affaire traitant d'une joggeuse de 28 ans agressée et violée en 1989 à Central Park.",
        image:'./Images/westworld.jpg', 
    },

    {
        title: 'Game of thrones',
        author: 'George R. R. Martin',
        category: ['Héroïque Fantaisie', 'Aventure'],
        link: 'https://www.youtube.com/watch?v=gcTkNV5Vg1E&ab_channel=VERITASERUMUK',
        description: "Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.",
        image:'./Images/westworld.jpg',
    },

    {
        title: 'How I met your mother',
        author: 'Carter Bays',
        category: ['Comédie', 'Sitcom'],
        link: 'https://www.youtube.com/watch?v=aJtVL2_fA5w&ab_channel=CokeNpopcorn',
        description: "La série débute en 2030, lorsque Ted Mosby raconte à ses deux enfants comment il a rencontré leur mère. Il se remémore ses jeunes années, et le pilote fait place aux souvenirs de Ted en 2005, où il apprend que son meilleur ami Marshall Eriksen va demander à Lily Aldrin de l'épouser. Ted se demande quand il rencontrera sa future épouse. Et c'est ainsi que commence l'incroyable et très longue histoire de Ted, jusqu'à sa rencontre avec la fameuse mère.",
        image:'./Images/westworld.jpg', 
    },

    {
        title: 'Peaky Blinders',
        author: 'Katie Swinden',
        category: ['Drame', 'Crime'],
        link: 'https://www.youtube.com/watch?v=oVzVdvGIC7U&ab_channel=Alextvshows',
        description: "Birmingham, en 1919. Un gang familial règne sur un quartier de la ville : les Peaky Blinders, ainsi nommés pour les lames de rasoir qu'ils cachent dans la visière de leur casquette.",
        image:'./Images/westworld.jpg', 
    },
]


const body = document.querySelector('section');
body.innerHTML = '';
body.className= 'container my-4'
const divColA= document.createElement("div");
divColA.className="columns";
// div.style.display.flex;
    // div.style.width ="300px";
    // div.style.flexDirection="row";


for (let element of collection) {
    

    const div = document.createElement("div");
    div.className = 'column is-3';
    

    const card = document.createElement("div");
    card.className = 'card';

    const image = document.createElement("img");
    image.src=element.image;

    const title = document.createElement("h1");
    title.className='title is-4';
    title.textContent = element.title;

    const author = document.createElement('h2');
    author.innerText = element.author;


    const tag1 = document.createElement('span');
    tag1.innerText = element.category[0];
    // tags.className = element.classtag;}
    
    const description = document.createElement("p");
    description.textContent = element.description;

    const link = document.createElement("a");
    link.textContent= element.link;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(tag1);
    card.appendChild(description);
    card.appendChild(link);

    div.appendChild(card);

    divColA.appendChild(div);
    body.appendChild(divColA);
}

