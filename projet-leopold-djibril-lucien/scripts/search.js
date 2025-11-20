// 1. On trouve la boîte de recherche et la liste des cartes
const searchInput = document.getElementById('recherche');
const articles = document.querySelectorAll('.artcart'); // Cela attrape tous tes jouets (les <article class="artcart">)

// 2. On apprend au magicien à écouter quand on tape
searchInput.addEventListener('input', function() {
    // 3. Ce que tu as tapé, on l'appelle "mot magique"
    // On met en minuscules pour que ça marche même si tu tapes des grandes ou petites lettres.
    const motMagique = searchInput.value.toLowerCase();

    // 4. On regarde chaque carte, une par une
    articles.forEach(article => {
        // Chaque carte a un nom spécial (le texte dans le <strong>pretitre</strong>)
        // Par exemple : "frontend" ou "backend"
        const nomCarte = article.querySelector('.pretitre strong').textContent.toLowerCase();
        
        console.log(nomCarte);
        // 5. Est-ce que le nom de la carte contient le mot magique ?
        // C'est comme demander : "Est-ce que 'backend' a le mot 'end' dedans ?"
        if (nomCarte.includes(motMagique)) {
            // OUI ! Alors on la montre (on dit au jouet d'être visible)
            article.style.display = 'block'; 
        } else {
            // NON ! Alors on la cache (on dit au jouet de disparaître)
            article.style.display = 'none'; 
        }
    });
});