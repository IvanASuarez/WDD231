const url = 'https://ivanasuarez.github.io/WDD231/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies);
    displayMembers(data.companies);
}


const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        card.classList.add('card');

        // h2 title
        let businessName = document.createElement('h2');
        businessName.textContent = `${member.name}`;

        // container for image and info
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        // image
        let logo = document.createElement('img');
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', '300');

        // container info
        let cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');

        // address
        let address = document.createElement('p');
        address.innerHTML = `<strong>Address:</strong> ${member.address}`;

        // phone
        let phone = document.createElement('p');
        phone.innerHTML = `<strong>Phone:</strong> ${member.phone.join(', ')}`;

        // website
        let website = document.createElement('a');
        website.innerHTML = `<strong>Website:</strong> ${member.website}`;
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');


        
        cardInfo.appendChild(address);
        cardInfo.appendChild(phone);
        cardInfo.appendChild(website);

        cardContainer.appendChild(logo);
        cardContainer.appendChild(cardInfo);

        card.appendChild(businessName);
        card.appendChild(cardContainer);

        cards.appendChild(card);
    });
}

getMemberData();