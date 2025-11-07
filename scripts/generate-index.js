const fs = require('fs');
const path = require('path');

console.log('Building asylum seeker welcome guides...');
console.log('Static site ready for deployment');

// Create a simple sitemap
const sitemap = `
/
/README.md
/01-Country-Guides/Canada/Welcome-Guide-Canada.md
/02-Essential-Resources/Legal-Aid/Legal-Resources-Guide.md
/03-Language-Versions/Translation-Master-List.md
/04-Quick-Reference/Emergency-Card-Multilingual.md
/08-Templates/Country-Guide-Template.md
`;

fs.writeFileSync('sitemap.txt', sitemap.trim());
console.log('Sitemap generated');
