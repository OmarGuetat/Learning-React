import React from 'react'
import SocialItem from './SocialItem.js'

function Social() {
    return (
        <ul className='list-group' >
            <SocialItem
                p={{
                    media: "Facebook",
                    id: "facebook",
                    img: "https://picsum.photos/60",
                }}
            />
            <SocialItem
                p={{
                    media: "Instagram",
                    id: "instagram",
                    img: "https://picsum.photos/61",
                }} />
            <SocialItem
                p={{
                    media: "Youtube",
                    id: "youtube",
                    img: "https://picsum.photos/63",
                }} />
            <SocialItem
                p={{
                    media: "Twitter",
                    id: "twiter",
                    img: "https://picsum.photos/62",
                }} />
        </ul>
    );
}
export default Social;