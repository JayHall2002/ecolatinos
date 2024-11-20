import "./StatusGrid.css"

/**
 * This function returns a block that displays important vaccination statistics onto a webpage. The blocks
 * are contained in every node div id as shown in the code below. The nodes represent the different statistics
 * that are displayed in the boxes. The class specifications provide a way to style the boxes in a grid format.
 * Each box contains a number, a divider and a paragraph that supports the number. 
 * @returns 
 */
function StatusGrid() {
    return (
        <div className="stats-grid-block">
            {/* Display the first Block element on screen. */}
            <div id="w-node-_6d714e7a-c8bc-f423-083e-8c24b51ce591-2a77ae5b" className="stats-block bg-rnd-dark-red">
              {/* Display the numerical text contained in div. */}
              <div className="stats-number">
                <div>150</div>
              </div>
              {/* Create a divider and display the other information relating to the numertical statistic. */}
              <div className="stats-block-divider bg-rnd-yellow"></div>
              <p>Students took part in the Youth Environmental Summer Camp</p>
            </div>
          
            <div id="w-node-_6d714e7a-c8bc-f423-083e-8c24b51ce599-2a77ae5b" className="stats-block bg-rnd-green">
              <div className="stats-number">
                <div className="white-text">34</div>
              </div><div className="stats-block-divider bg-rnd-aqua"></div>
              <p>Out of 100 people participated and registered for the 
                Equitable Landscaping Program
              </p>
            </div>
    
            <div id="w-node-_6d714e7a-c8bc-f423-083e-8c24b51ce5a1-2a77ae5b" className="stats-block bg-rnd-blue">
              <div className="stats-number">
                <div>5000</div>
              </div>
              <div className="stats-block-divider bg-rnd-dark-red"></div>
              <p className="white-text">Parishioners from churches in Langley Park, Hyattsville, Silver Spring, Wheaton, and Adelphi have engaged 
                with EcoLatinos
              </p>
            </div>
    
            <div id="w-node-_6d714e7a-c8bc-f423-083e-8c24b51ce5a9-2a77ae5b" className="stats-block bg-rnd-green">
    
              <div className="stats-number">
                <div>$50K</div>
              </div>
              {/* Divider and paragraph. */}
              <div className="stats-block-divider bg-rnd-dark-red"></div>
              <p>Has been received in donations from partnerships</p>
            </div>
    
            <div id="w-node-_6d714e7a-c8bc-f423-083e-8c24b51ce5b1-2a77ae5b" className="stats-block bg-rnd-blue">
              <div className="stats-number">
                <div>1400</div>
              </div>
              <div className="stats-block-divider bg-rnd-yellow"></div>
              <p>Students have interacted with EcoLatinos through the summer camp and After School programs</p>
            
            </div>
            <div id="w-node-_6d714e7a-c8bc-f423-083e-8c24b51ce5b9-2a77ae5b" className="stats-block bg-rnd-dark-red">
              <div className="stats-number">
                <div>25</div></div>
              <div className="stats-block-divider bg-rnd-aqua"></div>
              <p>Events have been hosted by EcoLatinos throughout the DMV area</p>  
            </div>
          </div>
      );
}

export default StatusGrid;