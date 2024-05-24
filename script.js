const abbreviations = [
    { abbreviation: "AOR", meaning: "Approval of Requirements", context: ["A document that requests approval from suitable approving authorities for a specific amount of funding governed by specific requirments."] },
    { abbreviation: "TOS", meaning: "Theory of Success", context: ["A framework that hypothesises the key factors that will make a programme or project successful (core ingredients) and determines the yardstick by which to measure success."] }, 
];

console.log(abbreviations)

// To perform search
function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('header-abbreviations');
    resultsContainer.innerHTML = '';
    alert("Looking!");

       // Filter abbreviations based on search input
       const filteredAbbreviations = abbreviations.filter(abbr => {
        return abbr.abbreviation.toLowerCase().includes(searchInput) ||
               abbr.meaning.toLowerCase().includes(searchInput) ||
               abbr.context.some(context => context.toLowerCase().includes(searchInput));
    });

    // To display results
    if (filteredAbbreviations.length === 0) {
        resultsContainer.innerHTML = 'No results found.';
    } else {
        filteredAbbreviations.forEach(abbr => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<strong>${abbr.abbreviation}</strong> </br> ${abbr.meaning} </br> </br> ${abbr.context}`;
            resultsContainer.appendChild(resultElement);
        });
    }
}
