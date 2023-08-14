export function tabOne() {
    
    const container = document.getElementById('content');
    
    let bigDiv = document.createElement('div');
    bigDiv.className ='outer';
    container.appendChild(bigDiv)
    
    let tabTitle = document.createElement('h1');
    tabTitle.className ='primary heading';
    tabTitle.innerHTML = 'Triple Dumplin Cafe';
    bigDiv.appendChild(tabTitle);

    let boxOne = document.createElement('div');
    boxOne.className = 'box';
    bigDiv.appendChild(boxOne);

    let restaurantInfo = document.createElement('p');
    restaurantInfo.innerHTML = 'Triple Dumplin Cafe promises to not only meet your expectations, but exceed them at every visit. We specialize in the finest dumplins with Chinese, Korean, and Japanese styles available. Please join us for an evening that will leave you enchanted with our food, atmosphere and excellent service.'
    boxOne.appendChild(restaurantInfo);

    let boxTwo = document.createElement('div');
    boxTwo.className = 'box';
    bigDiv.appendChild(boxTwo);

    let heading = document.createElement('h2');
    heading.className = 'secondary heading';
    heading.innerHTML = 'Business Hours';
    boxTwo.appendChild(heading);

    let restaurantHours = document.createElement('p');
    restaurantHours.innerHTML = " Closed Mondays <br> Tuesdays 11am - 11pm <br> Wednesdays 11am - 11pm <br> Thursdays 11am - 11pm <br> Fridays 11am - 2am <br> Saturdays 11am - 2am <br> Sundays 11am - 11pm "
    boxTwo.appendChild(restaurantHours);


}