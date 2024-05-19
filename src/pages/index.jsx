import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/Header/index'
import { Estate } from '../components/Estate/index';

const pathname = window.location.pathname 
const id = pathname.match(/dum\d+/)[0]

const response = await fetch(`https://apps.kodim.cz/daweb/trening-api/apis/realitka/${id}`)
const data = await response.json()

const nadpis = data.title
const cahrakteristika = data.text
const penize = data.price
const misto = data.city
const jmeno = data.contact.name
const kontakt1 = data.contact.email
const kontakt2 = data.contact.phone
const obrazek = data.photo

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header />
    <Estate nazev = {nadpis} 
            popis = {cahrakteristika}
            cena = {penize}
            mesto = {misto}
            maklerka = {jmeno}
            email = {kontakt1}
            mobil = {kontakt2}
            image = {obrazek}/>
  </div>
);