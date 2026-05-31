// ── ANIDLE CHARACTER DATABASE ─────────────────────────────────────────────
const ANIME_DB = [

  // ── NARUTO ────────────────────────────────────────────────────────────────
  { name: "Naruto Uzumaki",        series: "Naruto",                  age: 17,   height: 166, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Sasuke Uchiha",         series: "Naruto",                  age: 17,   height: 168, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Sakura Haruno",         series: "Naruto",                  age: 17,   height: 161, gender: "F", hair: "pink",          eyes: "green"   },
  { name: "Kakashi Hatake",        series: "Naruto",                  age: 30,   height: 181, gender: "M", hair: "white",         eyes: "black"   },
  { name: "Rock Lee",              series: "Naruto",                  age: 17,   height: 162, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Hinata Hyuga",          series: "Naruto",                  age: 16,   height: 163, gender: "F", hair: "black",         eyes: "white"   },
  { name: "Gaara",                 series: "Naruto",                  age: 17,   height: 166, gender: "M", hair: "red",           eyes: "teal"    },
  { name: "Itachi Uchiha",         series: "Naruto",                  age: 21,   height: 178, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Neji Hyuga",            series: "Naruto",                  age: 17,   height: 172, gender: "M", hair: "brown",         eyes: "white"   },
  { name: "Minato Namikaze",       series: "Naruto",                  age: 24,   height: 179, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Tsunade",               series: "Naruto",                  age: 55,   height: 163, gender: "F", hair: "blonde",        eyes: "brown"   },
  { name: "Jiraiya",               series: "Naruto",                  age: 54,   height: 191, gender: "M", hair: "white",         eyes: "black"   },
  { name: "Orochimaru",            series: "Naruto",                  age: 54,   height: 179, gender: "M", hair: "black",         eyes: "yellow"  },
  { name: "Shikamaru Nara",        series: "Naruto",                  age: 17,   height: 170, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Obito Uchiha",          series: "Naruto",                  age: 31,   height: 175, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Madara Uchiha",         series: "Naruto",                  age: 90,   height: 179, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Might Guy",             series: "Naruto",                  age: 30,   height: 184, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Temari",                series: "Naruto",                  age: 17,   height: 165, gender: "F", hair: "blonde",        eyes: "teal"    },

  // ── ONE PIECE ─────────────────────────────────────────────────────────────
  { name: "Monkey D. Luffy",       series: "One Piece",               age: 19,   height: 174, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Roronoa Zoro",          series: "One Piece",               age: 21,   height: 181, gender: "M", hair: "green",         eyes: "black"   },
  { name: "Nami",                  series: "One Piece",               age: 20,   height: 170, gender: "F", hair: "orange",        eyes: "brown"   },
  { name: "Usopp",                 series: "One Piece",               age: 19,   height: 176, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Sanji",                 series: "One Piece",               age: 21,   height: 180, gender: "M", hair: "blonde",        eyes: "grey"    },
  { name: "Tony Tony Chopper",     series: "One Piece",               age: 17,   height: 90,  gender: "M", hair: "pink",          eyes: "brown"   },
  { name: "Nico Robin",            series: "One Piece",               age: 30,   height: 188, gender: "F", hair: "black",         eyes: "blue"    },
  { name: "Franky",                series: "One Piece",               age: 36,   height: 240, gender: "M", hair: "blue",          eyes: "blue"    },
  { name: "Brook",                 series: "One Piece",               age: 90,   height: 277, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Trafalgar D. Law",      series: "One Piece",               age: 26,   height: 191, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Portgas D. Ace",        series: "One Piece",               age: 20,   height: 185, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Boa Hancock",           series: "One Piece",               age: 31,   height: 191, gender: "F", hair: "black",         eyes: "black"   },
  { name: "Shanks",                series: "One Piece",               age: 39,   height: 199, gender: "M", hair: "red",           eyes: "black"   },
  { name: "Whitebeard",            series: "One Piece",               age: 72,   height: 666, gender: "M", hair: "white",         eyes: "black"   },
  { name: "Jinbe",                 series: "One Piece",               age: 46,   height: 301, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Dracule Mihawk",        series: "One Piece",               age: 41,   height: 198, gender: "M", hair: "black",         eyes: "yellow"  },
  { name: "Buggy",                 series: "One Piece",               age: 39,   height: 189, gender: "M", hair: "blue",          eyes: "brown"   },
  { name: "Crocodile",             series: "One Piece",               age: 46,   height: 253, gender: "M", hair: "black",         eyes: "brown"   },

  // ── DRAGON BALL Z ─────────────────────────────────────────────────────────
  { name: "Goku",                  series: "Dragon Ball Z",           age: 35,   height: 175, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Vegeta",                series: "Dragon Ball Z",           age: 48,   height: 164, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Gohan",                 series: "Dragon Ball Z",           age: 16,   height: 176, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Piccolo",               series: "Dragon Ball Z",           age: 25,   height: 226, gender: "M", hair: "none",          eyes: "black"   },
  { name: "Frieza",                series: "Dragon Ball Z",           age: 70,   height: 153, gender: "M", hair: "none",          eyes: "red"     },
  { name: "Trunks",                series: "Dragon Ball Z",           age: 17,   height: 170, gender: "M", hair: "purple",        eyes: "blue"    },
  { name: "Cell",                  series: "Dragon Ball Z",           age: 5,    height: 200, gender: "M", hair: "none",          eyes: "teal"    },
  { name: "Krillin",               series: "Dragon Ball Z",           age: 35,   height: 153, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Android 18",            series: "Dragon Ball Z",           age: 30,   height: 165, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Bulma",                 series: "Dragon Ball Z",           age: 28,   height: 165, gender: "F", hair: "blue",          eyes: "blue"    },
  { name: "Goten",                 series: "Dragon Ball Z",           age: 14,   height: 153, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Android 17",            series: "Dragon Ball Z",           age: 30,   height: 170, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Beerus",                series: "Dragon Ball Z",           age: 75,   height: 200, gender: "M", hair: "none",          eyes: "golden"  },

  // ── ATTACK ON TITAN ───────────────────────────────────────────────────────
  { name: "Eren Yeager",           series: "Attack on Titan",         age: 19,   height: 183, gender: "M", hair: "black",         eyes: "green"   },
  { name: "Mikasa Ackerman",       series: "Attack on Titan",         age: 19,   height: 170, gender: "F", hair: "black",         eyes: "grey"    },
  { name: "Armin Arlert",          series: "Attack on Titan",         age: 19,   height: 163, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Levi Ackerman",         series: "Attack on Titan",         age: 34,   height: 160, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Erwin Smith",           series: "Attack on Titan",         age: 38,   height: 188, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Hange Zoe",             series: "Attack on Titan",         age: 30,   height: 170, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Reiner Braun",          series: "Attack on Titan",         age: 21,   height: 185, gender: "M", hair: "blonde",        eyes: "grey"    },
  { name: "Bertholdt Hoover",      series: "Attack on Titan",         age: 21,   height: 192, gender: "M", hair: "black",         eyes: "green"   },
  { name: "Historia Reiss",        series: "Attack on Titan",         age: 19,   height: 145, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Sasha Blouse",          series: "Attack on Titan",         age: 20,   height: 168, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Jean Kirstein",         series: "Attack on Titan",         age: 21,   height: 175, gender: "M", hair: "brown",         eyes: "grey"    },
  { name: "Annie Leonhart",        series: "Attack on Titan",         age: 24,   height: 153, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Zeke Yeager",           series: "Attack on Titan",         age: 36,   height: 183, gender: "M", hair: "blonde",        eyes: "grey"    },
  { name: "Connie Springer",       series: "Attack on Titan",         age: 19,   height: 158, gender: "M", hair: "blonde",        eyes: "grey"    },

  // ── DEMON SLAYER ──────────────────────────────────────────────────────────
  { name: "Tanjiro Kamado",        series: "Demon Slayer",            age: 15,   height: 165, gender: "M", hair: "black,red",     eyes: "red"     },
  { name: "Nezuko Kamado",         series: "Demon Slayer",            age: 14,   height: 153, gender: "F", hair: "black,orange",  eyes: "pink"    },
  { name: "Zenitsu Agatsuma",      series: "Demon Slayer",            age: 16,   height: 164, gender: "M", hair: "blonde",        eyes: "brown"   },
  { name: "Inosuke Hashibira",     series: "Demon Slayer",            age: 15,   height: 164, gender: "M", hair: "black",         eyes: "green"   },
  { name: "Giyu Tomioka",          series: "Demon Slayer",            age: 21,   height: 176, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Shinobu Kocho",         series: "Demon Slayer",            age: 18,   height: 151, gender: "F", hair: "black,purple",  eyes: "purple"  },
  { name: "Rengoku Kyojuro",       series: "Demon Slayer",            age: 20,   height: 177, gender: "M", hair: "yellow,red",    eyes: "red"     },
  { name: "Tengen Uzui",           series: "Demon Slayer",            age: 23,   height: 198, gender: "M", hair: "white",         eyes: "magenta" },
  { name: "Muichiro Tokito",       series: "Demon Slayer",            age: 14,   height: 160, gender: "M", hair: "green",         eyes: "teal"    },
  { name: "Mitsuri Kanroji",       series: "Demon Slayer",            age: 19,   height: 167, gender: "F", hair: "pink,green",    eyes: "green"   },
  { name: "Obanai Iguro",          series: "Demon Slayer",            age: 21,   height: 162, gender: "M", hair: "black",         eyes: "yellow"  },
  { name: "Akaza",                 series: "Demon Slayer",            age: 18,   height: 173, gender: "M", hair: "pink",          eyes: "blue"    },
  { name: "Doma",                  series: "Demon Slayer",            age: 133,  height: 187, gender: "M", hair: "blonde",        eyes: "rainbow" },
  { name: "Kokushibo",             series: "Demon Slayer",            age: 480,  height: 190, gender: "M", hair: "black",         eyes: "yellow"  },
  { name: "Kanao Tsuyuri",         series: "Demon Slayer",            age: 16,   height: 156, gender: "F", hair: "black",         eyes: "violet"  },
  { name: "Gyomei Himejima",       series: "Demon Slayer",            age: 27,   height: 220, gender: "M", hair: "black",         eyes: "white"   },

  // ── MY HERO ACADEMIA ──────────────────────────────────────────────────────
  { name: "Izuku Midoriya",        series: "My Hero Academia",        age: 16,   height: 166, gender: "M", hair: "green",         eyes: "green"   },
  { name: "Katsuki Bakugo",        series: "My Hero Academia",        age: 16,   height: 172, gender: "M", hair: "blonde",        eyes: "red"     },
  { name: "Ochaco Uraraka",        series: "My Hero Academia",        age: 16,   height: 156, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Shoto Todoroki",        series: "My Hero Academia",        age: 16,   height: 176, gender: "M", hair: "white,red",     eyes: "grey"    },
  { name: "Tenya Iida",            series: "My Hero Academia",        age: 16,   height: 179, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "All Might",             series: "My Hero Academia",        age: 49,   height: 220, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Endeavor",              series: "My Hero Academia",        age: 46,   height: 195, gender: "M", hair: "red",           eyes: "teal"    },
  { name: "Eraser Head",           series: "My Hero Academia",        age: 31,   height: 183, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Present Mic",           series: "My Hero Academia",        age: 31,   height: 185, gender: "M", hair: "blonde",        eyes: "green"   },
  { name: "Hawks",                 series: "My Hero Academia",        age: 23,   height: 172, gender: "M", hair: "blonde",        eyes: "golden"  },
  { name: "Tomura Shigaraki",      series: "My Hero Academia",        age: 21,   height: 175, gender: "M", hair: "white",         eyes: "red"     },
  { name: "Dabi",                  series: "My Hero Academia",        age: 24,   height: 176, gender: "M", hair: "black",         eyes: "teal"    },
  { name: "Himiko Toga",           series: "My Hero Academia",        age: 17,   height: 157, gender: "F", hair: "blonde",        eyes: "yellow"  },
  { name: "Momo Yaoyorozu",        series: "My Hero Academia",        age: 16,   height: 173, gender: "F", hair: "black",         eyes: "grey"    },
  { name: "Fumikage Tokoyami",     series: "My Hero Academia",        age: 16,   height: 158, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Eijiro Kirishima",      series: "My Hero Academia",        age: 16,   height: 170, gender: "M", hair: "red",           eyes: "red"     },

  // ── FULLMETAL ALCHEMIST: BROTHERHOOD ──────────────────────────────────────
  { name: "Edward Elric",          series: "Fullmetal Alchemist",     age: 16,   height: 165, gender: "M", hair: "blonde",        eyes: "golden"  },
  { name: "Alphonse Elric",        series: "Fullmetal Alchemist",     age: 15,   height: 239, gender: "M", hair: "blonde",        eyes: "golden"  },
  { name: "Roy Mustang",           series: "Fullmetal Alchemist",     age: 30,   height: 175, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Riza Hawkeye",          series: "Fullmetal Alchemist",     age: 29,   height: 166, gender: "F", hair: "blonde",        eyes: "brown"   },
  { name: "Winry Rockbell",        series: "Fullmetal Alchemist",     age: 16,   height: 165, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Scar",                  series: "Fullmetal Alchemist",     age: 30,   height: 185, gender: "M", hair: "black",         eyes: "red"     },
  { name: "Greed",                 series: "Fullmetal Alchemist",     age: 50,   height: 175, gender: "M", hair: "black",         eyes: "red"     },
  { name: "Lust",                  series: "Fullmetal Alchemist",     age: 50,   height: 169, gender: "F", hair: "black",         eyes: "purple"  },
  { name: "King Bradley",          series: "Fullmetal Alchemist",     age: 60,   height: 180, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Hohenheim",             series: "Fullmetal Alchemist",     age: 400,  height: 180, gender: "M", hair: "blonde",        eyes: "golden"  },
  { name: "Envy",                  series: "Fullmetal Alchemist",     age: 100,  height: 165, gender: "M", hair: "black",         eyes: "green"   },
  { name: "Izumi Curtis",          series: "Fullmetal Alchemist",     age: 35,   height: 165, gender: "F", hair: "black",         eyes: "black"   },

  // ── JUJUTSU KAISEN ────────────────────────────────────────────────────────
  { name: "Yuji Itadori",          series: "Jujutsu Kaisen",          age: 15,   height: 173, gender: "M", hair: "pink",          eyes: "brown"   },
  { name: "Megumi Fushiguro",      series: "Jujutsu Kaisen",          age: 15,   height: 175, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Nobara Kugisaki",       series: "Jujutsu Kaisen",          age: 16,   height: 160, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Satoru Gojo",           series: "Jujutsu Kaisen",          age: 28,   height: 190, gender: "M", hair: "white",         eyes: "blue"    },
  { name: "Ryomen Sukuna",         series: "Jujutsu Kaisen",          age: 1000, height: 187, gender: "M", hair: "pink",          eyes: "grey"    },
  { name: "Kento Nanami",          series: "Jujutsu Kaisen",          age: 27,   height: 184, gender: "M", hair: "blonde",        eyes: "brown"   },
  { name: "Suguru Geto",           series: "Jujutsu Kaisen",          age: 28,   height: 185, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Toge Inumaki",          series: "Jujutsu Kaisen",          age: 17,   height: 164, gender: "M", hair: "white",         eyes: "purple"  },
  { name: "Maki Zenin",            series: "Jujutsu Kaisen",          age: 16,   height: 170, gender: "F", hair: "black",         eyes: "green"   },
  { name: "Aoi Todo",              series: "Jujutsu Kaisen",          age: 18,   height: 190, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Yuta Okkotsu",          series: "Jujutsu Kaisen",          age: 17,   height: 178, gender: "M", hair: "black",         eyes: "dark"    },
  { name: "Choso",                 series: "Jujutsu Kaisen",          age: 150,  height: 180, gender: "M", hair: "black",         eyes: "black"   },

  // ── BLEACH ────────────────────────────────────────────────────────────────
  { name: "Ichigo Kurosaki",       series: "Bleach",                  age: 17,   height: 174, gender: "M", hair: "orange",        eyes: "brown"   },
  { name: "Rukia Kuchiki",         series: "Bleach",                  age: 150,  height: 144, gender: "F", hair: "black",         eyes: "purple"  },
  { name: "Orihime Inoue",         series: "Bleach",                  age: 17,   height: 157, gender: "F", hair: "orange",        eyes: "grey"    },
  { name: "Uryu Ishida",           series: "Bleach",                  age: 17,   height: 177, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Yasutora Sado",         series: "Bleach",                  age: 17,   height: 197, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Kisuke Urahara",        series: "Bleach",                  age: 210,  height: 183, gender: "M", hair: "blonde",        eyes: "grey"    },
  { name: "Byakuya Kuchiki",       series: "Bleach",                  age: 250,  height: 181, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Toshiro Hitsugaya",     series: "Bleach",                  age: 150,  height: 133, gender: "M", hair: "white",         eyes: "teal"    },
  { name: "Sosuke Aizen",          series: "Bleach",                  age: 200,  height: 186, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Kenpachi Zaraki",       series: "Bleach",                  age: 300,  height: 202, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Renji Abarai",          series: "Bleach",                  age: 200,  height: 188, gender: "M", hair: "red",           eyes: "brown"   },
  { name: "Rangiku Matsumoto",     series: "Bleach",                  age: 200,  height: 172, gender: "F", hair: "orange",        eyes: "blue"    },
  { name: "Yoruichi Shihoin",      series: "Bleach",                  age: 500,  height: 156, gender: "F", hair: "purple",        eyes: "golden"  },
  { name: "Grimmjow Jaegerjaquez", series: "Bleach",                  age: 100,  height: 186, gender: "M", hair: "blue",          eyes: "blue"    },
  { name: "Ulquiorra Cifer",       series: "Bleach",                  age: 100,  height: 169, gender: "M", hair: "black",         eyes: "green"   },
  { name: "Shunsui Kyoraku",       series: "Bleach",                  age: 200,  height: 192, gender: "M", hair: "brown",         eyes: "grey"    },

  // ── DEATH NOTE ────────────────────────────────────────────────────────────
  { name: "Light Yagami",          series: "Death Note",              age: 17,   height: 179, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "L Lawliet",             series: "Death Note",              age: 24,   height: 173, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Misa Amane",            series: "Death Note",              age: 19,   height: 152, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Near",                  series: "Death Note",              age: 18,   height: 154, gender: "M", hair: "white",         eyes: "grey"    },
  { name: "Mello",                 series: "Death Note",              age: 19,   height: 171, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Ryuk",                  series: "Death Note",              age: 1000, height: 230, gender: "M", hair: "black",         eyes: "red"     },
  { name: "Rem",                   series: "Death Note",              age: 1000, height: 210, gender: "F", hair: "white",         eyes: "red"     },
  { name: "Teru Mikami",           series: "Death Note",              age: 28,   height: 183, gender: "M", hair: "black",         eyes: "black"   },

  // ── SPY X FAMILY ──────────────────────────────────────────────────────────
  { name: "Loid Forger",           series: "Spy x Family",            age: 30,   height: 187, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Yor Forger",            series: "Spy x Family",            age: 27,   height: 170, gender: "F", hair: "black",         eyes: "red"     },
  { name: "Anya Forger",           series: "Spy x Family",            age: 6,    height: 99,  gender: "F", hair: "pink",          eyes: "green"   },
  { name: "Franky Franklin",       series: "Spy x Family",            age: 35,   height: 185, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Sylvia Sherwood",       series: "Spy x Family",            age: 35,   height: 175, gender: "F", hair: "green",         eyes: "green"   },
  { name: "Damian Desmond",        series: "Spy x Family",            age: 6,    height: 106, gender: "M", hair: "black",         eyes: "green"   },

  // ── SWORD ART ONLINE ──────────────────────────────────────────────────────
  { name: "Kirito",                series: "Sword Art Online",        age: 17,   height: 172, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Asuna",                 series: "Sword Art Online",        age: 17,   height: 168, gender: "F", hair: "orange",        eyes: "brown"   },
  { name: "Sinon",                 series: "Sword Art Online",        age: 16,   height: 167, gender: "F", hair: "blue",          eyes: "blue"    },
  { name: "Leafa",                 series: "Sword Art Online",        age: 16,   height: 168, gender: "F", hair: "blonde",        eyes: "green"   },
  { name: "Klein",                 series: "Sword Art Online",        age: 24,   height: 173, gender: "M", hair: "red",           eyes: "brown"   },
  { name: "Yui",                   series: "Sword Art Online",        age: 1,    height: 130, gender: "F", hair: "black",         eyes: "green"   },
  { name: "Alice Zuberg",          series: "Sword Art Online",        age: 18,   height: 168, gender: "F", hair: "blonde",        eyes: "golden"  },

  // ── RE:ZERO ───────────────────────────────────────────────────────────────
  { name: "Subaru Natsuki",        series: "Re:Zero",                 age: 17,   height: 173, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Emilia",                series: "Re:Zero",                 age: 115,  height: 164, gender: "F", hair: "silver",        eyes: "violet"  },
  { name: "Rem (Re:Zero)",         series: "Re:Zero",                 age: 17,   height: 154, gender: "F", hair: "blue",          eyes: "blue"    },
  { name: "Ram",                   series: "Re:Zero",                 age: 17,   height: 154, gender: "F", hair: "pink",          eyes: "red"     },
  { name: "Beatrice",              series: "Re:Zero",                 age: 400,  height: 144, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Roswaal L Mathers",     series: "Re:Zero",                 age: 350,  height: 200, gender: "M", hair: "white",         eyes: "yellow"  },
  { name: "Wilhelm van Astrea",    series: "Re:Zero",                 age: 75,   height: 182, gender: "M", hair: "white",         eyes: "blue"    },
  { name: "Felt",                  series: "Re:Zero",                 age: 16,   height: 155, gender: "F", hair: "blonde",        eyes: "red"     },

  // ── HUNTER X HUNTER ──────────────────────────────────────────────────────
  { name: "Gon Freecss",           series: "Hunter x Hunter",         age: 14,   height: 154, gender: "M", hair: "black",         eyes: "golden"  },
  { name: "Killua Zoldyck",        series: "Hunter x Hunter",         age: 14,   height: 158, gender: "M", hair: "white",         eyes: "blue"    },
  { name: "Kurapika",              series: "Hunter x Hunter",         age: 17,   height: 171, gender: "M", hair: "blonde",        eyes: "brown"   },
  { name: "Leorio Paradinight",    series: "Hunter x Hunter",         age: 19,   height: 193, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Hisoka Morow",          series: "Hunter x Hunter",         age: 28,   height: 187, gender: "M", hair: "red",           eyes: "golden"  },
  { name: "Chrollo Lucilfer",      series: "Hunter x Hunter",         age: 26,   height: 177, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Illumi Zoldyck",        series: "Hunter x Hunter",         age: 24,   height: 185, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Meruem",                series: "Hunter x Hunter",         age: 1,    height: 175, gender: "M", hair: "none",          eyes: "red"     },
  { name: "Neferpitou",            series: "Hunter x Hunter",         age: 1,    height: 165, gender: "F", hair: "white",         eyes: "red"     },
  { name: "Ging Freecss",          series: "Hunter x Hunter",         age: 32,   height: 175, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Biscuit Krueger",       series: "Hunter x Hunter",         age: 57,   height: 152, gender: "F", hair: "blonde",        eyes: "blue"    },

  // ── FRIEREN ────────────────────────────────────────────────────────────────
  { name: "Frieren",               series: "Frieren",                 age: 1000, height: 155, gender: "F", hair: "silver",        eyes: "teal"    },
  { name: "Himmel",                series: "Frieren",                 age: 30,   height: 178, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Heiter",                series: "Frieren",                 age: 60,   height: 170, gender: "M", hair: "white",         eyes: "blue"    },
  { name: "Eisen",                 series: "Frieren",                 age: 320,  height: 190, gender: "M", hair: "grey",          eyes: "grey"    },
  { name: "Fern",                  series: "Frieren",                 age: 16,   height: 168, gender: "F", hair: "purple",        eyes: "purple"  },
  { name: "Stark",                 series: "Frieren",                 age: 18,   height: 183, gender: "M", hair: "orange",        eyes: "blue"    },
  { name: "Denken",                series: "Frieren",                 age: 70,   height: 172, gender: "M", hair: "white",         eyes: "grey"    },

  // ── BLACK CLOVER ──────────────────────────────────────────────────────────
  { name: "Asta",                  series: "Black Clover",            age: 17,   height: 155, gender: "M", hair: "white",         eyes: "green"   },
  { name: "Yuno",                  series: "Black Clover",            age: 17,   height: 178, gender: "M", hair: "black",         eyes: "green"   },
  { name: "Noelle Silva",          series: "Black Clover",            age: 15,   height: 173, gender: "F", hair: "silver",        eyes: "blue"    },
  { name: "Magna Swing",           series: "Black Clover",            age: 22,   height: 182, gender: "M", hair: "red",           eyes: "black"   },
  { name: "Luck Voltia",           series: "Black Clover",            age: 18,   height: 168, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Yami Sukehiro",         series: "Black Clover",            age: 28,   height: 183, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Julius Novachrono",     series: "Black Clover",            age: 40,   height: 186, gender: "M", hair: "white",         eyes: "blue"    },
  { name: "Mereoleona Vermillion", series: "Black Clover",            age: 31,   height: 188, gender: "F", hair: "red",           eyes: "red"     },
  { name: "Gordon Agrippa",        series: "Black Clover",            age: 26,   height: 187, gender: "M", hair: "black",         eyes: "red"     },
  { name: "Charlotte Roselei",     series: "Black Clover",            age: 27,   height: 177, gender: "F", hair: "blue",          eyes: "blue"    },

  // ── VINLAND SAGA ──────────────────────────────────────────────────────────
  { name: "Thorfinn",              series: "Vinland Saga",            age: 23,   height: 170, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Askeladd",              series: "Vinland Saga",            age: 40,   height: 185, gender: "M", hair: "silver",        eyes: "blue"    },
  { name: "Canute",                series: "Vinland Saga",            age: 17,   height: 170, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Thorkell",              series: "Vinland Saga",            age: 40,   height: 227, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Bjorn",                 series: "Vinland Saga",            age: 30,   height: 198, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Leif Erikson",          series: "Vinland Saga",            age: 60,   height: 180, gender: "M", hair: "grey",          eyes: "blue"    },

  // ── SLIME ─────────────────────────────────────────────────────────────────
  { name: "Rimuru Tempest",        series: "That Time I Got Reincarnated as a Slime", age: 37, height: 120, gender: "M", hair: "blue",  eyes: "gold"    },
  { name: "Benimaru",              series: "That Time I Got Reincarnated as a Slime", age: 25, height: 180, gender: "M", hair: "red",   eyes: "amber"   },
  { name: "Shion",                 series: "That Time I Got Reincarnated as a Slime", age: 20, height: 170, gender: "F", hair: "purple",eyes: "yellow"  },
  { name: "Milim Nava",            series: "That Time I Got Reincarnated as a Slime", age: 2000,height:155, gender: "F", hair: "pink",  eyes: "red"     },
  { name: "Ranga",                 series: "That Time I Got Reincarnated as a Slime", age: 5,  height: 200, gender: "M", hair: "black", eyes: "red"     },
  { name: "Gobta",                 series: "That Time I Got Reincarnated as a Slime", age: 5,  height: 120, gender: "M", hair: "green", eyes: "red"     },

  // ── STEINS;GATE ───────────────────────────────────────────────────────────
  { name: "Rintaro Okabe",         series: "Steins;Gate",             age: 18,   height: 177, gender: "M", hair: "brown",         eyes: "grey"    },
  { name: "Kurisu Makise",         series: "Steins;Gate",             age: 18,   height: 160, gender: "F", hair: "red",           eyes: "violet"  },
  { name: "Mayuri Shiina",         series: "Steins;Gate",             age: 16,   height: 155, gender: "F", hair: "black",         eyes: "blue"    },
  { name: "Itaru Hashida",         series: "Steins;Gate",             age: 19,   height: 175, gender: "M", hair: "brown",         eyes: "black"   },
  { name: "Suzuha Amane",          series: "Steins;Gate",             age: 18,   height: 161, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Moeka Kiryu",           series: "Steins;Gate",             age: 20,   height: 170, gender: "F", hair: "brown",         eyes: "brown"   },

  // ── OVERLORD ──────────────────────────────────────────────────────────────
  { name: "Ainz Ooal Gown",        series: "Overlord",                age: 33,   height: 200, gender: "M", hair: "none",          eyes: "red"     },
  { name: "Albedo",                series: "Overlord",                age: 20,   height: 165, gender: "F", hair: "black",         eyes: "golden"  },
  { name: "Shalltear Bloodfallen", series: "Overlord",                age: 14,   height: 140, gender: "F", hair: "silver",        eyes: "red"     },
  { name: "Cocytus",               series: "Overlord",                age: 5,    height: 250, gender: "M", hair: "none",          eyes: "blue"    },
  { name: "Demiurge",              series: "Overlord",                age: 5,    height: 178, gender: "M", hair: "black",         eyes: "red"     },
  { name: "Narberal Gamma",        series: "Overlord",                age: 10,   height: 165, gender: "F", hair: "black",         eyes: "black"   },

  // ── KONOSUBA ──────────────────────────────────────────────────────────────
  { name: "Kazuma Sato",           series: "KonoSuba",                age: 17,   height: 168, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Aqua",                  series: "KonoSuba",                age: 1000, height: 161, gender: "F", hair: "blue",          eyes: "blue"    },
  { name: "Megumin",               series: "KonoSuba",                age: 14,   height: 152, gender: "F", hair: "brown",         eyes: "red"     },
  { name: "Darkness",              series: "KonoSuba",                age: 18,   height: 165, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Wiz",                   series: "KonoSuba",                age: 20,   height: 165, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Yunyun",                series: "KonoSuba",                age: 14,   height: 155, gender: "F", hair: "brown",         eyes: "red"     },

  // ── TOKYO GHOUL ───────────────────────────────────────────────────────────
  { name: "Ken Kaneki",            series: "Tokyo Ghoul",             age: 18,   height: 169, gender: "M", hair: "black,white",   eyes: "black"   },
  { name: "Touka Kirishima",       series: "Tokyo Ghoul",             age: 17,   height: 156, gender: "F", hair: "purple",        eyes: "violet"  },
  { name: "Rize Kamishiro",        series: "Tokyo Ghoul",             age: 20,   height: 167, gender: "F", hair: "purple",        eyes: "purple"  },
  { name: "Juuzou Suzuya",         series: "Tokyo Ghoul",             age: 19,   height: 160, gender: "M", hair: "white",         eyes: "red"     },
  { name: "Yoshimura",             series: "Tokyo Ghoul",             age: 100,  height: 175, gender: "M", hair: "white",         eyes: "grey"    },
  { name: "Hideyoshi Nagachika",   series: "Tokyo Ghoul",             age: 18,   height: 175, gender: "M", hair: "blonde",        eyes: "brown"   },

  // ── CHAINSAW MAN ──────────────────────────────────────────────────────────
  { name: "Denji",                 series: "Chainsaw Man",            age: 16,   height: 173, gender: "M", hair: "blonde",        eyes: "brown"   },
  { name: "Makima",                series: "Chainsaw Man",            age: 24,   height: 170, gender: "F", hair: "brown",         eyes: "red"     },
  { name: "Power",                 series: "Chainsaw Man",            age: 17,   height: 165, gender: "F", hair: "blonde",        eyes: "teal"    },
  { name: "Aki Hayakawa",          series: "Chainsaw Man",            age: 23,   height: 180, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Himeno",                series: "Chainsaw Man",            age: 27,   height: 165, gender: "F", hair: "black",         eyes: "grey"    },
  { name: "Kobeni Higashiyama",    series: "Chainsaw Man",            age: 18,   height: 155, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Quanxi",                series: "Chainsaw Man",            age: 30,   height: 170, gender: "F", hair: "blonde",        eyes: "grey"    },

  // ── HAIKYUU ───────────────────────────────────────────────────────────────
  { name: "Shoyo Hinata",          series: "Haikyuu",                 age: 16,   height: 162, gender: "M", hair: "orange",        eyes: "brown"   },
  { name: "Tobio Kageyama",        series: "Haikyuu",                 age: 16,   height: 180, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Kei Tsukishima",        series: "Haikyuu",                 age: 16,   height: 188, gender: "M", hair: "blonde",        eyes: "golden"  },
  { name: "Tadashi Yamaguchi",     series: "Haikyuu",                 age: 16,   height: 179, gender: "M", hair: "brown",         eyes: "green"   },
  { name: "Daichi Sawamura",       series: "Haikyuu",                 age: 18,   height: 176, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Koshi Sugawara",        series: "Haikyuu",                 age: 18,   height: 174, gender: "M", hair: "grey",          eyes: "brown"   },
  { name: "Koushi Oikawa",         series: "Haikyuu",                 age: 18,   height: 184, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Koutarou Bokuto",       series: "Haikyuu",                 age: 18,   height: 185, gender: "M", hair: "black,white",   eyes: "golden"  },
  { name: "Keiji Akaashi",         series: "Haikyuu",                 age: 18,   height: 182, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Kenma Kozume",          series: "Haikyuu",                 age: 17,   height: 169, gender: "M", hair: "blonde,black",  eyes: "golden"  },

  // ── ONE PUNCH MAN ─────────────────────────────────────────────────────────
  { name: "Saitama",               series: "One Punch Man",           age: 25,   height: 175, gender: "M", hair: "none",          eyes: "black"   },
  { name: "Genos",                 series: "One Punch Man",           age: 19,   height: 178, gender: "M", hair: "blonde",        eyes: "golden"  },
  { name: "Bang",                  series: "One Punch Man",           age: 81,   height: 170, gender: "M", hair: "white",         eyes: "black"   },
  { name: "Tatsumaki",             series: "One Punch Man",           age: 28,   height: 135, gender: "F", hair: "green",         eyes: "green"   },
  { name: "Fubuki",                series: "One Punch Man",           age: 23,   height: 168, gender: "F", hair: "black",         eyes: "green"   },
  { name: "Garou",                 series: "One Punch Man",           age: 18,   height: 185, gender: "M", hair: "white",         eyes: "black"   },
  { name: "King",                  series: "One Punch Man",           age: 29,   height: 188, gender: "M", hair: "brown",         eyes: "blue"    },

  // ── FAIRY TAIL ────────────────────────────────────────────────────────────
  { name: "Natsu Dragneel",        series: "Fairy Tail",              age: 18,   height: 174, gender: "M", hair: "pink",          eyes: "black"   },
  { name: "Lucy Heartfilia",       series: "Fairy Tail",              age: 17,   height: 165, gender: "F", hair: "blonde",        eyes: "brown"   },
  { name: "Gray Fullbuster",       series: "Fairy Tail",              age: 18,   height: 177, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Erza Scarlet",          series: "Fairy Tail",              age: 19,   height: 175, gender: "F", hair: "red",           eyes: "brown"   },
  { name: "Wendy Marvell",         series: "Fairy Tail",              age: 13,   height: 154, gender: "F", hair: "blue",          eyes: "blue"    },
  { name: "Jellal Fernandes",      series: "Fairy Tail",              age: 26,   height: 185, gender: "M", hair: "blue",          eyes: "brown"   },
  { name: "Laxus Dreyar",          series: "Fairy Tail",              age: 23,   height: 193, gender: "M", hair: "blonde",        eyes: "brown"   },
  { name: "Gajeel Redfox",         series: "Fairy Tail",              age: 19,   height: 180, gender: "M", hair: "black",         eyes: "red"     },

  // ── CODE GEASS ────────────────────────────────────────────────────────────
  { name: "Lelouch Lamperouge",    series: "Code Geass",              age: 17,   height: 178, gender: "M", hair: "black",         eyes: "violet"  },
  { name: "Suzaku Kururugi",       series: "Code Geass",              age: 17,   height: 176, gender: "M", hair: "brown",         eyes: "green"   },
  { name: "C.C.",                  series: "Code Geass",              age: 500,  height: 164, gender: "F", hair: "green",         eyes: "golden"  },
  { name: "Kallen Stadtfeld",      series: "Code Geass",              age: 17,   height: 168, gender: "F", hair: "red",           eyes: "blue"    },
  { name: "Nunnally Lamperouge",   series: "Code Geass",              age: 16,   height: 152, gender: "F", hair: "brown",         eyes: "violet"  },

  // ── NEON GENESIS EVANGELION ───────────────────────────────────────────────
  { name: "Shinji Ikari",          series: "Evangelion",              age: 14,   height: 157, gender: "M", hair: "brown",         eyes: "blue"    },
  { name: "Rei Ayanami",           series: "Evangelion",              age: 14,   height: 157, gender: "F", hair: "blue",          eyes: "red"     },
  { name: "Asuka Langley",         series: "Evangelion",              age: 14,   height: 157, gender: "F", hair: "red",           eyes: "blue"    },
  { name: "Misato Katsuragi",      series: "Evangelion",              age: 29,   height: 167, gender: "F", hair: "purple",        eyes: "teal"    },
  { name: "Kaworu Nagisa",         series: "Evangelion",              age: 17,   height: 160, gender: "M", hair: "silver",        eyes: "red"     },

  // ── NO GAME NO LIFE ───────────────────────────────────────────────────────
  { name: "Sora",                  series: "No Game No Life",         age: 18,   height: 173, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Shiro",                 series: "No Game No Life",         age: 11,   height: 141, gender: "F", hair: "white",         eyes: "red"     },
  { name: "Stephanie Dola",        series: "No Game No Life",         age: 18,   height: 168, gender: "F", hair: "red",           eyes: "blue"    },
  { name: "Jibril",                series: "No Game No Life",         age: 6407, height: 160, gender: "F", hair: "white",         eyes: "golden"  },
  { name: "Izuna Hatsuse",         series: "No Game No Life",         age: 14,   height: 145, gender: "F", hair: "silver",        eyes: "red"     },

  // ── YOUR LIE IN APRIL (ROMANCE) ───────────────────────────────────────────
  { name: "Kousei Arima",          series: "Your Lie in April",       age: 14,   height: 160, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Kaori Miyazono",        series: "Your Lie in April",       age: 14,   height: 158, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Tsubaki Sawabe",        series: "Your Lie in April",       age: 14,   height: 162, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Ryota Watari",          series: "Your Lie in April",       age: 14,   height: 175, gender: "M", hair: "brown",         eyes: "brown"   },

  // ── TORADORA (ROMANCE) ────────────────────────────────────────────────────
  { name: "Ryuji Takasu",          series: "Toradora",                age: 17,   height: 175, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Taiga Aisaka",          series: "Toradora",                age: 17,   height: 143, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Minori Kushieda",       series: "Toradora",                age: 17,   height: 157, gender: "F", hair: "brown",         eyes: "red"     },
  { name: "Yusaku Kitamura",       series: "Toradora",                age: 17,   height: 173, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Ami Kawashima",         series: "Toradora",                age: 17,   height: 165, gender: "F", hair: "brown",         eyes: "blue"    },

  // ── SWORD ART ONLINE: ALICIZATION ─────────────────────────────────────────
  // (already covered above)

  // ── DRAGON BALL SUPER ─────────────────────────────────────────────────────
  { name: "Caulifla",              series: "Dragon Ball Super",       age: 18,   height: 160, gender: "F", hair: "black",         eyes: "black"   },
  { name: "Kale",                  series: "Dragon Ball Super",       age: 18,   height: 158, gender: "F", hair: "black",         eyes: "black"   },
  { name: "Jiren",                 series: "Dragon Ball Super",       age: 60,   height: 195, gender: "M", hair: "none",          eyes: "black"   },
  { name: "Hit",                   series: "Dragon Ball Super",       age: 1000, height: 187, gender: "M", hair: "none",          eyes: "black"   },
  { name: "Whis",                  series: "Dragon Ball Super",       age: 5000, height: 195, gender: "M", hair: "white",         eyes: "black"   },

  // ── SWORD ART ONLINE ALT ─────────────────────────────────────────────────

  // ── ASSASSINATION CLASSROOM ───────────────────────────────────────────────
  { name: "Koro Sensei",           series: "Assassination Classroom", age: 30,   height: 300, gender: "M", hair: "none",          eyes: "black"   },
  { name: "Nagisa Shiota",         series: "Assassination Classroom", age: 15,   height: 159, gender: "M", hair: "blue",          eyes: "blue"    },
  { name: "Karma Akabane",         series: "Assassination Classroom", age: 15,   height: 175, gender: "M", hair: "red",           eyes: "amber"   },
  { name: "Kaede Kayano",          series: "Assassination Classroom", age: 15,   height: 155, gender: "F", hair: "green",         eyes: "green"   },
  { name: "Irina Jelavic",         series: "Assassination Classroom", age: 24,   height: 167, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Tadaomi Karasuma",      series: "Assassination Classroom", age: 28,   height: 183, gender: "M", hair: "black",         eyes: "black"   },

  // ── SWORD ART ONLINE (skipping dup) ──────────────────────────────────────

  // ── FOOD WARS (SHOKUGEKI NO SOMA) ─────────────────────────────────────────
  { name: "Soma Yukihira",         series: "Food Wars",               age: 15,   height: 173, gender: "M", hair: "brown",         eyes: "grey"    },
  { name: "Erina Nakiri",          series: "Food Wars",               age: 15,   height: 165, gender: "F", hair: "blonde",        eyes: "golden"  },
  { name: "Megumi Tadokoro",       series: "Food Wars",               age: 15,   height: 163, gender: "F", hair: "brown",         eyes: "green"   },
  { name: "Alice Nakiri",          series: "Food Wars",               age: 15,   height: 162, gender: "F", hair: "silver",        eyes: "red"     },
  { name: "Takumi Aldini",         series: "Food Wars",               age: 15,   height: 174, gender: "M", hair: "black",         eyes: "blue"    },

  // ── MOB PSYCHO 100 (PSYCHOLOGICAL) ───────────────────────────────────────
  { name: "Shigeo Kageyama",       series: "Mob Psycho 100",          age: 14,   height: 156, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Arataka Reigen",        series: "Mob Psycho 100",          age: 28,   height: 178, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Dimple",                series: "Mob Psycho 100",          age: 100,  height: 30,  gender: "M", hair: "none",          eyes: "black"   },
  { name: "Ritsu Kageyama",        series: "Mob Psycho 100",          age: 13,   height: 158, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Teruki Hanazawa",       series: "Mob Psycho 100",          age: 14,   height: 160, gender: "M", hair: "blonde",        eyes: "green"   },

  // ── TOKYO REVENGERS ───────────────────────────────────────────────────────
  { name: "Takemichi Hanagaki",    series: "Tokyo Revengers",         age: 17,   height: 165, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Mikey (Manjiro Sano)",  series: "Tokyo Revengers",         age: 15,   height: 162, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Draken (Ken Ryuguji)",  series: "Tokyo Revengers",         age: 15,   height: 185, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Keisuke Baji",          series: "Tokyo Revengers",         age: 15,   height: 172, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Chifuyu Matsuno",       series: "Tokyo Revengers",         age: 15,   height: 170, gender: "M", hair: "blonde",        eyes: "blue"    },

  // ── SWORD ART ONLINE (already have) ─────────────────────────────────────

  // ── RISING OF THE SHIELD HERO (ISEKAI) ───────────────────────────────────
  { name: "Naofumi Iwatani",       series: "Shield Hero",             age: 20,   height: 168, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Raphtalia",             series: "Shield Hero",             age: 17,   height: 155, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Filo",                  series: "Shield Hero",             age: 1,    height: 140, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Rishia Ivyred",         series: "Shield Hero",             age: 17,   height: 155, gender: "F", hair: "red",           eyes: "green"   },
  { name: "Glass",                 series: "Shield Hero",             age: 100,  height: 165, gender: "F", hair: "black",         eyes: "blue"    },

  // ── GOBLIN SLAYER (DARK FANTASY) ──────────────────────────────────────────
  { name: "Goblin Slayer",         series: "Goblin Slayer",           age: 24,   height: 175, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Priestess",             series: "Goblin Slayer",           age: 15,   height: 155, gender: "F", hair: "blonde",        eyes: "golden"  },
  { name: "High Elf Archer",       series: "Goblin Slayer",           age: 2000, height: 165, gender: "F", hair: "blonde",        eyes: "green"   },
  { name: "Dwarf Shaman",          series: "Goblin Slayer",           age: 80,   height: 120, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Lizard Priest",         series: "Goblin Slayer",           age: 20,   height: 200, gender: "M", hair: "none",          eyes: "yellow"  },

  // ── DR. STONE (SCIENCE/ADVENTURE) ─────────────────────────────────────────
  { name: "Senku Ishigami",        series: "Dr. Stone",               age: 15,   height: 165, gender: "M", hair: "white",         eyes: "green"   },
  { name: "Taiju Oki",             series: "Dr. Stone",               age: 15,   height: 195, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Yuzuriha Ogawa",        series: "Dr. Stone",               age: 15,   height: 165, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Tsukasa Shishio",       series: "Dr. Stone",               age: 18,   height: 190, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Kohaku",                series: "Dr. Stone",               age: 16,   height: 163, gender: "F", hair: "blonde",        eyes: "green"   },
  { name: "Chrome",                series: "Dr. Stone",               age: 15,   height: 163, gender: "M", hair: "red",           eyes: "brown"   },

  // ── SWORD ART ONLINE (already covered) ──────────────────────────────────

  // ── WEATHERING WITH YOU / MAKOTO SHINKAI ─────────────────────────────────
  // skip, not TV series

  // ── CLASSROOM OF THE ELITE (PSYCHOLOGICAL) ───────────────────────────────
  { name: "Kiyotaka Ayanokoji",    series: "Classroom of the Elite",  age: 16,   height: 176, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Suzune Horikita",       series: "Classroom of the Elite",  age: 16,   height: 165, gender: "F", hair: "black",         eyes: "violet"  },
  { name: "Kikyou Kushida",        series: "Classroom of the Elite",  age: 16,   height: 158, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Airi Sakura",           series: "Classroom of the Elite",  age: 16,   height: 155, gender: "F", hair: "brown",         eyes: "grey"    },
  { name: "Rokusuke Koenji",       series: "Classroom of the Elite",  age: 16,   height: 177, gender: "M", hair: "silver",        eyes: "blue"    },

  // ── MUSHOKU TENSEI (ISEKAI) ───────────────────────────────────────────────
  { name: "Rudeus Greyrat",        series: "Mushoku Tensei",          age: 15,   height: 170, gender: "M", hair: "red",           eyes: "black"   },
  { name: "Sylphiette",            series: "Mushoku Tensei",          age: 14,   height: 155, gender: "F", hair: "green",         eyes: "green"   },
  { name: "Roxy Migurdia",         series: "Mushoku Tensei",          age: 44,   height: 143, gender: "F", hair: "blue",          eyes: "purple"  },
  { name: "Eris Boreas Greyrat",   series: "Mushoku Tensei",          age: 14,   height: 163, gender: "F", hair: "red",           eyes: "blue"    },
  { name: "Paul Greyrat",          series: "Mushoku Tensei",          age: 38,   height: 180, gender: "M", hair: "brown",         eyes: "brown"   },

  // ── THE PROMISED NEVERLAND (PSYCHOLOGICAL THRILLER) ──────────────────────
  { name: "Emma",                  series: "The Promised Neverland",  age: 11,   height: 145, gender: "F", hair: "orange",        eyes: "green"   },
  { name: "Norman",                series: "The Promised Neverland",  age: 11,   height: 145, gender: "M", hair: "white",         eyes: "blue"    },
  { name: "Ray",                   series: "The Promised Neverland",  age: 11,   height: 145, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Isabella",              series: "The Promised Neverland",  age: 31,   height: 166, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Phil",                  series: "The Promised Neverland",  age: 4,    height: 105, gender: "M", hair: "brown",         eyes: "blue"    },

  // ── BLACK BUTLER (DARK/PSYCHOLOGICAL) ─────────────────────────────────────
  { name: "Sebastian Michaelis",   series: "Black Butler",            age: 1000, height: 185, gender: "M", hair: "black",         eyes: "red"     },
  { name: "Ciel Phantomhive",      series: "Black Butler",            age: 13,   height: 152, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Grell Sutcliff",        series: "Black Butler",            age: 100,  height: 175, gender: "F", hair: "red",           eyes: "green"   },
  { name: "Elizabeth Midford",     series: "Black Butler",            age: 13,   height: 153, gender: "F", hair: "blonde",        eyes: "green"   },
  { name: "Undertaker",            series: "Black Butler",            age: 1000, height: 180, gender: "M", hair: "silver",        eyes: "grey"    },

  // ── MADE IN ABYSS ─────────────────────────────────────────────────────────
  { name: "Riko",                  series: "Made in Abyss",           age: 12,   height: 128, gender: "F", hair: "blonde",        eyes: "brown"   },
  { name: "Reg",                   series: "Made in Abyss",           age: 12,   height: 130, gender: "M", hair: "black",         eyes: "red"     },
  { name: "Nanachi",               series: "Made in Abyss",           age: 14,   height: 130, gender: "F", hair: "white",         eyes: "brown"   },
  { name: "Bondrewd",              series: "Made in Abyss",           age: 50,   height: 180, gender: "M", hair: "white",         eyes: "blue"    },

  // ── VIOLET EVERGARDEN (ROMANCE/DRAMA) ─────────────────────────────────────
  { name: "Violet Evergarden",     series: "Violet Evergarden",       age: 14,   height: 162, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Gilbert Bougainvillea", series: "Violet Evergarden",       age: 29,   height: 185, gender: "M", hair: "black",         eyes: "green"   },
  { name: "Claudia Hodgins",       series: "Violet Evergarden",       age: 30,   height: 183, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Cattleya Baudelaire",   series: "Violet Evergarden",       age: 25,   height: 168, gender: "F", hair: "brown",         eyes: "violet"  },

  // ── BLUE LOCK (SPORTS) ────────────────────────────────────────────────────
  { name: "Yoichi Isagi",          series: "Blue Lock",               age: 16,   height: 173, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Meguru Bachira",        series: "Blue Lock",               age: 16,   height: 171, gender: "M", hair: "brown",         eyes: "yellow"  },
  { name: "Rensuke Kunigami",      series: "Blue Lock",               age: 16,   height: 180, gender: "M", hair: "blonde",        eyes: "red"     },
  { name: "Seishiro Nagi",         series: "Blue Lock",               age: 16,   height: 181, gender: "M", hair: "silver",        eyes: "grey"    },
  { name: "Rin Itoshi",            series: "Blue Lock",               age: 16,   height: 180, gender: "M", hair: "blue",          eyes: "blue"    },
  { name: "Sae Itoshi",            series: "Blue Lock",               age: 18,   height: 178, gender: "M", hair: "pink",          eyes: "blue"    },

  // ── BOCCHI THE ROCK (SLICE OF LIFE/MUSIC) ────────────────────────────────
  { name: "Hitori Gotoh",          series: "Bocchi the Rock",         age: 16,   height: 158, gender: "F", hair: "pink",          eyes: "blue"    },
  { name: "Nijika Ijichi",         series: "Bocchi the Rock",         age: 16,   height: 155, gender: "F", hair: "yellow",        eyes: "yellow"  },
  { name: "Ryo Yamada",            series: "Bocchi the Rock",         age: 16,   height: 162, gender: "F", hair: "blue",          eyes: "blue"    },
  { name: "Ikuyo Kita",            series: "Bocchi the Rock",         age: 16,   height: 163, gender: "F", hair: "red",           eyes: "red"     },

  // ── OREGAIRU / MY TEEN ROMANTIC COMEDY (ROMANCE) ─────────────────────────
  { name: "Hachiman Hikigaya",     series: "OreGairu",                age: 16,   height: 170, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Yukino Yukinoshita",    series: "OreGairu",                age: 16,   height: 162, gender: "F", hair: "black",         eyes: "blue"    },
  { name: "Yui Yuigahama",         series: "OreGairu",                age: 16,   height: 160, gender: "F", hair: "pink",          eyes: "brown"   },
  { name: "Saika Totsuka",         series: "OreGairu",                age: 16,   height: 160, gender: "M", hair: "silver",        eyes: "blue"    },

  // ── SERAPH OF THE END ─────────────────────────────────────────────────────
  { name: "Yuichiro Hyakuya",      series: "Seraph of the End",       age: 16,   height: 170, gender: "M", hair: "black",         eyes: "green"   },
  { name: "Mikaela Hyakuya",       series: "Seraph of the End",       age: 16,   height: 172, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Shinoa Hiragi",         series: "Seraph of the End",       age: 16,   height: 150, gender: "F", hair: "purple",        eyes: "yellow"  },
  { name: "Ferid Bathory",         series: "Seraph of the End",       age: 500,  height: 177, gender: "M", hair: "silver",        eyes: "red"     },

  // ── AKAME GA KILL ─────────────────────────────────────────────────────────
  { name: "Tatsumi",               series: "Akame ga Kill",           age: 17,   height: 170, gender: "M", hair: "brown",         eyes: "green"   },
  { name: "Akame",                 series: "Akame ga Kill",           age: 16,   height: 164, gender: "F", hair: "black",         eyes: "red"     },
  { name: "Mine",                  series: "Akame ga Kill",           age: 15,   height: 153, gender: "F", hair: "pink",          eyes: "pink"    },
  { name: "Leone",                 series: "Akame ga Kill",           age: 20,   height: 165, gender: "F", hair: "blonde",        eyes: "amber"   },
  { name: "Esdeath",               series: "Akame ga Kill",           age: 25,   height: 170, gender: "F", hair: "blue",          eyes: "blue"    },

  // ── KAGUYA SAMA LOVE IS WAR (ROMANCE/COMEDY) ──────────────────────────────
  { name: "Miyuki Shirogane",      series: "Kaguya-sama",             age: 17,   height: 178, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Kaguya Shinomiya",      series: "Kaguya-sama",             age: 17,   height: 158, gender: "F", hair: "black",         eyes: "red"     },
  { name: "Chika Fujiwara",        series: "Kaguya-sama",             age: 17,   height: 154, gender: "F", hair: "pink",          eyes: "blue"    },
  { name: "Yu Ishigami",           series: "Kaguya-sama",             age: 16,   height: 168, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Ai Hayasaka",           series: "Kaguya-sama",             age: 17,   height: 165, gender: "F", hair: "blonde",        eyes: "blue"    },

  // ── DURARARA ──────────────────────────────────────────────────────────────
  { name: "Shizuo Heiwajima",      series: "Durarara",                age: 23,   height: 185, gender: "M", hair: "blonde",        eyes: "brown"   },
  { name: "Izaya Orihara",         series: "Durarara",                age: 23,   height: 175, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Celty Sturluson",       series: "Durarara",                age: 1000, height: 175, gender: "F", hair: "none",          eyes: "none"    },
  { name: "Ryugamine Mikado",      series: "Durarara",                age: 15,   height: 165, gender: "M", hair: "black",         eyes: "blue"    },

  // ── DANMACHI / IS IT WRONG TO TRY TO PICK UP GIRLS IN A DUNGEON ───────────
  { name: "Bell Cranel",           series: "DanMachi",                age: 14,   height: 165, gender: "M", hair: "white",         eyes: "red"     },
  { name: "Hestia",                series: "DanMachi",                age: 1000, height: 148, gender: "F", hair: "black",         eyes: "blue"    },
  { name: "Aiz Wallenstein",       series: "DanMachi",                age: 18,   height: 165, gender: "F", hair: "blonde",        eyes: "golden"  },
  { name: "Ryuu Lion",             series: "DanMachi",                age: 100,  height: 168, gender: "F", hair: "blonde",        eyes: "green"   },
  { name: "Liliruca Arde",         series: "DanMachi",                age: 14,   height: 140, gender: "F", hair: "brown",         eyes: "brown"   },

  // ── ANGEL BEATS (DRAMA / SUPERNATURAL) ───────────────────────────────────
  { name: "Yuzuru Otonashi",       series: "Angel Beats",             age: 17,   height: 175, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Kanade Tachibana",      series: "Angel Beats",             age: 17,   height: 153, gender: "F", hair: "silver",        eyes: "gold"    },
  { name: "Yuri Nakamura",         series: "Angel Beats",             age: 17,   height: 160, gender: "F", hair: "purple",        eyes: "purple"  },
  { name: "Hideki Hinata",         series: "Angel Beats",             age: 17,   height: 178, gender: "M", hair: "blue",          eyes: "blue"    },
  { name: "Ayato Naoi",            series: "Angel Beats",             age: 17,   height: 170, gender: "M", hair: "black",         eyes: "green"   },

  // ── CLANNAD (ROMANCE / DRAMA) ─────────────────────────────────────────────
  { name: "Tomoya Okazaki",        series: "Clannad",                 age: 17,   height: 175, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Nagisa Furukawa",       series: "Clannad",                 age: 17,   height: 155, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Kyou Fujibayashi",      series: "Clannad",                 age: 17,   height: 162, gender: "F", hair: "purple",        eyes: "violet"  },
  { name: "Kotomi Ichinose",       series: "Clannad",                 age: 17,   height: 160, gender: "F", hair: "brown",         eyes: "blue"    },
  { name: "Tomoyo Sakagami",       series: "Clannad",                 age: 17,   height: 165, gender: "F", hair: "silver",        eyes: "grey"    },

  // ── SHAMAN KING (SHONEN) ──────────────────────────────────────────────────
  { name: "Yoh Asakura",           series: "Shaman King",             age: 13,   height: 162, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Hao Asakura",           series: "Shaman King",             age: 13,   height: 162, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Anna Kyoyama",          series: "Shaman King",             age: 13,   height: 157, gender: "F", hair: "blonde",        eyes: "black"   },
  { name: "Horohoro",              series: "Shaman King",             age: 14,   height: 168, gender: "M", hair: "blue",          eyes: "blue"    },
  { name: "Ren Tao",               series: "Shaman King",             age: 13,   height: 162, gender: "M", hair: "purple",        eyes: "gold"    },

  // ── DARLING IN THE FRANXX (SCI-FI / MECHA) ───────────────────────────────
  { name: "Hiro",                  series: "Darling in the FranXX",   age: 16,   height: 175, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Zero Two",              series: "Darling in the FranXX",   age: 16,   height: 170, gender: "F", hair: "pink",          eyes: "teal"    },
  { name: "Ichigo",                series: "Darling in the FranXX",   age: 16,   height: 155, gender: "F", hair: "green",         eyes: "teal"    },
  { name: "Goro",                  series: "Darling in the FranXX",   age: 16,   height: 178, gender: "M", hair: "brown",         eyes: "green"   },
  { name: "Kokoro",                series: "Darling in the FranXX",   age: 16,   height: 163, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Mitsuru",               series: "Darling in the FranXX",   age: 16,   height: 177, gender: "M", hair: "blue",          eyes: "blue"    },

  // ── INUYASHA (FANTASY / ADVENTURE) ────────────────────────────────────────
  { name: "Inuyasha",              series: "Inuyasha",                age: 200,  height: 170, gender: "M", hair: "white",         eyes: "golden"  },
  { name: "Kagome Higurashi",      series: "Inuyasha",                age: 15,   height: 160, gender: "F", hair: "black",         eyes: "brown"   },
  { name: "Miroku",                series: "Inuyasha",                age: 18,   height: 175, gender: "M", hair: "black",         eyes: "violet"  },
  { name: "Sango",                 series: "Inuyasha",                age: 16,   height: 166, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Sesshomaru",            series: "Inuyasha",                age: 500,  height: 178, gender: "M", hair: "silver",        eyes: "golden"  },
  { name: "Kikyo",                 series: "Inuyasha",                age: 18,   height: 160, gender: "F", hair: "black",         eyes: "brown"   },

  // ── SAILOR MOON (MAGICAL GIRL) ─────────────────────────────────────────────
  { name: "Usagi Tsukino",         series: "Sailor Moon",             age: 14,   height: 150, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Rei Hino",              series: "Sailor Moon",             age: 14,   height: 160, gender: "F", hair: "black",         eyes: "violet"  },
  { name: "Ami Mizuno",            series: "Sailor Moon",             age: 14,   height: 157, gender: "F", hair: "blue",          eyes: "blue"    },
  { name: "Makoto Kino",           series: "Sailor Moon",             age: 14,   height: 168, gender: "F", hair: "brown",         eyes: "green"   },
  { name: "Minako Aino",           series: "Sailor Moon",             age: 14,   height: 162, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Mamoru Chiba",          series: "Sailor Moon",             age: 17,   height: 182, gender: "M", hair: "black",         eyes: "blue"    },

  // ── NANA (JOSEI / ROMANCE / DRAMA) ────────────────────────────────────────
  { name: "Nana Osaki",            series: "Nana",                    age: 20,   height: 163, gender: "F", hair: "black",         eyes: "black"   },
  { name: "Nana Komatsu",          series: "Nana",                    age: 20,   height: 156, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Ren Honjo",             series: "Nana",                    age: 22,   height: 180, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Nobuo Terashima",       series: "Nana",                    age: 20,   height: 173, gender: "M", hair: "blonde",        eyes: "brown"   },

  // ── CARDCAPTOR SAKURA (MAGICAL GIRL) ──────────────────────────────────────
  { name: "Sakura Kinomoto",       series: "Cardcaptor Sakura",       age: 10,   height: 147, gender: "F", hair: "brown",         eyes: "green"   },
  { name: "Syaoran Li",            series: "Cardcaptor Sakura",       age: 10,   height: 149, gender: "M", hair: "brown",         eyes: "amber"   },
  { name: "Tomoyo Daidoji",        series: "Cardcaptor Sakura",       age: 10,   height: 148, gender: "F", hair: "black",         eyes: "violet"  },
  { name: "Yukito Tsukishiro",     series: "Cardcaptor Sakura",       age: 16,   height: 174, gender: "M", hair: "silver",        eyes: "grey"    },

  // ── GRAVE OF THE FIREFLIES / skip — not TV series ─────────────────────────

  // ── SWORD ART ONLINE (already) ───────────────────────────────────────────

  // ── COWBOY BEBOP (SCI-FI) ─────────────────────────────────────────────────
  { name: "Spike Spiegel",         series: "Cowboy Bebop",            age: 27,   height: 185, gender: "M", hair: "green",         eyes: "brown"   },
  { name: "Jet Black",             series: "Cowboy Bebop",            age: 36,   height: 188, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Faye Valentine",        series: "Cowboy Bebop",            age: 23,   height: 168, gender: "F", hair: "purple",        eyes: "green"   },
  { name: "Edward Wong",           series: "Cowboy Bebop",            age: 13,   height: 155, gender: "F", hair: "red",           eyes: "brown"   },
  { name: "Vicious",               series: "Cowboy Bebop",            age: 27,   height: 183, gender: "M", hair: "silver",        eyes: "grey"    },

  // ── TRIGUN (ACTION / SCI-FI) ──────────────────────────────────────────────
  { name: "Vash the Stampede",     series: "Trigun",                  age: 131,  height: 180, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Nicholas Wolfwood",     series: "Trigun",                  age: 24,   height: 183, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Meryl Stryfe",          series: "Trigun",                  age: 20,   height: 163, gender: "F", hair: "black",         eyes: "grey"    },
  { name: "Milly Thompson",        series: "Trigun",                  age: 22,   height: 179, gender: "F", hair: "brown",         eyes: "blue"    },

  // ── RUROUNI KENSHIN (HISTORICAL ACTION) ──────────────────────────────────
  { name: "Kenshin Himura",        series: "Rurouni Kenshin",         age: 28,   height: 158, gender: "M", hair: "red",           eyes: "violet"  },
  { name: "Kaoru Kamiya",          series: "Rurouni Kenshin",         age: 17,   height: 155, gender: "F", hair: "black",         eyes: "blue"    },
  { name: "Sanosuke Sagara",       series: "Rurouni Kenshin",         age: 19,   height: 179, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Yahiko Myojin",         series: "Rurouni Kenshin",         age: 10,   height: 138, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Hajime Saito",          series: "Rurouni Kenshin",         age: 30,   height: 183, gender: "M", hair: "black",         eyes: "gold"    },

  // ── SLAM DUNK (SPORTS) ─────────────────────────────────────────────────────
  { name: "Hanamichi Sakuragi",    series: "Slam Dunk",               age: 16,   height: 189, gender: "M", hair: "red",           eyes: "brown"   },
  { name: "Kaede Rukawa",          series: "Slam Dunk",               age: 16,   height: 187, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Takenori Akagi",        series: "Slam Dunk",               age: 18,   height: 197, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Ryota Miyagi",          series: "Slam Dunk",               age: 16,   height: 168, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Hisashi Mitsui",        series: "Slam Dunk",               age: 17,   height: 184, gender: "M", hair: "brown",         eyes: "brown"   },

  // ── HAJIME NO IPPO (SPORTS) ───────────────────────────────────────────────
  { name: "Makunouchi Ippo",       series: "Hajime no Ippo",          age: 17,   height: 165, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Ichiro Miyata",         series: "Hajime no Ippo",          age: 17,   height: 165, gender: "M", hair: "brown",         eyes: "blue"    },
  { name: "Mamoru Takamura",       series: "Hajime no Ippo",          age: 19,   height: 178, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Masaru Aoki",           series: "Hajime no Ippo",          age: 18,   height: 175, gender: "M", hair: "brown",         eyes: "brown"   },

  // ── CAPTAIN TSUBASA (SPORTS) ──────────────────────────────────────────────
  { name: "Tsubasa Ozora",         series: "Captain Tsubasa",         age: 11,   height: 160, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Kojiro Hyuga",          series: "Captain Tsubasa",         age: 11,   height: 163, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Ken Wakashimazu",       series: "Captain Tsubasa",         age: 11,   height: 156, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Genzo Wakabayashi",     series: "Captain Tsubasa",         age: 11,   height: 160, gender: "M", hair: "blonde",        eyes: "blue"    },

  // ── INITIAL D (RACING) ────────────────────────────────────────────────────
  { name: "Takumi Fujiwara",       series: "Initial D",               age: 18,   height: 170, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Ryosuke Takahashi",     series: "Initial D",               age: 20,   height: 175, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Keisuke Takahashi",     series: "Initial D",               age: 19,   height: 173, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Itsuki Takeuchi",       series: "Initial D",               age: 18,   height: 168, gender: "M", hair: "brown",         eyes: "brown"   },

  // ── KAKEGURUI (PSYCHOLOGICAL / GAMBLING) ──────────────────────────────────
  { name: "Yumeko Jabami",         series: "Kakegurui",               age: 17,   height: 164, gender: "F", hair: "black",         eyes: "red"     },
  { name: "Ryota Suzui",           series: "Kakegurui",               age: 17,   height: 170, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Mary Saotome",          series: "Kakegurui",               age: 17,   height: 157, gender: "F", hair: "blonde",        eyes: "yellow"  },
  { name: "Kirari Momobami",       series: "Kakegurui",               age: 17,   height: 165, gender: "F", hair: "silver",        eyes: "blue"    },
  { name: "Midari Ikishima",       series: "Kakegurui",               age: 17,   height: 163, gender: "F", hair: "black",         eyes: "black"   },

  // ── THE MELANCHOLY OF HARUHI SUZUMIYA (SCI-FI / COMEDY) ──────────────────
  { name: "Haruhi Suzumiya",       series: "The Melancholy of Haruhi Suzumiya", age: 16, height: 159, gender: "F", hair: "brown", eyes: "brown"   },
  { name: "Kyon",                  series: "The Melancholy of Haruhi Suzumiya", age: 16, height: 172, gender: "M", hair: "brown", eyes: "brown"   },
  { name: "Yuki Nagato",           series: "The Melancholy of Haruhi Suzumiya", age: 16, height: 154, gender: "F", hair: "purple",eyes: "gold"    },
  { name: "Mikuru Asahina",        series: "The Melancholy of Haruhi Suzumiya", age: 17, height: 158, gender: "F", hair: "brown", eyes: "brown"   },
  { name: "Itsuki Koizumi",        series: "The Melancholy of Haruhi Suzumiya", age: 16, height: 176, gender: "M", hair: "brown", eyes: "brown"   },

  // ── GREAT PRETENDER (CRIME / THRILLER) ────────────────────────────────────
  { name: "Makoto Edamura",        series: "Great Pretender",         age: 24,   height: 175, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Laurent Thierry",       series: "Great Pretender",         age: 35,   height: 185, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Abigail Jones",         series: "Great Pretender",         age: 26,   height: 168, gender: "F", hair: "black",         eyes: "brown"   },
  { name: "Cynthia Moore",         series: "Great Pretender",         age: 28,   height: 170, gender: "F", hair: "blonde",        eyes: "blue"    },

  // ── BANANA FISH (DRAMA / CRIME) ───────────────────────────────────────────
  { name: "Ash Lynx",              series: "Banana Fish",             age: 17,   height: 173, gender: "M", hair: "blonde",        eyes: "green"   },
  { name: "Eiji Okumura",          series: "Banana Fish",             age: 19,   height: 174, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Shorter Wong",          series: "Banana Fish",             age: 18,   height: 176, gender: "M", hair: "purple",        eyes: "brown"   },
  { name: "Yut-Lung Lee",          series: "Banana Fish",             age: 17,   height: 170, gender: "M", hair: "black",         eyes: "blue"    },

  // ── OURAN HIGH SCHOOL HOST CLUB (ROMANCE / COMEDY) ───────────────────────
  { name: "Tamaki Suoh",           series: "Ouran Host Club",         age: 16,   height: 183, gender: "M", hair: "blonde",        eyes: "violet"  },
  { name: "Kyoya Ootori",          series: "Ouran Host Club",         age: 16,   height: 181, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Haruhi Fujioka",        series: "Ouran Host Club",         age: 15,   height: 155, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Hikaru Hitachiin",      series: "Ouran Host Club",         age: 15,   height: 175, gender: "M", hair: "auburn",        eyes: "amber"   },
  { name: "Mitsukuni Haninozuka",  series: "Ouran Host Club",         age: 17,   height: 148, gender: "M", hair: "blonde",        eyes: "brown"   },

  // ── FRUITS BASKET (ROMANCE / DRAMA) ──────────────────────────────────────
  { name: "Tohru Honda",           series: "Fruits Basket",           age: 16,   height: 157, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Kyo Sohma",             series: "Fruits Basket",           age: 16,   height: 171, gender: "M", hair: "orange",        eyes: "orange"  },
  { name: "Yuki Sohma",            series: "Fruits Basket",           age: 16,   height: 170, gender: "M", hair: "grey",          eyes: "grey"    },
  { name: "Shigure Sohma",         series: "Fruits Basket",           age: 27,   height: 178, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Akito Sohma",           series: "Fruits Basket",           age: 18,   height: 162, gender: "F", hair: "black",         eyes: "grey"    },

  // ── GOLDEN KAMUY (HISTORICAL ADVENTURE) ───────────────────────────────────
  { name: "Saichi Sugimoto",       series: "Golden Kamuy",            age: 24,   height: 175, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Asirpa",                series: "Golden Kamuy",            age: 13,   height: 145, gender: "F", hair: "black",         eyes: "blue"    },
  { name: "Hyakunosuke Ogata",     series: "Golden Kamuy",            age: 24,   height: 178, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Yoshitake Shiraishi",   series: "Golden Kamuy",            age: 24,   height: 168, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Ienaga Kiroranke",      series: "Golden Kamuy",            age: 40,   height: 180, gender: "M", hair: "black",         eyes: "black"   },

  // ── BERSERK (DARK FANTASY) ────────────────────────────────────────────────
  { name: "Guts",                  series: "Berserk",                 age: 24,   height: 204, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Griffith",              series: "Berserk",                 age: 24,   height: 178, gender: "M", hair: "white",         eyes: "blue"    },
  { name: "Casca",                 series: "Berserk",                 age: 24,   height: 165, gender: "F", hair: "black",         eyes: "brown"   },
  { name: "Judeau",                series: "Berserk",                 age: 22,   height: 170, gender: "M", hair: "brown",         eyes: "blue"    },
  { name: "Pippin",                series: "Berserk",                 age: 25,   height: 210, gender: "M", hair: "black",         eyes: "black"   },

  // ── IS THIS A ZOMBIE? (COMEDY / ECCHI) ────────────────────────────────────
  { name: "Ayumu Aikawa",          series: "Is This a Zombie?",       age: 16,   height: 172, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Eucliwood Hellscythe",  series: "Is This a Zombie?",       age: 16,   height: 155, gender: "F", hair: "silver",        eyes: "violet"  },
  { name: "Haruna",                series: "Is This a Zombie?",       age: 13,   height: 152, gender: "F", hair: "blonde",        eyes: "green"   },
  { name: "Seraphim",              series: "Is This a Zombie?",       age: 17,   height: 165, gender: "F", hair: "black",         eyes: "green"   },

  // ── SWORD ART ONLINE (already) ───────────────────────────────────────────

  // ── BLUE EXORCIST (SUPERNATURAL / ACTION) ─────────────────────────────────
  { name: "Rin Okumura",           series: "Blue Exorcist",           age: 15,   height: 173, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Yukio Okumura",         series: "Blue Exorcist",           age: 15,   height: 180, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Shiemi Moriyama",       series: "Blue Exorcist",           age: 15,   height: 160, gender: "F", hair: "blonde",        eyes: "green"   },
  { name: "Ryuji Suguro",          series: "Blue Exorcist",           age: 15,   height: 180, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Mephisto Pheles",       series: "Blue Exorcist",           age: 800,  height: 183, gender: "M", hair: "white",         eyes: "purple"  },

  // ── SAMURAI CHAMPLOO (HISTORICAL / ACTION) ─────────────────────────────────
  { name: "Shino",                 series: "Samurai Champloo",        age: 16,   height: 157, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Mugen",                 series: "Samurai Champloo",        age: 19,   height: 177, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Jin",                   series: "Samurai Champloo",        age: 20,   height: 178, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Fuu",                   series: "Samurai Champloo",        age: 15,   height: 155, gender: "F", hair: "brown",         eyes: "brown"   },

  // ── DRAGON MAID (COMEDY / ISEKAI) ─────────────────────────────────────────
  { name: "Kobayashi",             series: "Miss Kobayashi's Dragon Maid", age: 25, height: 162, gender: "F", hair: "red",        eyes: "brown"   },
  { name: "Tohru",                 series: "Miss Kobayashi's Dragon Maid", age: 1000, height: 165, gender: "F", hair: "blonde,green", eyes: "teal"},
  { name: "Kanna Kamui",           series: "Miss Kobayashi's Dragon Maid", age: 300, height: 125, gender: "F", hair: "silver,blue",  eyes: "violet"},
  { name: "Lucoa",                 series: "Miss Kobayashi's Dragon Maid", age: 1000, height: 175, gender: "F", hair: "blonde,green", eyes: "blue" },
  { name: "Fafnir",                series: "Miss Kobayashi's Dragon Maid", age: 1000, height: 178, gender: "M", hair: "black",       eyes: "red"   },

  // ── ERASED (MYSTERY / THRILLER) ───────────────────────────────────────────
  { name: "Satoru Fujinuma",       series: "Erased",                  age: 29,   height: 174, gender: "M", hair: "brown",         eyes: "blue"    },
  { name: "Kayo Hinazuki",         series: "Erased",                  age: 10,   height: 135, gender: "F", hair: "brown",         eyes: "blue"    },
  { name: "Kenya Kobayashi",       series: "Erased",                  age: 10,   height: 140, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Airi Katagiri",         series: "Erased",                  age: 17,   height: 162, gender: "F", hair: "brown",         eyes: "brown"   },

  // ── PSYCHO-PASS (SCI-FI / DYSTOPIA) ──────────────────────────────────────
  { name: "Akane Tsunemori",       series: "Psycho-Pass",             age: 20,   height: 160, gender: "F", hair: "black",         eyes: "brown"   },
  { name: "Shinya Kogami",         series: "Psycho-Pass",             age: 28,   height: 181, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Shogo Makishima",       series: "Psycho-Pass",             age: 27,   height: 180, gender: "M", hair: "white",         eyes: "red"     },
  { name: "Nobuchika Ginoza",      series: "Psycho-Pass",             age: 29,   height: 180, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Tomomi Masaoka",        series: "Psycho-Pass",             age: 52,   height: 183, gender: "M", hair: "black",         eyes: "brown"   },

  // ── BLACK LAGOON (ACTION / CRIME) ─────────────────────────────────────────
  { name: "Revy",                  series: "Black Lagoon",            age: 25,   height: 165, gender: "F", hair: "black",         eyes: "red"     },
  { name: "Rock",                  series: "Black Lagoon",            age: 25,   height: 175, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Dutch",                 series: "Black Lagoon",            age: 35,   height: 185, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Benny",                 series: "Black Lagoon",            age: 28,   height: 178, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Balalaika",             series: "Black Lagoon",            age: 35,   height: 174, gender: "F", hair: "blonde",        eyes: "blue"    },

  // ── DEVILMAN CRYBABY (DARK / PSYCHOLOGICAL) ───────────────────────────────
  { name: "Akira Fudo",            series: "Devilman Crybaby",        age: 16,   height: 172, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Ryo Asuka",             series: "Devilman Crybaby",        age: 16,   height: 175, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Miki Makimura",         series: "Devilman Crybaby",        age: 16,   height: 162, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Miki Kuroda",           series: "Devilman Crybaby",        age: 16,   height: 160, gender: "F", hair: "black",         eyes: "brown"   },

  // ── GHOST IN THE SHELL: STAND ALONE COMPLEX (SCI-FI) ─────────────────────
  { name: "Motoko Kusanagi",       series: "Ghost in the Shell",      age: 30,   height: 168, gender: "F", hair: "purple",        eyes: "red"     },
  { name: "Batou",                 series: "Ghost in the Shell",      age: 35,   height: 187, gender: "M", hair: "grey",          eyes: "white"   },
  { name: "Togusa",                series: "Ghost in the Shell",      age: 30,   height: 175, gender: "M", hair: "brown",         eyes: "blue"    },
  { name: "Saito",                 series: "Ghost in the Shell",      age: 35,   height: 180, gender: "M", hair: "black",         eyes: "brown"   },

  // ── GINTAMA (COMEDY / ACTION) ─────────────────────────────────────────────
  { name: "Gintoki Sakata",        series: "Gintama",                 age: 25,   height: 177, gender: "M", hair: "silver",        eyes: "red"     },
  { name: "Shinpachi Shimura",     series: "Gintama",                 age: 16,   height: 168, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Kagura",                series: "Gintama",                 age: 14,   height: 156, gender: "F", hair: "orange",        eyes: "red"     },
  { name: "Toshiro Hijikata",      series: "Gintama",                 age: 27,   height: 178, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Isao Kondo",            series: "Gintama",                 age: 27,   height: 177, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Kotaro Katsura",        series: "Gintama",                 age: 25,   height: 175, gender: "M", hair: "black",         eyes: "blue"    },

  // ── BUNGO STRAY DOGS (ACTION / MYSTERY) ───────────────────────────────────
  { name: "Atsushi Nakajima",      series: "Bungo Stray Dogs",        age: 18,   height: 174, gender: "M", hair: "white",         eyes: "grey"    },
  { name: "Osamu Dazai",           series: "Bungo Stray Dogs",        age: 22,   height: 181, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Doppo Kunikida",        series: "Bungo Stray Dogs",        age: 22,   height: 189, gender: "M", hair: "blonde",        eyes: "green"   },
  { name: "Ryunosuke Akutagawa",   series: "Bungo Stray Dogs",        age: 20,   height: 171, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Chuya Nakahara",        series: "Bungo Stray Dogs",        age: 22,   height: 160, gender: "M", hair: "auburn",        eyes: "blue"    },
  { name: "Kyoka Izumi",           series: "Bungo Stray Dogs",        age: 14,   height: 155, gender: "F", hair: "black",         eyes: "blue"    },

  // ── PARADISE KISS (JOSEI / ROMANCE / FASHION) ─────────────────────────────
  { name: "Yukari Hayasaka",       series: "Paradise Kiss",           age: 17,   height: 165, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "George Koizumi",        series: "Paradise Kiss",           age: 18,   height: 180, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Isabella (ParaKiss)",   series: "Paradise Kiss",           age: 18,   height: 182, gender: "F", hair: "black",         eyes: "brown"   },
  { name: "Arashi Nagase",         series: "Paradise Kiss",           age: 18,   height: 178, gender: "M", hair: "blue",          eyes: "blue"    },

  // ── SKIP AND LOAFER (SLICE OF LIFE / ROMANCE 2023) ────────────────────────
  { name: "Mitsumi Iwakura",       series: "Skip and Loafer",         age: 16,   height: 163, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Sousuke Shima",         series: "Skip and Loafer",         age: 16,   height: 177, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Ririka Ueda",           series: "Skip and Loafer",         age: 16,   height: 158, gender: "F", hair: "blonde",        eyes: "blue"    },
  { name: "Makoto Kurume",         series: "Skip and Loafer",         age: 16,   height: 160, gender: "F", hair: "black",         eyes: "brown"   },

  // ── SPY X FAMILY (already covered) ──────────────────────────────────────

  // ── OSHI NO KO (DRAMA / IDOL) ─────────────────────────────────────────────
  { name: "Aquamarine Hoshino",    series: "Oshi no Ko",              age: 16,   height: 170, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Ruby Hoshino",          series: "Oshi no Ko",              age: 16,   height: 156, gender: "F", hair: "pink",          eyes: "red"     },
  { name: "Ai Hoshino",            series: "Oshi no Ko",              age: 20,   height: 163, gender: "F", hair: "pink",          eyes: "blue"    },
  { name: "Kana Arima",            series: "Oshi no Ko",              age: 16,   height: 153, gender: "F", hair: "blonde",        eyes: "red"     },
  { name: "Memcho",                series: "Oshi no Ko",              age: 20,   height: 158, gender: "F", hair: "blonde",        eyes: "brown"   },

  // ── ZATCH BELL (SHONEN) ───────────────────────────────────────────────────
  { name: "Zatch Bell",            series: "Zatch Bell",              age: 6,    height: 130, gender: "M", hair: "blonde",        eyes: "gold"    },
  { name: "Kiyo Takamine",         series: "Zatch Bell",              age: 14,   height: 170, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Tia",                   series: "Zatch Bell",              age: 6,    height: 128, gender: "F", hair: "red",           eyes: "green"   },
  { name: "Brago",                 series: "Zatch Bell",              age: 8,    height: 150, gender: "M", hair: "black",         eyes: "red"     },

  // ── DORORO (HISTORICAL / DARK) ────────────────────────────────────────────
  { name: "Hyakkimaru",            series: "Dororo",                  age: 16,   height: 173, gender: "M", hair: "black",         eyes: "white"   },
  { name: "Dororo",                series: "Dororo",                  age: 10,   height: 135, gender: "F", hair: "black",         eyes: "brown"   },
  { name: "Tahoumaru",             series: "Dororo",                  age: 15,   height: 165, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Daigo Kagemitsu",       series: "Dororo",                  age: 45,   height: 183, gender: "M", hair: "black",         eyes: "grey"    },

  // ── NICHIJOU (COMEDY / SLICE OF LIFE) ─────────────────────────────────────
  { name: "Yuko Aioi",             series: "Nichijou",                age: 16,   height: 157, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Mio Naganohara",        series: "Nichijou",                age: 16,   height: 162, gender: "F", hair: "blue",          eyes: "brown"   },
  { name: "Mai Minakami",          series: "Nichijou",                age: 16,   height: 165, gender: "F", hair: "black",         eyes: "grey"    },
  { name: "Nano Shinonome",        series: "Nichijou",                age: 16,   height: 157, gender: "F", hair: "brown",         eyes: "red"     },

  // ── GURREN LAGANN (MECHA / ACTION) ────────────────────────────────────────
  { name: "Simon",                 series: "Gurren Lagann",           age: 14,   height: 158, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Kamina",                series: "Gurren Lagann",           age: 18,   height: 183, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Yoko Littner",          series: "Gurren Lagann",           age: 14,   height: 167, gender: "F", hair: "red",           eyes: "yellow"  },
  { name: "Nia Teppelin",          series: "Gurren Lagann",           age: 14,   height: 156, gender: "F", hair: "blue",          eyes: "blue"    },
  { name: "Viral",                 series: "Gurren Lagann",           age: 20,   height: 188, gender: "M", hair: "white",         eyes: "yellow"  },

  // ── NATSUME'S BOOK OF FRIENDS (SUPERNATURAL / SLICE OF LIFE) ─────────────
  { name: "Takashi Natsume",       series: "Natsume's Book of Friends", age: 15, height: 170, gender: "M", hair: "blonde",        eyes: "gold"    },
  { name: "Madara (Nyanko-sensei)",series: "Natsume's Book of Friends", age: 1000,height: 30, gender: "M", hair: "white",         eyes: "red"     },
  { name: "Touko Fujiwara",        series: "Natsume's Book of Friends", age: 45, height: 160, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Kaname Tanuma",         series: "Natsume's Book of Friends", age: 15, height: 173, gender: "M", hair: "black",         eyes: "grey"    },

  // ── 86 EIGHTY-SIX ──────────────────────────────────────────────────────
  { name: "Shinei Nouzen",    series: "86", age: 17, height: 172, gender: "M", hair: "black",  eyes: "red"    },
  { name: "Vladilena Milize", series: "86", age: 16, height: 163, gender: "F", hair: "silver", eyes: "violet" },

   // ── KUROKO'S BASKETBALL ───────────────────────────────────────────────────
  { name: "Tetsuya Kuroko",          series: "Kuroko's Basketball",     age: 16,   height: 168, gender: "M", hair: "blue",          eyes: "blue"    },
  { name: "Taiga Kagami",            series: "Kuroko's Basketball",     age: 16,   height: 190, gender: "M", hair: "red,black",     eyes: "red"     },
  { name: "Ryota Kise",              series: "Kuroko's Basketball",     age: 16,   height: 189, gender: "M", hair: "blonde",        eyes: "golden"  },
  { name: "Shintaro Midorima",       series: "Kuroko's Basketball",     age: 16,   height: 195, gender: "M", hair: "green",         eyes: "green"   },
  { name: "Daiki Aomine",            series: "Kuroko's Basketball",     age: 16,   height: 192, gender: "M", hair: "dark blue",     eyes: "dark blue"},
  { name: "Atsushi Murasakibara",    series: "Kuroko's Basketball",     age: 16,   height: 208, gender: "M", hair: "purple",        eyes: "purple"  },
  { name: "Seijuro Akashi",          series: "Kuroko's Basketball",     age: 16,   height: 173, gender: "M", hair: "red",           eyes: "red"     },
  { name: "Junpei Hyuga",            series: "Kuroko's Basketball",     age: 17,   height: 178, gender: "M", hair: "black",         eyes: "brown"   },
 
  // ── YURI ON ICE (FIGURE SKATING) ─────────────────────────────────────────
  { name: "Yuri Katsuki",            series: "Yuri on Ice",             age: 23,   height: 173, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Victor Nikiforov",        series: "Yuri on Ice",             age: 27,   height: 180, gender: "M", hair: "silver",        eyes: "blue"    },
  { name: "Yuri Plisetsky",          series: "Yuri on Ice",             age: 15,   height: 163, gender: "M", hair: "blonde",        eyes: "green"   },
  { name: "Phichit Chulanont",       series: "Yuri on Ice",             age: 20,   height: 168, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Christophe Giacometti",   series: "Yuri on Ice",             age: 26,   height: 180, gender: "M", hair: "brown",         eyes: "green"   },
 
  // ── FREE! (SWIMMING) ─────────────────────────────────────────────────────
  { name: "Haruka Nanase",           series: "Free!",                   age: 17,   height: 175, gender: "M", hair: "black",         eyes: "blue"    },
  { name: "Makoto Tachibana",        series: "Free!",                   age: 17,   height: 183, gender: "M", hair: "brown",         eyes: "green"   },
  { name: "Nagisa Hazuki",           series: "Free!",                   age: 16,   height: 165, gender: "M", hair: "blonde",        eyes: "pink"    },
  { name: "Rei Ryugazaki",           series: "Free!",                   age: 16,   height: 177, gender: "M", hair: "dark blue",     eyes: "violet"  },
  { name: "Rin Matsuoka",            series: "Free!",                   age: 17,   height: 177, gender: "M", hair: "red",           eyes: "red"     },
  { name: "Sousuke Yamazaki",        series: "Free!",                   age: 18,   height: 185, gender: "M", hair: "teal",          eyes: "teal"    },
  { name: "Aiichiro Nitori",         series: "Free!",                   age: 15,   height: 170, gender: "M", hair: "silver",        eyes: "grey"    },
 
  // ── UMAMUSUME: PRETTY DERBY (HORSE RACING) ───────────────────────────────
  { name: "Special Week",            series: "Umamusume: Pretty Derby", age: 17,   height: 158, gender: "F", hair: "black,white",   eyes: "blue"    },
  { name: "Silence Suzuka",          series: "Umamusume: Pretty Derby", age: 17,   height: 165, gender: "F", hair: "white",         eyes: "red"     },
  { name: "Tokai Teio",              series: "Umamusume: Pretty Derby", age: 17,   height: 154, gender: "F", hair: "white",         eyes: "purple"  },
  { name: "Mejiro McQueen",          series: "Umamusume: Pretty Derby", age: 17,   height: 162, gender: "F", hair: "white",         eyes: "purple"  },
  { name: "Gold Ship",               series: "Umamusume: Pretty Derby", age: 17,   height: 163, gender: "F", hair: "silver",        eyes: "purple"  },
  { name: "Vodka",                   series: "Umamusume: Pretty Derby", age: 17,   height: 158, gender: "F", hair: "black",         eyes: "blue"    },
  { name: "Daiwa Scarlet",           series: "Umamusume: Pretty Derby", age: 17,   height: 160, gender: "F", hair: "red",           eyes: "red"     },
  { name: "El Condor Pasa",          series: "Umamusume: Pretty Derby", age: 17,   height: 161, gender: "F", hair: "brown",         eyes: "brown"   },
  { name: "Grass Wonder",            series: "Umamusume: Pretty Derby", age: 17,   height: 159, gender: "F", hair: "blonde",        eyes: "green"   },
  { name: "Oguri Cap",               series: "Umamusume: Pretty Derby", age: 17,   height: 157, gender: "F", hair: "white",         eyes: "blue"    },
  { name: "Symboli Rudolf",          series: "Umamusume: Pretty Derby", age: 17,   height: 166, gender: "F", hair: "black",         eyes: "red"     },
  { name: "Narita Brian",            series: "Umamusume: Pretty Derby", age: 17,   height: 163, gender: "F", hair: "black,white",   eyes: "orange"  },
 
  // ── UMAMUSUME: CINDERELLA GREY (HORSE RACING) ────────────────────────────
  { name: "Oguri Cap (Cinderella Grey)", series: "Umamusume: Cinderella Grey", age: 17, height: 157, gender: "F", hair: "white",    eyes: "blue"    },
  { name: "Super Creek",             series: "Umamusume: Cinderella Grey", age: 17, height: 164,  gender: "F", hair: "teal",        eyes: "teal"    },
  { name: "Tamamo Cross",            series: "Umamusume: Cinderella Grey", age: 17, height: 156,  gender: "F", hair: "red",         eyes: "red"     },
  { name: "Inari One",               series: "Umamusume: Cinderella Grey", age: 17, height: 158,  gender: "F", hair: "brown",       eyes: "brown"   },
  { name: "Yamanin Zephyr",          series: "Umamusume: Cinderella Grey", age: 17, height: 160,  gender: "F", hair: "blue",        eyes: "blue"    },
  { name: "Hokuto Vega",             series: "Umamusume: Cinderella Grey", age: 17, height: 162,  gender: "F", hair: "purple",      eyes: "purple"  },
 
  // ── PING PONG THE ANIMATION ───────────────────────────────────────────────
  { name: "Makoto Tsukimoto (Smile)", series: "Ping Pong the Animation", age: 17,  height: 170, gender: "M", hair: "black",         eyes: "grey"    },
  { name: "Yutaka Hoshino (Peco)",   series: "Ping Pong the Animation", age: 17,   height: 173, gender: "M", hair: "blonde",        eyes: "brown"   },
  { name: "Ryuichi Kazama (Dragon)", series: "Ping Pong the Animation", age: 17,   height: 176, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Wenge Kong (China)",      series: "Ping Pong the Animation", age: 17,   height: 180, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Manabu Sakuma (Demon)",   series: "Ping Pong the Animation", age: 17,   height: 168, gender: "M", hair: "brown",         eyes: "brown"   },
 
  // ── AO ASHI (FOOTBALL) ────────────────────────────────────────────────────
  { name: "Ashito Aoi",              series: "Ao Ashi",                 age: 15,   height: 173, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Kanpei Hana",             series: "Ao Ashi",                 age: 16,   height: 170, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Norbert Lotte",           series: "Ao Ashi",                 age: 16,   height: 178, gender: "M", hair: "blonde",        eyes: "blue"    },
  { name: "Eita Otomo",              series: "Ao Ashi",                 age: 15,   height: 172, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Akutsu Taiyo",            series: "Ao Ashi",                 age: 15,   height: 180, gender: "M", hair: "black",         eyes: "grey"    },
 
  // ── EYESHIELD 21 (AMERICAN FOOTBALL) ─────────────────────────────────────
  { name: "Sena Kobayakawa",         series: "Eyeshield 21",            age: 15,   height: 165, gender: "M", hair: "brown",         eyes: "brown"   },
  { name: "Yoichi Hiruma",           series: "Eyeshield 21",            age: 16,   height: 175, gender: "M", hair: "blonde",        eyes: "black"   },
  { name: "Ryokan Kurita",           series: "Eyeshield 21",            age: 16,   height: 175, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Taro Raimon (Monta)",     series: "Eyeshield 21",            age: 15,   height: 170, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Kazuki Jumonji",          series: "Eyeshield 21",            age: 16,   height: 174, gender: "M", hair: "black",         eyes: "brown"   },
  { name: "Seijuro Shin",            series: "Eyeshield 21",            age: 16,   height: 180, gender: "M", hair: "black",         eyes: "black"   },
  { name: "Riku Kaitani",            series: "Eyeshield 21",            age: 15,   height: 163, gender: "M", hair: "brown",         eyes: "brown"   },
    
];

const ALL_SERIES = [...new Set(ANIME_DB.map(c => c.series))].sort();
