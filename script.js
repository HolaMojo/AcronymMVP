const abbreviations = [
    { abbreviation: "AOR", meaning: "Approval of Requirements", context: ["A document that requests approval from suitable approving authorities for a specific amount of funding governed by specific requirments."] },
    { abbreviation: "TOS", meaning: "Theory of Success", context: ["A framework that hypothesises the key factors that will make a programme or project successful (core ingredients) and determines the yardstick by which to measure success."] }, 
    { abbreviation: "AOP", meaning: "Approval of Programme", context: ["A document that is written after funding has been secured by an AOR paper that requests for funding for a specific programme that draws down from the funds detailed in the AOR."] }, 
    { abbreviation: "DLAM", meaning: "Do Less Achieve More", context: ["A phrase meaning to examine a situation to see how to achieve maximum output while manageable. Sometimes used as a verb, eg: to Dee-Lamb something."] },
];

// console.log(abbreviations)

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

    // To display results, appendChild allows resultsElement to live in resultsContainer
    if (filteredAbbreviations.length === 0) {
        resultsContainer.innerHTML = 'No results found.';
    } else {
        filteredAbbreviations.forEach(abbr => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<strong>${abbr.abbreviation}</strong> <p>${abbr.meaning}</p> <p>${abbr.context}</p>`;
            resultsContainer.appendChild(resultElement);
        });
    }
}
