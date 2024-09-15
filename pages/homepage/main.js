"use strict";
const listWatch = document.querySelector(".list-watch");
const listRate = document.querySelector(".list-top-rate");
const listTrend = document.querySelector(".list-trend-film");
const listRelease = document.querySelector(".list-release");

function getDataApi() {
  return new Promise((success, reject) => {
    fetch("../../api/API.JSON").then((data) => {
      if (!data.ok) {
        reject("API tidak ditemukan");
      }
      success(data.json());
    });
  });
}

getDataApi().then((data) => {
  data.filter((data) => {
    if (data.isWatching && !data.isPotrait) {
      const div = document.createElement("div");
      div.style.backgroundImage = `url('../../images/${data.image}.png')`;
      div.innerHTML = `<h2>${data.name}</h2>`;
      listWatch.appendChild(div);
    }
    if (data.rate > 4 && data.isPotrait) {
      if (data.isTop) {
        const div = document.createElement("div");
        div.style.backgroundImage = `url('../../images/${data.image}.png')`;
        div.innerHTML = `<div><span>Top 10</span></div><p>${data.view} Views</p>`;
        listRate.appendChild(div);
      } else {
        const div = document.createElement("div");
        div.style.backgroundImage = `url('../../images/${data.image}.png')`;
        div.style.justifyContent = "flex-end";
        div.innerHTML = `<p>${data.view} Views</p>`;
        listRate.appendChild(div);
      }
    }
  });
  data.sort((a, b) => {
    return b.view - a.view;
  });

  data.forEach((data) => {
    if (data.isPotrait) {
      if (data.isTop) {
        const div = document.createElement("div");
        div.style.backgroundImage = `url('../../images/${data.image}.png')`;
        div.innerHTML = `<div><span>Top 10</span></div><p>${data.view} Views</p>`;
        listTrend.appendChild(div);
      } else {
        const div = document.createElement("div");
        div.style.backgroundImage = `url('../../images/${data.image}.png')`;
        div.style.justifyContent = "flex-end";
        div.innerHTML = `<p>${data.view} Views</p>`;
        listTrend.appendChild(div);
      }
    }
  });
});

getDataApi().then((data) => {
  data.filter((data) => {
    if (data.isNew) {
      if (data.isTop) {
        const div = document.createElement("div");
        div.style.backgroundImage = `url('../../images/${data.image}.png')`;
        div.innerHTML = `<div><span>Top 10</span></div><p>${data.view} Views</p>`;
        listTrend.appendChild(div);
      } else {
        const div = document.createElement("div");
        div.style.backgroundImage = `url('../../images/${data.image}.png')`;
        div.style.justifyContent = "flex-end";
        div.innerHTML = `<p>${data.view} Views</p>`;
        listRelease.appendChild(div);
      }
    }
  });
});
