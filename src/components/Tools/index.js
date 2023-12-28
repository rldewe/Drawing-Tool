import React, { useState } from 'react';
import styles from './index.module.css';
import {COLORS} from '@/constants';

const Tools = () => {
  const [strokeWidth, setStrokeWidth] = useState(1);

  const increaseStrokeWidth = () => {
    if (strokeWidth < 3) {
      setStrokeWidth(strokeWidth + 1);
    }
  };

  const decreaseStrokeWidth = () => {
    if (strokeWidth > 1) {
      setStrokeWidth(strokeWidth - 1);
    }
  };

  const updateOpacity = (e) => {
    
  };

  return (
    <div className={styles.toolboxContainer}>
      {/* Main */}
      
        {/* Stroke */}
        <div className={styles.toolItems}>
          <h4 className={styles.toolText}>Stroke</h4>
          <div className={styles.itemContainer}>
            {/* Color panel */}
            <div className={styles.colorBox} style={{backgroundColor:'black'}}/>
            <div className={styles.colorBox} style={{backgroundColor:COLORS.RED}}/>
            <div className={styles.colorBox} style={{backgroundColor:COLORS.GREEN}}/>
            <div className={styles.colorBox} style={{backgroundColor:COLORS.BLUE}}/>
            <div className={styles.colorBox} style={{backgroundColor:COLORS.ORANGE}}/>
            <div className={styles.colorBox} style={{backgroundColor:COLORS.YELLOW}}/>
            <div className={styles.colorBox} style={{backgroundColor:COLORS.WHITE}}/>

            </div>
        </div>
      
      {/* Stroke Width */}
      <div className={styles.toolItems}>
        <h4 className={styles.toolText}>Stroke Width</h4>
        <div className={styles.itemContainer}>

          <button onClick={decreaseStrokeWidth}>-</button>
           
           <span style={{ margin: '0 10px' }}>{strokeWidth}</span>
          <button onClick={increaseStrokeWidth}>+</button>
        </div>
      </div>
      {/* Opacity */}
      <div className={styles.toolItems}>
        <h4 className={styles.toolText}>Opacity</h4>
        <div className={styles.itemContainer}>
          
          <input type="range" min={1} max={100} step={2} onChange={updateOpacity} />
        </div>
      </div>
    </div>
  );
};

export default Tools;
