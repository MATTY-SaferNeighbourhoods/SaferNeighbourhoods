import React, { Component } from 'react';
import Header from '../../components/Header/header.js';
import AssetsandISO from './AssetsandISO.js';

class HomePage extends Component {
  render() {
    return (
      <div> 
        <Header headerName="MATTY Community"/>
        <div class="HomePage__mainbody">
        <AssetsandISO 
        name="What my community is sharing"
        srcOne='https://az616578.vo.msecnd.net/files/2016/04/04/635953734737456159-1660065123_keep-calm-tutor.png'
        srcTwo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLy-pz6lBxidu8tM_I58hvlOx-GvHaGM2goGNnfoHxEXLPzFn'
        srcThree= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1cV2aS-qNt7KX0m4lwKkC5hF7xdmLHyDkTCHsz2AiQsc-oFn' />
        <AssetsandISO 
        name="What my community needs"
        srcOne='https://i.pinimg.com/originals/8e/bb/c4/8ebbc4fcd99fb30c77ac1a550d09840f.jpg'
        srcTwo='https://www.westislandblog.com/wp-content/uploads/2017/06/moving-day-tips.jpg'
        srcThree= 'https://4.imimg.com/data4/EF/EM/MY-12196142/cloth-steamer-500x500.jpg'/>

        </div>
      </div>
    );
  }
}

export default HomePage;
