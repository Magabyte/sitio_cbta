import React from 'react';
import './plantel.css'
import Footer from '../../components/footer/Footer';
import video1 from '../../assets/media/VID-01.mp4';
import video0 from '../../assets/media/VID-00.mp4';
const Plantel = () => {
    return (  
        <div>
            <h3 className="title-plantel mb-0">Plantel Educativo</h3>
            <div className="videos">
                <div className="video">
                    <video src={video1} controls autoPlay muted></video>
                </div>
                <div className="video" >
                    <video src={video0} controls></video>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
}
 
export default Plantel;