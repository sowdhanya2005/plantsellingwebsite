import React from 'react';
import im1 from '../../Assets/Medicinal/andrographis.jpeg';
import im2 from '../../Assets/Medicinal/ashwagandha-plant.jpg';
import im3 from '../../Assets/Medicinal/astargulas.jpeg';
import im4 from '../../Assets/Medicinal/blackco.jpeg';
import im5 from '../../Assets/Medicinal/goldensal.jpeg';
import im6 from '../../Assets/Medicinal/kaarporavalli.jpeg';
import im7 from '../../Assets/Medicinal/phylanthus.jpeg';
import im8 from '../../Assets/Medicinal/rhodila.jpeg';
import im9 from '../../Assets/Medicinal/valarai1.jpeg';
import im10 from '../../Assets/Medicinal/wildgoose.jpeg';


import './Medicinal.css';
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
                <h2 style={{ textAlign:'center' }}>Medicinal Plants</h2>
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
            <h3>Andrographis paniculata(Green Chireta)</h3>
                <p><b>Uses: </b>Andrographis is used to enhance immune system and increase body's resistance to disease.</p>
          <h4>Rs 10 per gm</h4>
           </div>
          
        </div>
     <div class="gallery-item">
            <img src={im2} style={{height: '260px'}} alt="Niddy's baby shower"/>
            <div class="gallery-info">
                <h3>Withania somnifera(Ashwaganda)</h3>
                <p><b>Uses: </b>Ashwagandha is to reduce anxiety and stress, support restful sleep, and even improve cognitive functioning in certain populations.
                </p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im3} style={{height: '260px'}} alt="Vinamra And Asmitas Wedding"/>
            <div class="gallery-info">
                <h3>Chrysopogon zizanioides(Vettiver)</h3>
                <p><b>Uses: </b> Vetiver essential oil is widely used in aromatherapy for its calming and grounding effects. It is believed to help reduce stress, anxiety, and promote relaxation. Its deep, earthy scent is thought to have a stabilizing effect on emotions.
                </p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im4} style={{height: '260px'}} alt="Vinamra And Asmitas Wedding"/>
            <div class="gallery-info">
                <h3>Black cohosh( Black bugbane)</h3>
                <p><b>Uses: </b>To treat musculoskeletal pain, fever, cough, pneumonia, sluggish labor, and menstrual irregularities</p>
            </div>
        </div>
    </div>

    <div class="gallery">
        <div class="gallery-item">
            <img src={im5} style={{height: '260px'}} alt="Sneha and Sagar Wedding"/>
            <div class="gallery-info">
                <h3>Goldenseal (Hydrastis canadensis)</h3>
                <p><b>Uses: </b>Goldenseal is traditionally used to treat digestive issues such as gastritis, ulcers, and diarrhea. Its antimicrobial properties may help combat gastrointestinal infections.
                </p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im6} style={{height: '260px'}}alt="Niddy's baby shower"/>
            <div class="gallery-info">
                <h3>Mexican Mint(Karpooravalli)</h3>
                <p><b>Uses: </b>It is used in the treatment of skin infections, mouth ulcers, hiccups, indigestion, and colic asthma.</p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im7} style={{height: '260px'}}alt="Vinamra And Asmitas Wedding"/>
            <div class="gallery-info">
                <h3> Phyllanthus niruri(Keezhanelli)</h3>
                <p><b>Uses: </b>They can help treat high blood pressure and a range of other conditions. Some practitioners of herbal medicine use Phyllanthus niruri as a diuretic. In a 2018 study , researchers found that Phyllanthus niruri has a diuretic effect in rats, boosting the excretion of sodium in the urine.</p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im8} style={{height: '260px'}}alt="Vinamra And Asmitas Wedding"/>
            <div class="gallery-info">
                <h3>Rhodiola Rosea(Golden Root)</h3>
                <p><b>Uses: </b>Adaptogens are a class of natural substances that are believed to stimulate the body's resistance to physical, environmental, and emotional stressors. Rhodiola extract might help protect cells from damage and regulate heartbeat.</p>
            </div>
        </div>
    </div>

    <div class="gallery">
        <div class="gallery-item">
            <img src={im9} style={{height: '260px'}}alt="Sneha and Sagar Wedding"/>
            <div class="gallery-info">
                <h3>Centella Asiatica(Vallarai )</h3>
                <p><b>Uses: </b> gotu kola is most often used to treat varicose veins and chronic venous insufficiency, a condition where blood pools in the legs.</p>
            </div>
        </div>
        <div class="gallery-item">
            <img src={im10} style={{height: '260px'}} alt="Niddy's baby shower"/>
            <div class="gallery-info">
                <h3>Europen Gooseberry(Wild Gooseberry)</h3>
                <p><b>Uses: </b>Gooseberry is a tart fruit high in nutrients, such as vitamin C. It has several potential health benefits, including anti-aging, antioxidant, and anti-carcinogenic properties.</p>
            </div>
        </div>
       
    </div>


</div>

    
  )
}
