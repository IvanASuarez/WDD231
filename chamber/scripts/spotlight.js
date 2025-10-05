const url = 'https://ivanasuarez.github.io/WDD231/chamber/data/members.json';
const container = document.querySelector('#spotlight');


async function loadRandomCompanies() {
    try{
        const response = await fetch (url);
    const data = await response.json();
    const companies = data.companies;

    // Randomly sort companies by their premium membership
    const elegible = companies.filter(company => company.membership === "Gold"  || company.membership === "Silver");
    const newGroup = elegible.sort(() => 0.5 - Math.random());
    // choose the first three companies of the filtered group of companies.
    const selected = newGroup.slice(0,3);

    container.innerHTML = "";

    selected.forEach(company => {
       let card = document.createElement('section');
        card.classList.add('card');

        // h2 title
        let businessName = document.createElement('h2');
        businessName.textContent = `${company.name}`;

        // container for image and info
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        // image
        let logo = document.createElement('img');
        logo.setAttribute('src', `${company.imageurl}?v=${new Date().getTime()}`);
        logo.setAttribute('alt', `Logo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', '300');

        // container info
        let cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');

        // address
        let address = document.createElement('p');
        address.innerHTML = `<strong>Address:</strong> ${company.address}`;

        // phone
        let phone = document.createElement('p');
        phone.innerHTML = `<strong>Phone:</strong> ${company.phone.join(', ')}`;

        // website
        let websiteTitle = document.createElement('strong');
        websiteTitle.textContent = 'Website:';

        let website = document.createElement('a');
        website.innerHTML = `${company.website}`;
        website.href = company.website;
        website.target = '_blank';

        
        cardInfo.appendChild(address);
        cardInfo.appendChild(phone);
        cardInfo.appendChild(websiteTitle);
        cardInfo.appendChild(website);

        cardContainer.appendChild(logo);
        cardContainer.appendChild(cardInfo);

        card.appendChild(businessName);
        card.appendChild(cardContainer);

        container.appendChild(card);
    });    
} catch(error){
    console.error("Error loading companies:", error);
    }
}

loadRandomCompanies();









        


    
