"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".root");
  const submitButton = document.getElementById("submit-post");

  submitButton.addEventListener("click", () => {
    const heading = document.getElementById("post-heading").value;
    const text = document.getElementById("post-text").value;
    const date = document.getElementById("post-date").value;

    if (heading && text && date) {
      createPost(heading, text, date);
    } else {
      alert("Please fill in all fields!");
    }
  });

  const createPost = (heading, text, date) => {
    const container = document.createElement("div");
    container.classList.add("container");
    root.append(container);

    // Image Area
    const imageArea = document.createElement("div");
    imageArea.classList.add("image-area");
    container.append(imageArea);

    // Fetch image from Unsplash
    fetch("https://source.unsplash.com/random/400x300")
      .then((response) => {
        const img = document.createElement("img");
        img.src = response.url;
        imageArea.append(img);
      })
      .catch((error) =>
        console.error("Error fetching image from Unsplash", error)
      );

    // Hashtags Area (You can extend this part as needed)
    const hashTags = document.createElement("div");
    hashTags.classList.add("hash-tags");
    container.append(hashTags);

    // Heading Area
    const headingArea = document.createElement("div");
    headingArea.classList.add("heading-area");
    const headingElement = document.createElement("h2");
    headingElement.classList.add("heading");
    headingElement.textContent = heading;
    headingArea.append(headingElement);
    container.append(headingArea);

    // Short Text Area
    const shortTextArea = document.createElement("div");
    shortTextArea.classList.add("short-text-area");
    shortTextArea.textContent = text;
    container.append(shortTextArea);

    // Date Area
    const dateArea = document.createElement("div");
    dateArea.classList.add("date-area");
    const dateElement = document.createElement("p");
    dateElement.classList.add("date");
    dateElement.textContent = new Date(date).toLocaleDateString();
    dateArea.append(dateElement);
    container.append(dateArea);
  };
});
