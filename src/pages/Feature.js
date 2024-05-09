import React from 'react'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

function Feature() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div className='container my-5'>
            <h2 style={{ color: colors.grey[300] }}>Walk through our Featured contents</h2>
            <p style={{ color: colors.grey[300] }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>

            <div className='image-gallerry my-5'>
                <div className='item'><img src='https://pbs.twimg.com/media/FVY8_NTWAAIQfuw.jpg:large' alt='feature image' /></div>
                <div className='item'><img src='https://imgsvc.trackercdn.com/url/size(1280x720),fit(cover),quality(100)/https%3A%2F%2Ftrackercdn.com%2Fghost%2Fimages%2F2023%2F12%2F61620_GAmtNhxXYAARcxv.jpg/image.jpg' alt='feature image' /></div>
                <div className='item'><img src='https://thegamehaus.com/wp-content/uploads/2021/07/VALORANT-Ruination-Skin-Bundle.jpg' alt='feature image' /></div>
                <div className='item'><img src='https://cdn.gameleap.com/images/articles/art_nfEcY3nEPY/art-img_iMC-3weC4/1x.webp' alt='feature image' /></div>
                <div className='item'><img src='https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/01/07/Protocol_Bundle_1920x1080.jpg' alt='feature image' /></div>
                <div className='item'><img src='https://admin.esports.gg/wp-content/uploads/2024/03/VALORANT-Sovereign-2.0-Bundle-image.jpg' alt='feature image' /></div>
                <div className='item'><img src='https://preview.redd.it/this-40-valorant-champions-bundle-made-over-40-000-000-half-v0-3u92l0vg9yrb1.jpg?auto=webp&s=140407d8209a9dc8a61727c8751c6d921caab91c' alt='feature image' /></div>
                <div className='item'><img src='https://www.vcgamers.com/news/wp-content/uploads/2023/01/Bundle-Baru-Valorant.png' alt='feature image' /></div>
                <div className='item'><img src='https://staticg.sportskeeda.com/editor/2023/10/7683f-16984159405069-1920.jpg' alt='feature image' /></div>
                <div className='item'><img src='https://media.altchar.com/prod/images/original/7ffd20439bec-valorant-champs-banners-1.jpg' alt='feature image' /></div>
            </div>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature