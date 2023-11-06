import './App.css';
import Card from './Components/Cards/Cards';
import image from './right.png'
import image2 from './wrong.png'

function App() {
  const card1 = {
    im:image,
    im2:image2,
    im3:image2,
    color:'#b5b5b5',
    color2:'#b5b5b5',
    color3:'#b5b5b5',
    headcontent: 'Free',
    buten:'Free',
    cost: 0,
    futures:{
      f1:'Single User',
      f2:'50GB Storage',
      f3:'Unlimited Public Projects',
      f4:'Community Access',
      f5:'Unlimited Private Projects',
      f6:'Dedicated Phone Support',
      f7:'Free Subdomain',
      f8:'Monthly Status Reports',
    }
  }

  const card2 = {
    im:image,
    im2:image,
    im3:image2,
    color:'#b5b5b5',
    color2:'#000000',
    color3:'#b5b5b5',
    buten:'Buy Now',
    headcontent: 'PLUS',
    cost: 10,
    futures:{
      f1:'5 Users',
      f2:'50GB Storage',
      f3:'Unlimited Public Projects',
      f4:'Community Access',
      f5:'Unlimited Private Projects',
      f6:'Dedicated Phone Support',
      f7:'Free Subdomain',
      f8:'Monthly Status Reports',
    }
  }

  const card3 = {
    im:image,
    im2:image,
    im3:image,
    color:'#b5b5b5',
    color2:'#000000',
    color3:'#000000',
    buten:'Buy Now',
    headcontent: 'PRO',
    cost: 50,
    futures:{
      f1:'Unlimited Users',
      f2:'50GB Storage',
      f3:'Unlimited Public Projects',
      f4:'Community Access',
      f5:'Unlimited Private Projects',
      f6:'Dedicated Phone Support',
      f7:'Free Subdomain',
      f8:'Monthly Status Reports',
    }
  }



  return (
    <>
      <header>React Price Cards</header>
      <div className="container">

        <Card data={card1} />
        <Card data={card2} />
        <Card data={card3} />
        
      </div>

    </>
  );
}

export default App;
