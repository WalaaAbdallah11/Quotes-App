







var randomQuotes = [
    {
        name:"Oscar Wilde",
        text:"“Be yourself; everyone else is already taken.”"
    },
    {
        name:"Frank Zappa",
        text:"“So many books, so little time.”"
    },
    {
        name:"Marcus Tullius Cicero",
        text:"“A room without books is like a body without a soul.”"
    },
    {
        name:"Mae West",
        text:"“You only live once, but if you do it right, once is enough.”"
    },
    {
        name:"Robert Frost",
        text:"“In three words I can sum up everything I've learned about life: it goes on.”"
    },
    {
        name:"Mark Twain",
        text:"“If you tell the truth, you don't have to remember anything.”"
    },
];

function quots(){
    var num = Math.floor(Math.random() * randomQuotes.length );
    document.getElementById("quoteText").innerHTML= `${randomQuotes[num].text}`;
    document.getElementById("quoteName").innerHTML= `--${randomQuotes[num].name}--`;

    console.log(randomQuotes[num])
}
// quots()