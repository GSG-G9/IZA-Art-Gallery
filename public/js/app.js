const artistForm = document.getElementById("myForm");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search");
const results = document.getElementById("results");
const searchDiv = document.getElementById("search-form");

const openForm = () => {
  console.log("open");
  artistForm.style.display = "block";
};

const closeForm = () => {
  console.log("close");
  artistForm.style.display = "none";
};

const artistCreation = (res) => {
  const artist = document.createElement("div");
  artist.setAttribute("class", "artist-search-result");
  const nameTag = document.createElement("p");
  nameTag.textContent = `Name:${res.name}`;
  const nationalityTag = document.createElement("p");
  nationalityTag.textContent = `nationality:${res.nationality}`;
  const workstyleTag = document.createElement("p");
  workstyleTag.textContent = `workstyle:${res.workstyle}`;
  const pictureTag = document.createElement("img");
  pictureTag.src = res.picture;

  artist.appendChild(nameTag);
  artist.appendChild(nationalityTag);
  artist.appendChild(workstyleTag);
  artist.appendChild(pictureTag);
  results.appendChild(artist);
};

const searchForArtist = () => {
  const search = searchInput.value;
  const value = `/artist/${search}`;
  if (search === "") {
    const message = document.createElement("p");
    message.textContent = "please enter a name";
    searchDiv.appendChild(message);
  } else {
    fetch(value)
      .then((response) => {
        return response.json();
      })

      .then((res) => {
        results.textContent = "";
        res.map((artist) => artistCreation(artist));
      });
  }
};

const addArtistForm = document.getElementById("artist-form");
const artistName = document.getElementById("artist-name").value;
const artistYear = document.getElementById("artist-year").value;
const artistNationality = document.getElementById("artist-nationality").value;
const artistStyle = document.getElementById("artist-work-style").value;
const artistPic = document.getElementById("artist-picture").value;
const artistAdd = document.getElementById("submit");
const cancel = document.getElementById("cancel");

const getArtistData = () => {
  return fetch("/artist")
    .then((response) => response.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("error!");
    });
};

const renderArtist = (data) => {
  data.forEach((element) => {
    const artist = document.createElement("div");
    const nameTag = document.createElement("p");
    nameTag.textContent = `Name: ${element.name}`;
    const nationalityTag = document.createElement("p");
    nationalityTag.textContent = `Nationality:${element.nationality}`;
    const workstyleTag = document.createElement("p");
    workstyleTag.textContent = `Work Style: ${element.workstyle}`;
    const pictureTag = document.createElement("img");
    pictureTag.src = element.picture;
    artist.appendChild(nameTag);
    artist.appendChild(nationalityTag);
    artist.appendChild(workstyleTag);
    artist.appendChild(pictureTag);
    results.appendChild(artist);
  });
};

const addArtist = () => {
  if (!artistName.trim()) {
    const message = document.createElement("p");
    message.textContent = "please enter a name";
    results.appendChild(message);
  }
};

searchBtn.addEventListener("click", searchForArtist);

addArtistForm.addEventListener("submit", (e) => {
  addArtist();
});
getArtistData().then(renderArtist);
