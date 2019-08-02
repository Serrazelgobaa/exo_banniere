banniere = document.getElementById("banniere");

const apparaitreBanniere = () => {
	banniere.style.display = "block";
};

const fermerBanniere = () => {
	banniere.style.display = "none";
};

setTimeout(apparaitreBanniere,5000);
document.getElementById("croix").addEventListener("click",fermerBanniere);