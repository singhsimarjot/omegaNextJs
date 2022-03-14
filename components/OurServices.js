import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
const OurServices = ({data}) => {
    
  return <div className="tabs pt-5">
  <div className="tab">
  {data.serviceTabs.map((item)=><><input type="radio" name="tabs" id={item.tadId} checked="checked" />
        <label htmlFor={item.tadId}>{item.tabName} </label></>)

  }
  <div className="g-4 py-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{550: 5, 750: 4, 900: 5}}
            >
                <Masonry columnsCount={5} gutter="10px">
                {data?.serviceGallery.map((item,i)=>
                <div key={i}>
                  <img
                    src={item.image}
                    key={i}
                    alt="Icon"
                    style={{width: "100%", display: "block"}}
                  />
                  </div>
               )}
                </Masonry>
            </ResponsiveMasonry>
            </div>
  </div>
  
 
  
</div>
    
}

export default OurServices