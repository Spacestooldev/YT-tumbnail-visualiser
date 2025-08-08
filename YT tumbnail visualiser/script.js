const imageUpload = document.getElementById('imageUpload');
const profileUpload = document.getElementById('profileUpload');
const thumbnailImage = document.getElementById('thumbnail-image');
const profileIcon = document.getElementById('profile-icon');
const titleInput = document.getElementById('title');
const youtuberInput = document.getElementById('youtuber');
const viewsInput = document.getElementById('views');
const dateInput = document.getElementById('date');
const lengthInput = document.getElementById('length');

const thumbnailTitle = document.getElementById('thumbnail-title');
const thumbnailMeta = document.getElementById('thumbnail-meta');
const thumbnailLength = document.getElementById('thumbnail-length');

function readImage(input, targetImg) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      targetImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

imageUpload.addEventListener('change', () => readImage(imageUpload, thumbnailImage));
profileUpload.addEventListener('change', () => readImage(profileUpload, profileIcon));

function updatePreview() {
  thumbnailTitle.textContent = titleInput.value || "Your title here";
  thumbnailMeta.textContent = `${youtuberInput.value || "Channel"} • ${viewsInput.value || "0 views"} • ${dateInput.value || "now"}`;
  thumbnailLength.textContent = lengthInput.value || "0:00";
}

[titleInput, youtuberInput, viewsInput, dateInput, lengthInput].forEach(input => {
  input.addEventListener('input', updatePreview);
});

updatePreview();
