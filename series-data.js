// ── ANIDLE SERIES DATABASE ────────────────────────────────────────────────
// Fields:
//   name      – display name
//   studio    – main animation studio
//   year      – first air year
//   episodes  – total episode count (main series; use 1 for films)
//   genre     – primary genre tag (keep short for display)
//   source    – "Manga" | "Light Novel" | "Original" | "Game" | "Novel" | "Visual Novel"
//   score     – MAL score (out of 10, one decimal)
//   status    – "Finished" | "Ongoing" | "Film"
//   genreList – array of tags used for yellow partial matching

const SERIES_DB = [

  // ── SHONEN / ACTION ────────────────────────────────────────────────────────
  { name: "Naruto",                         studio: "Pierrot",            year: 2002, episodes: 220,  genre: "Action",       source: "Manga",        score: 7.9,  status: "Finished", genreList: ["Action","Adventure","Martial Arts","Shounen"] },
  { name: "Naruto: Shippuden",              studio: "Pierrot",            year: 2007, episodes: 500,  genre: "Action",       source: "Manga",        score: 8.1,  status: "Finished", genreList: ["Action","Adventure","Martial Arts","Shounen"] },
  { name: "Bleach",                         studio: "Pierrot",            year: 2004, episodes: 366,  genre: "Action",       source: "Manga",        score: 7.9,  status: "Finished", genreList: ["Action","Adventure","Supernatural","Shounen"] },
  { name: "One Piece",                      studio: "Toei Animation",     year: 1999, episodes: 1100, genre: "Adventure",    source: "Manga",        score: 8.7,  status: "Ongoing",  genreList: ["Action","Adventure","Comedy","Shounen"] },
  { name: "Dragon Ball Z",                  studio: "Toei Animation",     year: 1989, episodes: 291,  genre: "Action",       source: "Manga",        score: 8.1,  status: "Finished", genreList: ["Action","Adventure","Martial Arts","Shounen"] },
  { name: "Dragon Ball Super",              studio: "Toei Animation",     year: 2015, episodes: 131,  genre: "Action",       source: "Manga",        score: 7.4,  status: "Finished", genreList: ["Action","Adventure","Martial Arts","Shounen"] },
  { name: "Demon Slayer",                   studio: "ufotable",           year: 2019, episodes: 44,   genre: "Action",       source: "Manga",        score: 8.6,  status: "Ongoing",  genreList: ["Action","Supernatural","Historical","Shounen"] },
  { name: "Jujutsu Kaisen",                 studio: "MAPPA",              year: 2020, episodes: 47,   genre: "Action",       source: "Manga",        score: 8.7,  status: "Ongoing",  genreList: ["Action","Supernatural","School","Shounen"] },
  { name: "My Hero Academia",               studio: "Bones",              year: 2016, episodes: 138,  genre: "Superhero",    source: "Manga",        score: 7.9,  status: "Finished", genreList: ["Action","Superhero","School","Shounen"] },
  { name: "Chainsaw Man",                   studio: "MAPPA",              year: 2022, episodes: 12,   genre: "Action",       source: "Manga",        score: 8.6,  status: "Ongoing",  genreList: ["Action","Supernatural","Dark Fantasy","Seinen"] },
  { name: "Black Clover",                   studio: "Pierrot",            year: 2017, episodes: 170,  genre: "Action",       source: "Manga",        score: 7.9,  status: "Finished", genreList: ["Action","Magic","Adventure","Shounen"] },
  { name: "Fairy Tail",                     studio: "A-1 Pictures",       year: 2009, episodes: 328,  genre: "Adventure",    source: "Manga",        score: 7.6,  status: "Finished", genreList: ["Action","Adventure","Magic","Shounen"] },
  { name: "One Punch Man",                  studio: "Madhouse",           year: 2015, episodes: 12,   genre: "Action",       source: "Manga",        score: 8.7,  status: "Ongoing",  genreList: ["Action","Comedy","Superhero","Seinen"] },
  { name: "Gurren Lagann",                  studio: "Gainax",             year: 2007, episodes: 27,   genre: "Mecha",        source: "Original",     score: 8.6,  status: "Finished", genreList: ["Action","Mecha","Adventure","Sci-Fi"] },
  { name: "Fullmetal Alchemist: Brotherhood",studio: "Bones",             year: 2009, episodes: 64,   genre: "Action",       source: "Manga",        score: 9.1,  status: "Finished", genreList: ["Action","Adventure","Drama","Shounen"] },
  { name: "Fullmetal Alchemist",            studio: "Bones",              year: 2003, episodes: 51,   genre: "Action",       source: "Manga",        score: 8.2,  status: "Finished", genreList: ["Action","Adventure","Drama","Shounen"] },
  { name: "Hunter x Hunter",               studio: "Madhouse",           year: 2011, episodes: 148,  genre: "Adventure",    source: "Manga",        score: 9.1,  status: "Finished", genreList: ["Action","Adventure","Supernatural","Shounen"] },
  { name: "Yu Yu Hakusho",                  studio: "Pierrot",            year: 1992, episodes: 112,  genre: "Action",       source: "Manga",        score: 8.5,  status: "Finished", genreList: ["Action","Supernatural","Martial Arts","Shounen"] },
  { name: "Rurouni Kenshin",                studio: "Studio Gallop",      year: 1996, episodes: 94,   genre: "Action",       source: "Manga",        score: 8.3,  status: "Finished", genreList: ["Action","Historical","Martial Arts","Shounen"] },
  { name: "Blue Exorcist",                  studio: "A-1 Pictures",       year: 2011, episodes: 25,   genre: "Action",       source: "Manga",        score: 7.6,  status: "Ongoing",  genreList: ["Action","Supernatural","School","Shounen"] },
  { name: "Soul Eater",                     studio: "Bones",              year: 2008, episodes: 51,   genre: "Action",       source: "Manga",        score: 7.9,  status: "Finished", genreList: ["Action","Supernatural","Comedy","Shounen"] },
  { name: "Assassination Classroom",        studio: "Lerche",             year: 2015, episodes: 47,   genre: "Action",       source: "Manga",        score: 8.1,  status: "Finished", genreList: ["Action","Comedy","School","Shounen"] },
  { name: "Sword Art Online",               studio: "A-1 Pictures",       year: 2012, episodes: 25,   genre: "Isekai",       source: "Light Novel",  score: 7.2,  status: "Finished", genreList: ["Action","Adventure","Fantasy","Isekai"] },
  { name: "Inuyasha",                       studio: "Sunrise",            year: 2000, episodes: 167,  genre: "Adventure",    source: "Manga",        score: 7.9,  status: "Finished", genreList: ["Action","Adventure","Romance","Shounen"] },
  { name: "Akame ga Kill",                  studio: "White Fox",          year: 2014, episodes: 24,   genre: "Action",       source: "Manga",        score: 7.5,  status: "Finished", genreList: ["Action","Adventure","Dark Fantasy","Seinen"] },
  { name: "Black Lagoon",                   studio: "Madhouse",           year: 2006, episodes: 12,   genre: "Action",       source: "Manga",        score: 8.1,  status: "Finished", genreList: ["Action","Adventure","Crime","Seinen"] },
  { name: "Samurai Champloo",               studio: "Manglobe",           year: 2004, episodes: 26,   genre: "Action",       source: "Original",     score: 8.5,  status: "Finished", genreList: ["Action","Adventure","Historical","Seinen"] },
  { name: "D.Gray-man",                     studio: "TMS Entertainment",  year: 2006, episodes: 103,  genre: "Action",       source: "Manga",        score: 7.7,  status: "Finished", genreList: ["Action","Supernatural","Adventure","Shounen"] },
  { name: "Katekyo Hitman Reborn",          studio: "Artland",            year: 2006, episodes: 203,  genre: "Action",       source: "Manga",        score: 8.1,  status: "Finished", genreList: ["Action","Adventure","Comedy","Shounen"] },
  { name: "Bungo Stray Dogs",               studio: "Bones",              year: 2016, episodes: 36,   genre: "Action",       source: "Manga",        score: 7.8,  status: "Ongoing",  genreList: ["Action","Mystery","Supernatural","Seinen"] },
  { name: "The Seven Deadly Sins",          studio: "A-1 Pictures",       year: 2014, episodes: 24,   genre: "Action",       source: "Manga",        score: 7.7,  status: "Finished", genreList: ["Action","Adventure","Fantasy","Shounen"] },
  { name: "Dororo",                         studio: "MAPPA",              year: 2019, episodes: 24,   genre: "Action",       source: "Manga",        score: 8.2,  status: "Finished", genreList: ["Action","Adventure","Historical","Supernatural"] },
  { name: "Magi",                           studio: "A-1 Pictures",       year: 2012, episodes: 25,   genre: "Adventure",    source: "Manga",        score: 8.1,  status: "Finished", genreList: ["Action","Adventure","Fantasy","Shounen"] },
  { name: "Shaman King",                    studio: "Xebec",              year: 2001, episodes: 64,   genre: "Action",       source: "Manga",        score: 7.6,  status: "Finished", genreList: ["Action","Adventure","Supernatural","Shounen"] },

  // ── PEAK / PRESTIGE ───────────────────────────────────────────────────────
  { name: "Attack on Titan",                studio: "Wit Studio",         year: 2013, episodes: 87,   genre: "Dark Fantasy", source: "Manga",        score: 9.0,  status: "Finished", genreList: ["Action","Dark Fantasy","Drama","Seinen"] },
  { name: "Steins;Gate",                    studio: "White Fox",          year: 2011, episodes: 24,   genre: "Sci-Fi",       source: "Visual Novel", score: 9.1,  status: "Finished", genreList: ["Sci-Fi","Thriller","Drama","Romance"] },
  { name: "Vinland Saga",                   studio: "Wit Studio",         year: 2019, episodes: 48,   genre: "Historical",   source: "Manga",        score: 8.8,  status: "Ongoing",  genreList: ["Action","Adventure","Historical","Drama"] },
  { name: "Cowboy Bebop",                   studio: "Sunrise",            year: 1998, episodes: 26,   genre: "Sci-Fi",       source: "Original",     score: 8.8,  status: "Finished", genreList: ["Action","Adventure","Sci-Fi","Drama"] },
  { name: "Neon Genesis Evangelion",        studio: "Gainax",             year: 1995, episodes: 26,   genre: "Mecha",        source: "Original",     score: 8.5,  status: "Finished", genreList: ["Mecha","Psychological","Sci-Fi","Drama"] },
  { name: "Berserk",                        studio: "OLM",                year: 1997, episodes: 25,   genre: "Dark Fantasy", source: "Manga",        score: 8.6,  status: "Finished", genreList: ["Action","Dark Fantasy","Adventure","Seinen"] },
  { name: "Frieren: Beyond Journey's End",  studio: "Madhouse",           year: 2023, episodes: 28,   genre: "Fantasy",      source: "Manga",        score: 9.3,  status: "Finished", genreList: ["Fantasy","Adventure","Drama","Slice of Life"] },
  { name: "Gintama",                        studio: "Sunrise",            year: 2006, episodes: 367,  genre: "Comedy",       source: "Manga",        score: 9.0,  status: "Finished", genreList: ["Comedy","Action","Parody","Shounen"] },
  { name: "86",                             studio: "A-1 Pictures",       year: 2021, episodes: 23,   genre: "Sci-Fi",       source: "Light Novel",  score: 8.4,  status: "Finished", genreList: ["Action","Sci-Fi","Drama","Mecha"] },
  { name: "Mob Psycho 100",                 studio: "Bones",              year: 2016, episodes: 12,   genre: "Action",       source: "Manga",        score: 8.6,  status: "Finished", genreList: ["Action","Comedy","Supernatural","Slice of Life"] },

  // ── PSYCHOLOGICAL / THRILLER ──────────────────────────────────────────────
  { name: "Death Note",                     studio: "Madhouse",           year: 2006, episodes: 37,   genre: "Psychological",source: "Manga",        score: 8.7,  status: "Finished", genreList: ["Psychological","Thriller","Mystery","Supernatural"] },
  { name: "Code Geass",                     studio: "Sunrise",            year: 2006, episodes: 25,   genre: "Mecha",        source: "Original",     score: 8.7,  status: "Finished", genreList: ["Mecha","Psychological","Drama","Sci-Fi"] },
  { name: "Classroom of the Elite",         studio: "Lerche",             year: 2017, episodes: 13,   genre: "Psychological",source: "Light Novel",  score: 7.8,  status: "Ongoing",  genreList: ["Psychological","Drama","School","Seinen"] },
  { name: "The Promised Neverland",         studio: "CloverWorks",        year: 2019, episodes: 12,   genre: "Psychological",source: "Manga",        score: 8.4,  status: "Finished", genreList: ["Psychological","Thriller","Mystery","Horror"] },
  { name: "Kakegurui",                      studio: "MAPPA",              year: 2017, episodes: 12,   genre: "Psychological",source: "Manga",        score: 7.3,  status: "Finished", genreList: ["Psychological","Thriller","School","Seinen"] },
  { name: "Psycho-Pass",                    studio: "Production I.G",     year: 2012, episodes: 22,   genre: "Sci-Fi",       source: "Original",     score: 8.4,  status: "Finished", genreList: ["Psychological","Sci-Fi","Thriller","Action"] },
  { name: "Erased",                         studio: "A-1 Pictures",       year: 2016, episodes: 12,   genre: "Psychological",source: "Manga",        score: 8.6,  status: "Finished", genreList: ["Psychological","Mystery","Thriller","Drama"] },
  { name: "Monster",                        studio: "Madhouse",           year: 2004, episodes: 74,   genre: "Psychological",source: "Manga",        score: 8.7,  status: "Finished", genreList: ["Psychological","Thriller","Mystery","Drama"] },
  { name: "Serial Experiments Lain",        studio: "Triangle Staff",     year: 1998, episodes: 13,   genre: "Psychological",source: "Original",     score: 8.1,  status: "Finished", genreList: ["Psychological","Sci-Fi","Mystery","Drama"] },
  { name: "Paranoia Agent",                 studio: "Madhouse",           year: 2004, episodes: 13,   genre: "Psychological",source: "Original",     score: 8.1,  status: "Finished", genreList: ["Psychological","Mystery","Thriller","Drama"] },
  { name: "Banana Fish",                    studio: "MAPPA",              year: 2018, episodes: 24,   genre: "Thriller",     source: "Manga",        score: 8.3,  status: "Finished", genreList: ["Action","Thriller","Drama","Shoujo"] },
  { name: "Durarara",                       studio: "Brain's Base",       year: 2010, episodes: 24,   genre: "Psychological",source: "Light Novel",  score: 8.1,  status: "Finished", genreList: ["Psychological","Action","Mystery","Drama"] },
  { name: "Devilman Crybaby",               studio: "Science SARU",       year: 2018, episodes: 10,   genre: "Dark Fantasy", source: "Manga",        score: 7.7,  status: "Finished", genreList: ["Dark Fantasy","Action","Psychological","Drama"] },

  // ── ISEKAI / FANTASY ──────────────────────────────────────────────────────
  { name: "Re:Zero",                        studio: "White Fox",          year: 2016, episodes: 25,   genre: "Isekai",       source: "Light Novel",  score: 8.4,  status: "Ongoing",  genreList: ["Isekai","Fantasy","Psychological","Drama"] },
  { name: "Overlord",                       studio: "Madhouse",           year: 2015, episodes: 13,   genre: "Isekai",       source: "Light Novel",  score: 7.9,  status: "Ongoing",  genreList: ["Isekai","Fantasy","Action","Adventure"] },
  { name: "KonoSuba",                       studio: "Studio Deen",        year: 2016, episodes: 10,   genre: "Isekai",       source: "Light Novel",  score: 8.2,  status: "Ongoing",  genreList: ["Isekai","Fantasy","Comedy","Adventure"] },
  { name: "Mushoku Tensei",                 studio: "Bind",               year: 2021, episodes: 23,   genre: "Isekai",       source: "Light Novel",  score: 8.4,  status: "Finished", genreList: ["Isekai","Fantasy","Adventure","Drama"] },
  { name: "That Time I Got Reincarnated as a Slime", studio: "8bit",     year: 2018, episodes: 24,   genre: "Isekai",       source: "Light Novel",  score: 8.1,  status: "Ongoing",  genreList: ["Isekai","Fantasy","Adventure","Comedy"] },
  { name: "No Game No Life",                studio: "Madhouse",           year: 2014, episodes: 12,   genre: "Isekai",       source: "Light Novel",  score: 8.1,  status: "Finished", genreList: ["Isekai","Fantasy","Comedy","Ecchi"] },
  { name: "Log Horizon",                    studio: "Satelight",          year: 2013, episodes: 25,   genre: "Isekai",       source: "Light Novel",  score: 7.7,  status: "Finished", genreList: ["Isekai","Fantasy","Adventure","Drama"] },
  { name: "Tanya the Evil",                 studio: "NUT",                year: 2017, episodes: 12,   genre: "Isekai",       source: "Light Novel",  score: 8.0,  status: "Finished", genreList: ["Isekai","Action","Military","Drama"] },
  { name: "Shield Hero",                    studio: "Kinema Citrus",      year: 2019, episodes: 25,   genre: "Isekai",       source: "Light Novel",  score: 8.1,  status: "Ongoing",  genreList: ["Isekai","Fantasy","Action","Adventure"] },
  { name: "DanMachi",                       studio: "J.C.Staff",          year: 2015, episodes: 13,   genre: "Fantasy",      source: "Light Novel",  score: 7.6,  status: "Ongoing",  genreList: ["Fantasy","Adventure","Action","Romance"] },
  { name: "Miss Kobayashi's Dragon Maid",   studio: "KyoAni",             year: 2017, episodes: 13,   genre: "Fantasy",      source: "Manga",        score: 8.0,  status: "Ongoing",  genreList: ["Fantasy","Comedy","Slice of Life","Seinen"] },
  { name: "Dungeon Meshi",                  studio: "Trigger",            year: 2024, episodes: 24,   genre: "Fantasy",      source: "Manga",        score: 8.8,  status: "Finished", genreList: ["Fantasy","Adventure","Comedy","Slice of Life"] },

  // ── ROMANCE / SLICE OF LIFE ───────────────────────────────────────────────
  { name: "Toradora",                       studio: "J.C.Staff",          year: 2008, episodes: 25,   genre: "Romance",      source: "Light Novel",  score: 8.1,  status: "Finished", genreList: ["Romance","Comedy","Drama","Slice of Life"] },
  { name: "Your Lie in April",              studio: "A-1 Pictures",       year: 2014, episodes: 22,   genre: "Drama",        source: "Manga",        score: 8.7,  status: "Finished", genreList: ["Drama","Romance","Music","Shounen"] },
  { name: "Kaguya-sama: Love is War",       studio: "A-1 Pictures",       year: 2019, episodes: 12,   genre: "Romance",      source: "Manga",        score: 8.4,  status: "Finished", genreList: ["Romance","Comedy","School","Seinen"] },
  { name: "OreGairu",                       studio: "Brain's Base",       year: 2013, episodes: 13,   genre: "Romance",      source: "Light Novel",  score: 8.1,  status: "Finished", genreList: ["Romance","Drama","School","Slice of Life"] },
  { name: "Violet Evergarden",              studio: "KyoAni",             year: 2018, episodes: 13,   genre: "Drama",        source: "Light Novel",  score: 8.7,  status: "Finished", genreList: ["Drama","Fantasy","Romance","Slice of Life"] },
  { name: "Bocchi the Rock!",               studio: "CloverWorks",        year: 2022, episodes: 12,   genre: "Slice of Life",source: "Manga",        score: 9.0,  status: "Finished", genreList: ["Slice of Life","Music","Comedy","Drama"] },
  { name: "Clannad",                        studio: "KyoAni",             year: 2007, episodes: 23,   genre: "Drama",        source: "Visual Novel", score: 8.1,  status: "Finished", genreList: ["Drama","Romance","Slice of Life","Fantasy"] },
  { name: "Clannad: After Story",           studio: "KyoAni",             year: 2008, episodes: 24,   genre: "Drama",        source: "Visual Novel", score: 8.9,  status: "Finished", genreList: ["Drama","Romance","Slice of Life","Fantasy"] },
  { name: "Fruits Basket",                  studio: "TMS Entertainment",  year: 2019, episodes: 25,   genre: "Romance",      source: "Manga",        score: 8.3,  status: "Finished", genreList: ["Romance","Drama","Fantasy","Shoujo"] },
  { name: "Ouran High School Host Club",    studio: "Bones",              year: 2006, episodes: 26,   genre: "Romance",      source: "Manga",        score: 8.2,  status: "Finished", genreList: ["Romance","Comedy","School","Shoujo"] },
  { name: "March Comes in Like a Lion",     studio: "Shaft",              year: 2016, episodes: 22,   genre: "Drama",        source: "Manga",        score: 8.7,  status: "Finished", genreList: ["Drama","Slice of Life","Game","Seinen"] },
  { name: "Horimiya",                       studio: "CloverWorks",        year: 2021, episodes: 13,   genre: "Romance",      source: "Manga",        score: 8.1,  status: "Finished", genreList: ["Romance","Comedy","School","Slice of Life"] },
  { name: "Natsume's Book of Friends",      studio: "Brain's Base",       year: 2008, episodes: 13,   genre: "Slice of Life",source: "Manga",        score: 8.5,  status: "Ongoing",  genreList: ["Slice of Life","Supernatural","Fantasy","Shoujo"] },
  { name: "Anohana",                        studio: "A-1 Pictures",       year: 2011, episodes: 11,   genre: "Drama",        source: "Original",     score: 8.4,  status: "Finished", genreList: ["Drama","Slice of Life","Supernatural","Romance"] },
  { name: "Nana",                           studio: "Madhouse",           year: 2006, episodes: 47,   genre: "Drama",        source: "Manga",        score: 8.5,  status: "Finished", genreList: ["Drama","Romance","Music","Josei"] },
  { name: "Angel Beats!",                   studio: "P.A.Works",          year: 2010, episodes: 13,   genre: "Drama",        source: "Original",     score: 8.1,  status: "Finished", genreList: ["Drama","Action","Comedy","Supernatural"] },
  { name: "K-On!",                          studio: "KyoAni",             year: 2009, episodes: 13,   genre: "Slice of Life",source: "Manga",        score: 7.8,  status: "Finished", genreList: ["Slice of Life","Music","Comedy","School"] },
  { name: "Nichijou",                       studio: "KyoAni",             year: 2011, episodes: 26,   genre: "Comedy",       source: "Manga",        score: 8.6,  status: "Finished", genreList: ["Comedy","Slice of Life","School","Parody"] },
  { name: "Yuru Camp",                      studio: "C-Station",          year: 2018, episodes: 12,   genre: "Slice of Life",source: "Manga",        score: 8.4,  status: "Ongoing",  genreList: ["Slice of Life","Comedy","Adventure","Seinen"] },
  { name: "Skip and Loafer",                studio: "P.A.Works",          year: 2023, episodes: 12,   genre: "Slice of Life",source: "Manga",        score: 8.4,  status: "Finished", genreList: ["Slice of Life","Romance","Comedy","School"] },

  // ── SPORTS ────────────────────────────────────────────────────────────────
  { name: "Haikyuu!!",                      studio: "Production I.G",     year: 2014, episodes: 25,   genre: "Sports",       source: "Manga",        score: 8.6,  status: "Finished", genreList: ["Sports","Drama","Comedy","Shounen"] },
  { name: "Blue Lock",                      studio: "Eight Bit",          year: 2022, episodes: 24,   genre: "Sports",       source: "Manga",        score: 8.5,  status: "Ongoing",  genreList: ["Sports","Action","Drama","Shounen"] },
  { name: "Slam Dunk",                      studio: "Toei Animation",     year: 1993, episodes: 101,  genre: "Sports",       source: "Manga",        score: 8.5,  status: "Finished", genreList: ["Sports","Comedy","Drama","Shounen"] },
  { name: "Hajime no Ippo",                 studio: "Madhouse",           year: 2000, episodes: 75,   genre: "Sports",       source: "Manga",        score: 8.7,  status: "Ongoing",  genreList: ["Sports","Action","Comedy","Shounen"] },
  { name: "Kuroko's Basketball",            studio: "Production I.G",     year: 2012, episodes: 25,   genre: "Sports",       source: "Manga",        score: 7.9,  status: "Finished", genreList: ["Sports","Comedy","Drama","Shounen"] },
  { name: "Yuri on Ice",                    studio: "MAPPA",              year: 2016, episodes: 12,   genre: "Sports",       source: "Original",     score: 8.3,  status: "Finished", genreList: ["Sports","Drama","Romance","Seinen"] },
  { name: "Free!",                          studio: "KyoAni",             year: 2013, episodes: 12,   genre: "Sports",       source: "Novel",        score: 7.5,  status: "Finished", genreList: ["Sports","Drama","Comedy","Seinen"] },
  { name: "Captain Tsubasa",                studio: "Tecmo",              year: 1983, episodes: 128,  genre: "Sports",       source: "Manga",        score: 7.7,  status: "Finished", genreList: ["Sports","Adventure","Drama","Shounen"] },
  { name: "Eyeshield 21",                   studio: "Gallop",             year: 2005, episodes: 145,  genre: "Sports",       source: "Manga",        score: 8.0,  status: "Finished", genreList: ["Sports","Comedy","Action","Shounen"] },
  { name: "Ping Pong the Animation",        studio: "Tatsunoko Production",year: 2014, episodes: 11, genre: "Sports",       source: "Manga",        score: 8.6,  status: "Finished", genreList: ["Sports","Drama","Psychological","Seinen"] },
  { name: "Ao Ashi",                        studio: "Production I.G",     year: 2022, episodes: 24,   genre: "Sports",       source: "Manga",        score: 7.9,  status: "Finished", genreList: ["Sports","Drama","Slice of Life","Shounen"] },
  { name: "Initial D",                      studio: "Pastel",             year: 1998, episodes: 26,   genre: "Sports",       source: "Manga",        score: 8.1,  status: "Finished", genreList: ["Sports","Action","Drama","Seinen"] },

  // ── DARK / HORROR ─────────────────────────────────────────────────────────
  { name: "Tokyo Ghoul",                    studio: "Pierrot",            year: 2014, episodes: 12,   genre: "Dark Fantasy", source: "Manga",        score: 7.8,  status: "Finished", genreList: ["Dark Fantasy","Action","Psychological","Seinen"] },
  { name: "Black Butler",                   studio: "A-1 Pictures",       year: 2008, episodes: 24,   genre: "Dark Fantasy", source: "Manga",        score: 7.7,  status: "Ongoing",  genreList: ["Dark Fantasy","Mystery","Historical","Shounen"] },
  { name: "Made in Abyss",                  studio: "Kinema Citrus",      year: 2017, episodes: 13,   genre: "Dark Fantasy", source: "Manga",        score: 8.7,  status: "Ongoing",  genreList: ["Dark Fantasy","Adventure","Fantasy","Drama"] },
  { name: "Goblin Slayer",                  studio: "White Fox",          year: 2018, episodes: 12,   genre: "Dark Fantasy", source: "Light Novel",  score: 7.5,  status: "Ongoing",  genreList: ["Dark Fantasy","Action","Adventure","Seinen"] },
  { name: "Hellsing Ultimate",              studio: "Madhouse",           year: 2006, episodes: 10,   genre: "Dark Fantasy", source: "Manga",        score: 8.5,  status: "Finished", genreList: ["Dark Fantasy","Action","Horror","Seinen"] },
  { name: "Elfen Lied",                     studio: "Arms",               year: 2004, episodes: 13,   genre: "Dark Fantasy", source: "Manga",        score: 7.6,  status: "Finished", genreList: ["Dark Fantasy","Drama","Horror","Romance"] },
  { name: "Higurashi When They Cry",        studio: "Deen",               year: 2006, episodes: 26,   genre: "Horror",       source: "Visual Novel", score: 8.1,  status: "Finished", genreList: ["Horror","Mystery","Psychological","Thriller"] },
  { name: "Another",                        studio: "P.A.Works",          year: 2012, episodes: 12,   genre: "Horror",       source: "Novel",        score: 7.5,  status: "Finished", genreList: ["Horror","Mystery","Psychological","Drama"] },
  { name: "Claymore",                       studio: "Madhouse",           year: 2007, episodes: 26,   genre: "Dark Fantasy", source: "Manga",        score: 7.9,  status: "Finished", genreList: ["Dark Fantasy","Action","Adventure","Seinen"] },
  { name: "Deadman Wonderland",             studio: "Manglobe",           year: 2011, episodes: 12,   genre: "Dark Fantasy", source: "Manga",        score: 7.1,  status: "Finished", genreList: ["Dark Fantasy","Action","Horror","Seinen"] },
  { name: "Shiki",                          studio: "Deen",               year: 2010, episodes: 22,   genre: "Horror",       source: "Novel",        score: 8.0,  status: "Finished", genreList: ["Horror","Mystery","Psychological","Supernatural"] },

  // ── SPY / THRILLER ────────────────────────────────────────────────────────
  { name: "Spy x Family",                   studio: "Wit Studio",         year: 2022, episodes: 25,   genre: "Action",       source: "Manga",        score: 8.7,  status: "Ongoing",  genreList: ["Action","Comedy","Thriller","Shounen"] },
  { name: "91 Days",                        studio: "Shuka",              year: 2016, episodes: 13,   genre: "Thriller",     source: "Original",     score: 8.0,  status: "Finished", genreList: ["Thriller","Action","Historical","Drama"] },

  // ── DRAMA / OTHER ─────────────────────────────────────────────────────────
  { name: "Tokyo Revengers",                studio: "Liden Films",        year: 2021, episodes: 24,   genre: "Action",       source: "Manga",        score: 7.6,  status: "Finished", genreList: ["Action","Drama","Psychological","Shounen"] },
  { name: "Oshi no Ko",                     studio: "Doga Kobo",          year: 2023, episodes: 11,   genre: "Drama",        source: "Manga",        score: 8.7,  status: "Ongoing",  genreList: ["Drama","Psychological","Mystery","Seinen"] },
  { name: "Sailor Moon",                    studio: "Toei Animation",     year: 1992, episodes: 200,  genre: "Magical Girl", source: "Manga",        score: 7.8,  status: "Finished", genreList: ["Magical Girl","Action","Romance","Shoujo"] },
  { name: "Cardcaptor Sakura",              studio: "Madhouse",           year: 1998, episodes: 70,   genre: "Magical Girl", source: "Manga",        score: 8.1,  status: "Finished", genreList: ["Magical Girl","Adventure","Romance","Shoujo"] },
  { name: "Odd Taxi",                       studio: "OLM",                year: 2021, episodes: 13,   genre: "Mystery",      source: "Original",     score: 8.7,  status: "Finished", genreList: ["Mystery","Thriller","Drama","Slice of Life"] },
  { name: "Rent-a-Girlfriend",              studio: "TMS Entertainment",  year: 2020, episodes: 12,   genre: "Romance",      source: "Manga",        score: 7.4,  status: "Ongoing",  genreList: ["Romance","Comedy","Drama","Seinen"] },
  { name: "Great Pretender",                studio: "Wit Studio",         year: 2020, episodes: 23,   genre: "Thriller",     source: "Original",     score: 8.3,  status: "Finished", genreList: ["Thriller","Action","Comedy","Drama"] },
  { name: "Ouran Host Club",                studio: "Bones",              year: 2006, episodes: 26,   genre: "Romance",      source: "Manga",        score: 8.2,  status: "Finished", genreList: ["Romance","Comedy","School","Shoujo"] },
  { name: "Paradise Kiss",                  studio: "Madhouse",           year: 2005, episodes: 12,   genre: "Drama",        source: "Manga",        score: 7.7,  status: "Finished", genreList: ["Drama","Romance","Josei","Slice of Life"] },

  // ── SCI-FI ────────────────────────────────────────────────────────────────
  { name: "Ghost in the Shell: SAC",        studio: "Production I.G",     year: 2002, episodes: 26,   genre: "Sci-Fi",       source: "Manga",        score: 8.5,  status: "Finished", genreList: ["Sci-Fi","Action","Psychological","Seinen"] },
  { name: "Dr. Stone",                      studio: "TMS Entertainment",  year: 2019, episodes: 24,   genre: "Sci-Fi",       source: "Manga",        score: 8.3,  status: "Finished", genreList: ["Sci-Fi","Adventure","Comedy","Shounen"] },
  { name: "Darling in the FranXX",          studio: "Trigger",            year: 2018, episodes: 24,   genre: "Mecha",        source: "Original",     score: 7.3,  status: "Finished", genreList: ["Mecha","Romance","Sci-Fi","Drama"] },
  { name: "Trigun",                         studio: "Madhouse",           year: 1998, episodes: 26,   genre: "Sci-Fi",       source: "Manga",        score: 8.2,  status: "Finished", genreList: ["Sci-Fi","Action","Adventure","Drama"] },
  { name: "Space Dandy",                    studio: "Bones",              year: 2014, episodes: 13,   genre: "Sci-Fi",       source: "Original",     score: 7.8,  status: "Finished", genreList: ["Sci-Fi","Comedy","Adventure","Parody"] },
  { name: "The Melancholy of Haruhi Suzumiya", studio: "KyoAni",          year: 2006, episodes: 14,   genre: "Sci-Fi",       source: "Light Novel",  score: 7.8,  status: "Finished", genreList: ["Sci-Fi","Comedy","Mystery","Slice of Life"] },
  { name: "Seraph of the End",              studio: "Wit Studio",         year: 2015, episodes: 12,   genre: "Dark Fantasy", source: "Manga",        score: 7.5,  status: "Finished", genreList: ["Dark Fantasy","Action","Supernatural","Shounen"] },

  // ── FILMS ──────────────────────────────────────────────────────────────────
  { name: "Spirited Away",                  studio: "Studio Ghibli",      year: 2001, episodes: 1,    genre: "Fantasy",      source: "Original",     score: 8.8,  status: "Film",     genreList: ["Fantasy","Adventure","Drama","Supernatural"] },
  { name: "Princess Mononoke",              studio: "Studio Ghibli",      year: 1997, episodes: 1,    genre: "Fantasy",      source: "Original",     score: 8.7,  status: "Film",     genreList: ["Fantasy","Action","Adventure","Drama"] },
  { name: "Nausicaä of the Valley of the Wind", studio: "Studio Ghibli", year: 1984, episodes: 1,    genre: "Sci-Fi",       source: "Manga",        score: 8.1,  status: "Film",     genreList: ["Sci-Fi","Fantasy","Adventure","Drama"] },
  { name: "Castle in the Sky",              studio: "Studio Ghibli",      year: 1986, episodes: 1,    genre: "Fantasy",      source: "Original",     score: 8.1,  status: "Film",     genreList: ["Fantasy","Adventure","Sci-Fi","Drama"] },
  { name: "A Silent Voice",                 studio: "KyoAni",             year: 2016, episodes: 1,    genre: "Drama",        source: "Manga",        score: 9.0,  status: "Film",     genreList: ["Drama","Romance","Slice of Life","School"] },
  { name: "Weathering With You",            studio: "CoMix Wave Films",   year: 2019, episodes: 1,    genre: "Fantasy",      source: "Original",     score: 8.5,  status: "Film",     genreList: ["Fantasy","Romance","Drama","Supernatural"] },
  { name: "Your Name",                      studio: "CoMix Wave Films",   year: 2016, episodes: 1,    genre: "Fantasy",      source: "Original",     score: 9.1,  status: "Film",     genreList: ["Fantasy","Romance","Drama","Supernatural"] },
  { name: "Promare",                        studio: "Trigger",            year: 2019, episodes: 1,    genre: "Action",       source: "Original",     score: 8.1,  status: "Film",     genreList: ["Action","Sci-Fi","Mecha","Drama"] },

  // ── YOU CAN ADD MORE ANIME SERIES BELOW THIS LINE ──────────────────────────
  // Copy this format:
  // { name: "Series Title", studio: "Studio Name", year: 20XX, episodes: XX, genre: "Genre", source: "Manga", score: X.X, status: "Finished", genreList: ["Genre1","Genre2","Genre3"] },

];

