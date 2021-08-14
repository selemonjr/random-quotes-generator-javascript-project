let textEl = document.querySelector("#text-el");
let darkEl = document.querySelector("#dark-el")
let btnEl = document.querySelector("#btn-el")
let nextEl = document.querySelector("#next-el");
let quotes = ["They only way to succeed in life is by accepting who you are ~ Selemon Brahanu",
"If human beings could fly this place would be an airport ~ Harry Waynes",
"That proves you are unusual, returned the Scarecrow; and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed.― L. Frank Baum, The Land of Oz",
"“A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be”― Abraham Maslow",
"This is an era of universal hyperbole. Every day delivers a new banality disguised as an emergency. Distrust your first reactions. Begin with the assumption that you are overreacting. Conserve your emotional energies for your real concerns.",
"I accept everyone as a friend. In truth, we already know one another, profoundly, as human beings who share the same basic goals: We all seek happiness and do not want suffering.– Dalai Lama",
"The mind is a superb instrument if used rightly. Used wrongly, however, it becomes very destructive.– Eckhart Tolle","We seldom realize, for example that our most private thoughts and emotions are not actually our own. For we think in terms of languages and images which we did not invent, but which were given to us by our society.– Alan Watts",
"Insanity: doing the same thing over and over again and expecting different results.– Albert Einstein","If you’re feeling helpless, help someone.– Aung San Suu Kyi","That awkward moment when you are sitting next to people who gossip too much that you are even scared of leaving them cause you know that you are next.– Trevor Noah"];
let random = () =>  Math.floor(Math.random() * quotes.length);
console.log(random());
const clicked = btnEl.addEventListener("click",() => {
    textEl.textContent = quotes[random()]
})

darkEl.addEventListener("click",() => {
    let themes = document.body ;{
        themes.classList.toggle("themes")
    }
    if(darkEl.textContent === "Dark mode") {
        darkEl.textContent = "Light mode"
    } else {
        darkEl.textContent = "Dark mode";
    }
})