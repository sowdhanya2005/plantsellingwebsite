import React from 'react';
import im1 from '../../Assets/Greens/agathikeerai.jfif';
import im2 from '../../Assets/Greens/araikeerai.jfif';
import im3 from '../../Assets/Greens/brahmi.jfif';
import im4 from '../../Assets/Greens/brindaraj.jfif';
import im5 from '../../Assets/Greens/methileaves.jfif';
import im6 from '../../Assets/Greens/mintleaves.jfif';
import im7 from '../../Assets/Greens/moringa.jfif';
import im8 from '../../Assets/Greens/palak.jfif';
import im9 from '../../Assets/Greens/pulichakeerai.jfif';
import im10 from '../../Assets/Greens/thandu keerai.jfif';



import './Greens.css';
export default function Medicinal() {

  return (
    <div>
          <nav>
                <div class="logo bars">
                    <div class="bar">
                        <i class="fa fa-bars"></i>
                    </div>
                    <div className="App">

     
      
    </div>
   
           
                </div>
                <h2 style={{ textAlign:'center' }}>Greens</h2>
                <div class="menu">
                    <div class="close">
                        <i class="fa fa-close"></i>
                    </div>
                    
                   
                    
                </div>
                
            </nav>

 {/*  <div className="text">
 <h2 style={{ textAlign:'center' }}>Events Available</h2>
   </div> */}
    <div class="gallery">
        <div class="gallery-item">
       
            <img src={im1} alt="Sneha and Sagar Wedding" style={{height: '260px',
   }} />
            <div class="gallery-info">
            <h3>Ocimum Sanctum</h3>
                <p><b>Uses:aiding cough, asthma, diarrhea, fever, dysentery, arthritis, eye diseases, indigestion, gastric ailments, etc </b></p>
        { /* <h4>Rs 10 per gm</h4>*/}
           </div>
          
        </div>
     <div class="gallery-item">
            <img src={im2} style={{height: '260px'}} alt="Niddy's baby shower"/>
            <div class="gallery-info">
                <h3>Amaranthus dubius, the red spinach(Arai keerai)</h3>
                <p><b>Uses: </b>  The high fiber in amaranth also keeps you full longer. The oils in amaranth have been shown to help prevent and treat those with hypertension and cardiovascular disease.
                </p>
            </div>
        </div>
       
        <div class="gallery-item">
            <img src={im3} style={{height: '260px'}} alt="Vinamra And Asmitas Wedding"/>
            <div class="gallery-info">
                <h3>Centella asiatic(Brahmi leaves)</h3>
                <p><b>Uses: </b>  Vallarai Keerai/Brahmi Leaves for stomach problems, stress and depression: Stomach upset, diarrhoea and indigestion problems can be treated by consuming vallarai keerai. 
                </p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im4} style={{height: '260px'}} alt="Vinamra And Asmitas Wedding"/>
            <div class="gallery-info">
                <h3>False daisy(Bhringraj)
</h3>
                <p><b>Uses: </b>Bhringraj helps to control premature greying of hair. It has an ability to rejuvenate hair due to its Rasayana property. Bhringraj helps in quick healing of the wound, decreases swelling and brings back the normal texture of the skin.</p>
            </div>
        </div>
    </div>

    <div class="gallery">
        <div class="gallery-item">
            <img src={im5} style={{height: '260px'}} alt="Sneha and Sagar Wedding"/>
            <div class="gallery-info">
                <h3>Trigonella foenum-graecum(Methi leaves)</h3>
                <p><b>Uses: </b> Apart from lowering blood sugar levels, methi is also a great source of saponins which help reduce cholesterol.</p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im6} style={{height: '260px'}}alt="Niddy's baby shower"/>
            <div class="gallery-info">
                <h3>Mentha piperita L. (peppermint)</h3>
                <p><b>Uses: </b>Pudina is an aromatic herb widely used for its culinary benefits in foods. Mint leaf has man-effective properties; it may aid in gas relief from the stomach.</p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im7} style={{height: '260px'}}alt="Vinamra And Asmitas Wedding"/>
            <div class="gallery-info">
                <h3>Moringa oleifera(Moringa leaves)</h3>
                <p><b>Uses: </b> As an antioxidant, it seems to help protect cells from damage. Moringa might also help decrease inflammation and reduce pain. Moringa is used for asthma, diabetes, breast-feeding, and many other purposes.</p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im8} style={{height: '260px'}}alt="Vinamra And Asmitas Wedding"/>
            <div class="gallery-info">
                <h3>Spinacia oleracea(Spinach leaves)</h3>
                <p><b>Uses: </b>Spinach is rich in several minerals your body needs, including potassium. Eating foods that are high in potassium can help lower your blood pressure.</p>
            </div>
        </div>
    </div>

    <div class="gallery">
        <div class="gallery-item">
            <img src={im9} style={{height: '260px'}}alt="Sneha and Sagar Wedding"/>
            <div class="gallery-info">
                <h3>Hibiscus Cannabinus(Pulicha keerai)</h3>
                <p><b>Uses: </b>Pulicha Keerai or Sorrel Leaves have several immune-boosting properties, including increasing immunity, improving digestion, and controlling blood pressure and cholesterol levels. </p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im10} style={{height: '260px'}} alt="Niddy's baby shower"/>
            <div class="gallery-info">
                <h3>Love-Lies-Bleeding (Thandu Keerai)
                </h3>
                <p><b>Uses: </b>Thandu keerai is a panacea for human health, offering marvellous benefits for maintaining brain functions, heart health, lung, liver and kidney operations.</p>
            </div>
        </div>
       
    </div>


</div>

    
  )
}
