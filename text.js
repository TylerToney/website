const replacements = [
    "I asked him when the next stream was and he got mad...",
    "Science rules!",
    "HELLLLL NAH FUK DAT SHIT NAH LOL NAH HELL NAH I AINT GOIN THRU THAT SHIT",
    "GENIUS, GENIUS, GENIUS!",
    "Not in Big Momma's house!",
    "You can smell it.",
    "But please, tell me how you’re the golden standard of talent.",
    "Packing my lip one dip at a time.",
    "I'm on the Double Squirt Experience Team!",
    "We all stink!",
    "Post Malone used me to completion.",
    "Could you please pass the monkey?",
    "Oh, HELL fucking naw. I wanna watch more streams!",
    "That guy is Oney Plays as fuck.",
    "Peak pending...",
    "You made your OC way too obese.",
    "KILL. DOOBUS. GOOBUS.",
    "Do you like my voice? (NO!!)",
    "So... Funny I guess?",
    "YWNBAD",
    "HKNY",
    "IDubbbz is cuck.",
    "Now recruiting for ChickNation",
    "But why?",
    "Now Playing: Marble Endgame",
    "Yes. DudeServer is like a serverbut theres like a bunch of shit on it and basically its awesome",
    "Veronica AND Jelly?!",
    "Uninstall Arc Browser NOW",
    "He really needed more tummy time.",
    "Where my hug at?",
    "How big are your hands?",
    "Oh, honey.",
    "What are you doing??",
    "Change your icon. It's getting old!",
    "Eat my monkey!",
    "Number One Coach Tyranny Fan Community",
    "I'm excited. Very excited.",
    "TELL HIM ABOUT YOUR REWARD!",
    "Up. Left. Right. Left. Right. Left. Left. Right. Up. Right. Left. Right. Up. Up. Left. Right. Down.",
    "Dig into a five-slice pizza!",
    "You gotta be tuff. Enuff.",
    "Just about any kind of color you want.",
    "Oh, THAT is super.",
    "Are you serious??",
    "Imma do both.",
    "Yīfū dāng guān, wàn fū mò kāi!",
    "Sponsored by the North Idaho Bed & Breakfast Assosciation"
  ];
  
  const randomText = replacements[Math.floor(Math.random() * replacements.length)];
  document.getElementById("splash-text").innerHTML = randomText;
  
  if (randomText === "I asked him when the next stream was and he got mad...") {

    document.getElementById("dudeimage").src = "lester.jpg";

    document.getElementById("dudeimage").style = "border-radius:5px;";

    document.getElementById("weirdscience").src = "so-mad.mp3";

  }
  