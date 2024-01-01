import React from 'react'

const gallery = ({data}) => {
    return (
        <div>
        {data.map((image) =><div key={image.id}>
        <div>
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} alt={image.title}/>
        </div>
        </div>)}
        </div>
    )
}

export default gallery