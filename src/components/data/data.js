import about from "./../../assets/img/about.png"
import system from "./../../assets/img/system-navigation.jpg"
import gps from "./../../assets/img/gps.jpg"
import person from "./../../assets/img/person-outdoors.jpg"
import smartPhone from "./../../assets/img/smart-phone.jpg" 
import way from "./../../assets/img/way.jpg" 
import kvkk from "./../../assets/img/kvkk.jpg" 


let baseId = 0;

const getDataId = () => baseId++;

export const cardData = [
  {
    id: getDataId(),
    card: {
      image: gps ,
      name: "Anlık Konum Sorgulama"
      
    },
  },
  {
    id: getDataId(),
    card: {
      image: system,
      name: "Geçmiş Görüntüleme",
    },
  },
  {
    id: getDataId(),
    card: {
      image: person,
      name: "Gerçek Zamanlı Takip",
    },
  }

];
