const url = '';
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
        let businessName = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let logo = document.createElement('img');

        businessName.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone.join(', ')}`;
        website.textContent = `Website: ${member.website}`;
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', '300');

        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(logo);

        cards.appendChild(card);
    });
}

getMemberData();