// ── GENRE CATEGORIES FOR SETUP SCREEN ────────────────────────────────────
const SERIES_GENRES = [
  { icon: "🏔️",  name: "Peak / Prestige",
    series: ["Attack on Titan","Steins;Gate","Vinland Saga","Cowboy Bebop","Frieren: Beyond Journey's End",
             "Gintama","86","Mob Psycho 100","Fullmetal Alchemist: Brotherhood","Hunter x Hunter","Berserk",
             "Neon Genesis Evangelion"] },
  { icon: "⚔️",  name: "Action / Shonen",
    series: ["Naruto","Naruto: Shippuden","Bleach","One Piece","Dragon Ball Z","Dragon Ball Super",
             "Demon Slayer","Jujutsu Kaisen","My Hero Academia","Chainsaw Man","Black Clover","Fairy Tail",
             "One Punch Man","Gurren Lagann","Fullmetal Alchemist","Yu Yu Hakusho","Rurouni Kenshin",
             "Blue Exorcist","Soul Eater","Assassination Classroom","Sword Art Online","Inuyasha",
             "Akame ga Kill","Black Lagoon","Samurai Champloo","D.Gray-man","Katekyo Hitman Reborn",
             "Bungo Stray Dogs","The Seven Deadly Sins","Dororo","Magi","Shaman King"] },
  { icon: "🔮",  name: "Psychological / Thriller",
    series: ["Death Note","Code Geass","Classroom of the Elite","The Promised Neverland","Kakegurui",
             "Psycho-Pass","Erased","Monster","Serial Experiments Lain","Paranoia Agent","Banana Fish",
             "Durarara","Devilman Crybaby"] },
  { icon: "🌀",  name: "Isekai / Fantasy",
    series: ["Re:Zero","Overlord","KonoSuba","Mushoku Tensei","That Time I Got Reincarnated as a Slime",
             "No Game No Life","Log Horizon","Tanya the Evil","Shield Hero","DanMachi",
             "Miss Kobayashi's Dragon Maid","Dungeon Meshi"] },
  { icon: "💖",  name: "Romance / Slice of Life",
    series: ["Toradora","Your Lie in April","Kaguya-sama: Love is War","OreGairu","Violet Evergarden",
             "Bocchi the Rock!","Clannad","Clannad: After Story","Fruits Basket","Ouran High School Host Club",
             "March Comes in Like a Lion","Horimiya","Natsume's Book of Friends","Anohana","Nana",
             "Angel Beats!","K-On!","Nichijou","Yuru Camp","Skip and Loafer","Rent-a-Girlfriend"] },
  { icon: "🏆",  name: "Sports",
    series: ["Haikyuu!!","Blue Lock","Slam Dunk","Hajime no Ippo","Kuroko's Basketball","Yuri on Ice",
             "Free!","Captain Tsubasa","Eyeshield 21","Ping Pong the Animation","Ao Ashi","Initial D"] },
  { icon: "☠️",  name: "Dark / Horror",
    series: ["Tokyo Ghoul","Black Butler","Made in Abyss","Goblin Slayer","Hellsing Ultimate",
             "Elfen Lied","Higurashi When They Cry","Another","Claymore","Deadman Wonderland","Shiki"] },
  { icon: "🤖",  name: "Sci-Fi / Mecha",
    series: ["Ghost in the Shell: SAC","Dr. Stone","Darling in the FranXX","Trigun","Space Dandy",
             "The Melancholy of Haruhi Suzumiya","Seraph of the End","Cowboy Bebop"] },
  { icon: "🕵️",  name: "Spy / Thriller",
    series: ["Spy x Family","91 Days","Banana Fish","Great Pretender","Odd Taxi"] },
  { icon: "🎬",  name: "Films (Ghibli & More)",
    series: ["Spirited Away","Princess Mononoke","Nausicaä of the Valley of the Wind","Castle in the Sky",
             "A Silent Voice","Weathering With You","Your Name","Promare"] },
  { icon: "🎭",  name: "Drama / Other",
    series: ["Tokyo Revengers","Oshi no Ko","Sailor Moon","Cardcaptor Sakura","Paradise Kiss","Ouran Host Club",
             "Nana","A Silent Voice","Devilman Crybaby"] },
];

const ALL_SERIES_NAMES = [...new Set(SERIES_DB.map(s => s.name))].sort();
