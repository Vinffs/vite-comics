const dcComics = [
  {
    thumb: "https://www.coverbrowser.com/image/action-comics/1-1.jpg",
    price: "$19.99",
    series: "Action Comics",
    type: "comic book",
  },
  {
    thumb:
      "https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/M/1/M1BLLA015ISBN_0.jpg",
    price: "$3.99",
    series: "American Vampire 1976",
    type: "comic book",
  },
  {
    thumb:
      "https://media.wired.com/photos/593384dad80dd005b42b2817/master/w_2560%2Cc_limit/Aquaman-16.jpg",
    price: "$16.99",
    series: "Aquaman",
    type: "graphic novel",
  },
  {
    thumb: "https://d29xot63vimef3.cloudfront.net/image/batgirl/1-1.jpg",
    price: "$2.99",
    series: "Batgirl",
    type: "comic book",
  },
  {
    thumb:
      "https://static.posters.cz/image/750/locandine-film-in-plexiglass-batman-prowl-comic-cover-i69653.jpg",
    price: "$3.99",
    series: "Batman",
    type: "comic book",
  },
  {
    thumb:
      "https://static.wikia.nocookie.net/marvel_dc/images/5/50/Batman_Beyond_v.1_1.jpg",
    price: "$2.99",
    series: "Batman Beyond",
    type: "comic book",
  },
  {
    thumb:
      "https://static.wikia.nocookie.net/marvel_dc/images/0/0d/Batman_Superman_Vol_1_1.jpg",
    price: "$3.99",
    series: "Batman/Superman",
    type: "comic book",
  },
  {
    thumb:
      "https://static.wikia.nocookie.net/marvel_dc/images/c/cf/Batman_Superman_Annual_Vol_2_1.jpg",
    price: "$4.99",
    series: "Batman/Superman Annual",
    type: "comic book",
  },
  {
    thumb:
      "https://static.wikia.nocookie.net/marvel_dc/images/5/54/Batman_The_Joker_War_Zone_Vol_1_1.jpg",
    price: "$5.99",
    series: "Batman: The Joker War Zone",
    type: "comic book",
  },
  {
    thumb:
      "https://static.wikia.nocookie.net/marvel_dc/images/6/64/Batman_Three_Jokers_Collected.jpg",
    price: "$6.99",
    series: "Batman: Three Jokers",
    type: "comic book",
  },
  {
    thumb:
      "https://static.wikia.nocookie.net/marvel_dc/images/f/f8/Batman_White_Knight_Presents_Harley_Quinn_Vol_1_1.jpg",
    price: "$4.99",
    series: "Batman: White Knight Presents: Harley Quinn",
    type: "comic book",
  },
  {
    thumb:
      "https://static.wikia.nocookie.net/marvel_dc/images/c/c8/Catwoman_Vol_2_1.jpg",
    price: "$16.99",
    series: "Catwoman",
    type: "graphic novel",
  },
];

const navList = [
  {
    sectionTitle: "CHARACTERS",
    url: "#",
    active: false,
  },
  {
    sectionTitle: "COMICS",
    url: "#",
    active: true,
  },
  {
    sectionTitle: "MOVIES",
    url: "#",
    active: false,
  },
  {
    sectionTitle: "TV",
    url: "#",
    active: false,
  },
  {
    sectionTitle: "GAMES",
    url: "#",
    active: false,
  },
  {
    sectionTitle: "COLLECTIBLES",
    url: "#",
    active: false,
  },
  {
    sectionTitle: "VIDEOS",
    url: "#",
    active: false,
  },
  {
    sectionTitle: "FANS",
    url: "#",
    active: false,
  },
  {
    sectionTitle: "NEWS",
    url: "#",
    active: false,
  },
  {
    sectionTitle: "SHOP",
    url: "#",
    active: false,
  },
];

const sections = [
  {
    comicName: "DIGITAL COMICS",
    comicImage: "/images/buy-comics-digital-comics.png",
  },
  {
    comicName: "DC MERCHANDISE",
    comicImage: "/images/buy-comics-merchandise.png",
  },
  {
    comicName: "SUBSCRIPTION",
    comicImage: "/images/buy-comics-subscriptions.png",
  },
  {
    comicName: "COMIC SHOP LOCATOR",
    comicImage: "/images/buy-comics-shop-locator.png",
  },
  {
    comicName: "DC POWER VISA",
    comicImage: "/images/buy-dc-power-visa.svg",
  },
];

const footerList = [
  {
    name: "DC COMICS",
    list: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"],
  },
  {
    name: "SHOP",
    list: ["Shop DC", "Shop DC Collectibles"],
  },
  {
    name: "DC",
    list: [
      "Terms of Service",
      "Privacy Policy (New)",
      "Ad Choices",
      "Advertising",
      "Jobs",
      "Subscriptions",
      "Talent Workshops",
      "CPSC Certificates",
      "Ratings",
      "Shop Help",
      "Contact Us",
    ],
  },
  {
    name: "SITES",
    list: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"],
  },
];

export { dcComics, navList, sections, footerList };
