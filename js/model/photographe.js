export default class Photographe {
  constructor({name, city, country, tags, tagline, price, portrait}) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;

    this.createPhotographe = () => new Photographe();
    
    document.title = `Profil de ${this.name}`;
    
    document.querySelector('.photographe-name').innerText = this.name;
    
    document.querySelector('.photographe-city').innerText = `${this.city},${this.country}`;
    
    document.querySelector('.photographe-line').innerText = this.tagline;
    
    this.tags.forEach((tag) => {
      // Il exite une methode pour insérer du HTML sous forme de string : insertAdjacentHTML
      // https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentHTML
      document.querySelector('.photographe-tags-container').insertAdjacentHTML('beforeend', `<span class="tags">#${tag}</span>`)
    });
    
    document.querySelector('.photographe-img').src = `./images/PhotographersID/${this.portrait}`;
    
    document.querySelector('.prix').innerText = `${price}€/jour`;
    
    document.querySelector('.form-titre').innerHTML = `Contactez-moi<br/>${this.name}`;
  }
}
