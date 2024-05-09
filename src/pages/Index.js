import React from 'react'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
// import HeroImage from "../assets/img/hero-image.png";
import SingleCarousel from '../components/SingleCarousel';
import MultiCarousel from '../components/MultiCarousel';

function Index() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h1 style={{ color: colors.grey[300] }}>Finest idea to increase your <h1 className='text-primary d-inline'>Productivity</h1></h1>
            <p style={{ color: colors.grey[300] }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it.</p>
            <div className='my-4'>
              <button className="btn btn-primary px-5 py-3">Explore more</button>
              <button className='btn btn-transparent d-inline-flex align-items-center py-3 mx-2' style={{ color: colors.grey[300] }}>
                <i class="fa-solid fa-star fa-lg mx-2" style={{ color: colors.grey[300], }}></i>
                Features Product
              </button>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png" alt="Hero Image" width="100%" />;
          </div>
        </div>

        <SingleCarousel />

      </div>

      <MultiCarousel />

      <div className='container py-5'>
        <div className='text-center pb-4'>
          <h6 style={{ color: colors.grey[300] }}>WHY CHOOSE US</h6>
          <h1 style={{ color: colors.grey[300] }}><h1 className='text-primary d-inline'>Creativity</h1> is no limit</h1>
          <p style={{ color: colors.grey[300] }}>With our various content of Ideas, Styles and Community.</p>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6 col-12 pb-4'>
            <i class="fa-solid fa-certificate fa-2xl mb-4 rotate text-primary"></i>
            <h3 style={{ color: colors.grey[300] }}>Best Quality</h3>
            <p style={{ color: colors.grey[300] }}>Download scroll-stopping images of the highest quality to make professional designs.</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-12 pb-4'>
            <i class="fa-solid fa-hourglass-half fa-2xl mb-4 rotate text-primary"></i>
            <h3 style={{ color: colors.grey[300] }}>Ready to use</h3>
            <p style={{ color: colors.grey[300] }}>From thousands of ready-to-publish images to our online editor, we work to get your project ready double-quick.</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-12 pb-4'>
            <i class="fa-solid fa-box-open fa-2xl start-end mb-4 text-primary"></i>
            <h3 style={{ color: colors.grey[300] }}>Fresh content</h3>
            <p style={{ color: colors.grey[300] }}>Our library is updated on a daily basis so you can find the newest and trendiest photos and designs.</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-12 pb-4'>
            <i class="fa-regular fa-compass fa-2xl mb-4 rotate text-primary"></i>
            <h3 style={{ color: colors.grey[300] }}>Discover best practice</h3>
            <p style={{ color: colors.grey[300] }}>Guaranteed search results: there’s an image and style for every project you might think of.</p>
          </div>
        </div>
      </div>


      <div className='py-5' style={{ backgroundColor: colors.grey[400]}}>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-7 col-md-6 col-sm-12 mb-4'>
              <p style={{ color: colors.grey[600] }}>Get paid from your ideas</p>
              <h2 style={{ color: colors.grey[600] }}>Sell your content at your fingertips</h2>
              <button className='btn btn-primary mt-3'>Learn more</button>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12 mb-4'>
              <img src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt34e30d5669e7309c/653add3080274d040a37d656/ISO_KeyArt_Final.png' className='w-100' />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Index