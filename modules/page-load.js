export function pageFill() {
    const container = document.getElementById('content');
    let title = document.createElement('h1');
    title.innerHTML = 'Fancier Restaurant with Expensive Food';
    container.appendChild(title);

    let photo = document.createElement('img');
    photo.src = '../src/artistsevening.jpg';
    container.appendChild(photo);

    let gibberish = document.createElement('p');
    gibberish.innerHTML = "This is the fanciest most wonderfulest restaurant ever!";
    container.appendChild(gibberish);
}