import React from 'react'
import './footer.css'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { VolumeDown } from '@material-ui/icons';
import {Grid , Slider} from '@material-ui/core'



function Footer() {
    return (
        <div className="footer">
          <div className="footer_left">
              <img src="" alt=""/>
              <div>
                  <h4>Kuthu</h4>
                  <p>vaaathi</p>
              </div>

          </div>
          <div className="footer_center">
             <ShuffleIcon className="footer_green"/>
             <SkipPreviousIcon className="footer_logo"/>
             <PlayCircleFilledWhiteIcon className="footer_logo" fontSize="large"/>
             <SkipNextIcon className="footer_logo" />
             <RepeatIcon className="footer_green" />
          </div>
          <div className="footer_right">
            <Grid container spacing={2}>
                 <Grid item>
                     <PlayCircleFilledWhiteIcon/>
                 </Grid>    
                 <Grid item>
                     <VolumeDown />
                 </Grid>
                 <Grid item xs>
                     <Slider/>
                 </Grid>

            </Grid> 
                 
                  
                   

          </div>
          
            
        </div>
    )
}

export default Footer
