document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  let buttonrem = document.querySelector("button");
  // let new_element_p = document.createElement("p");

  button.addEventListener("click", () => {
    let new_element_p = document.createElement("p");
    new_element_p.innerText =
      breedlist[Math.floor(Math.random() * breedlist.length)];
    event.target.parentNode.appendChild(new_element_p, event.target);

    buttonrem.addEventListener("click", () => {
      event.target.parentNode
        .appendChild(new_element_p, event.target)
        .remove(new_element_p, event.target);
    });
  });

  ///
  let APIResponse = {
    status: "success",
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
      appenzeller: [],
      basenji: [],
      beagle: [],
      bluetick: [],
      borzoi: [],
      bouvier: [],
      boxer: [],
      brabancon: [],
      briard: [],
      bulldog: ["boston", "french"],
      bullterrier: ["staffordshire"],
      cairn: [],
      cattledog: ["australian"],
      chihuahua: [],
      chow: [],
      clumber: [],
      cockapoo: [],
      collie: ["border"],
      coonhound: [],
      corgi: ["cardigan"],
      cotondetulear: [],
      dachshund: [],
      dalmatian: [],
      dane: ["great"],
      deerhound: ["scottish"],
      dhole: [],
      dingo: [],
      doberman: [],
      elkhound: ["norwegian"],
      entlebucher: [],
      eskimo: [],
      frise: ["bichon"],
      germanshepherd: [],
      greyhound: ["italian"],
      groenendael: [],
      hound: ["afghan", "basset", "blood", "english", "ibizan", "walker"],
      husky: [],
      keeshond: [],
      kelpie: [],
      komondor: [],
      kuvasz: [],
      labrador: [],
      leonberg: [],
      lhasa: [],
      malamute: [],
      malinois: [],
      maltese: [],
      mastiff: ["bull", "tibetan"],
      mexicanhairless: [],
      mix: [],
      mountain: ["bernese", "swiss"],
      newfoundland: [],
      otterhound: [],
      papillon: [],
      pekinese: [],
      pembroke: [],
      pinscher: ["miniature"],
      pointer: ["german", "germanlonghair"],
      pomeranian: [],
      poodle: ["miniature", "standard", "toy"],
      pug: [],
      puggle: [],
      pyrenees: [],
      redbone: [],
      retriever: ["chesapeake", "curly", "flatcoated", "golden"],
      ridgeback: ["rhodesian"],
      rottweiler: [],
      saluki: [],
      samoyed: [],
      schipperke: [],
      schnauzer: ["giant", "miniature"],
      setter: ["english", "gordon", "irish"],
      sheepdog: ["english", "shetland"],
      shiba: [],
      shihtzu: [],
      spaniel: [
        "blenheim",
        "brittany",
        "cocker",
        "irish",
        "japanese",
        "sussex",
        "welsh"
      ],
      springer: ["english"],
      stbernard: [],
      terrier: [
        "american",
        "australian",
        "bedlington",
        "border",
        "dandie",
        "fox",
        "irish",
        "kerryblue",
        "lakeland",
        "norfolk",
        "norwich",
        "patterdale",
        "russell",
        "scottish",
        "sealyham",
        "silky",
        "tibetan",
        "toy",
        "westhighland",
        "wheaten",
        "yorkshire"
      ],
      vizsla: [],
      weimaraner: [],
      whippet: [],
      wolfhound: ["irish"]
    }
  };
  //if sub breed:append to main breed
  //else just output breed
  //Capitalize first letter of word.

  let breedlist = [];
  let data = APIResponse.message;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  Object.keys(data).forEach(animal => {
    if (data[animal].length) {
      data[animal].forEach(type => {
        breedlist.push(
          capitalizeFirstLetter(type) + " " + capitalizeFirstLetter(animal)
        );
        // console.log(type + " " + animal);
      });
    } else {
      breedlist.push(capitalizeFirstLetter(animal));
      // console.log(animal);
    }
  });

  // console.log(Object.values(APIResponse.message));
  //interesting
});
