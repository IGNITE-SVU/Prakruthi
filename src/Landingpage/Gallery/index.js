import React from 'react'
import "../../Landingpage/index.css";
import Navbar from '../Navbar/navbar';
const Gallery = () => {
  return (
    <>
    <Navbar/>
    <div><section id="portfolio" class="portfolio">
    <div class="container">
  
      <div class="section-title word-head">
        <h2>Services</h2>
        <p>The program is the part of mentioned services</p>
      </div>
  
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">Kalpataru</li>
            <li data-filter=".filter-card">NSS</li>
            <li data-filter=".filter-web">CSP</li>
          </ul>
        </div>
      </div>
  
      <div class="row portfolio-container">
  
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <img src="https://kalpataru.stpi.in/wp-content/uploads/2022/09/Kalpataru-Logo-Latest-15.09.png" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Kalpataru 1</h4>
            <p>Kalpataru</p>
            <a href="https://kalpataru.stpi.in/wp-content/uploads/2022/09/Kalpataru-Logo-Latest-15.09.png" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
            <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <img src="https://www.parenttoday.org/wp-content/uploads/2017/08/volunteer-1326758_1280.png" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>CSP 3</h4>
            <p>CSP</p>
            <a href="https://www.parenttoday.org/wp-content/uploads/2017/08/volunteer-1326758_1280.png" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
            <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Kalpataru 2</h4>
            <p>Kalpataru</p>
            <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
            <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <img src="https://www.sjsach.org.in/wp-content/uploads/2020/12/NSS-ACTIVITY.jpeg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>NSS 2</h4>
            <p>NSS</p>
            <a href="https://www.sjsach.org.in/wp-content/uploads/2020/12/NSS-ACTIVITY.jpeg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
            <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <img src="https://res.cloudinary.com/dvbkv0axy/image/upload/v1677956488/IMG-20220923-WA0036_l0w7lr.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>CSP 2</h4>
            <p>CSP</p>
            <a href="https://res.cloudinary.com/dvbkv0axy/image/upload/v1677956488/IMG-20220923-WA0036_l0w7lr.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
            <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Udyan_Bati_Kalpataru_Tree.jpg/1280px-Udyan_Bati_Kalpataru_Tree.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Kalpataru 3</h4>
            <p>Kalpataru</p>
            <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Udyan_Bati_Kalpataru_Tree.jpg/1280px-Udyan_Bati_Kalpataru_Tree.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
            <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <img src="https://m.media-amazon.com/images/I/61cf-fMKNzL._SL1168_.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>NSS 1</h4>
            <p>NSS</p>
            <a href="https://m.media-amazon.com/images/I/61cf-fMKNzL._SL1168_.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
            <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <img src="https://res.cloudinary.com/dvbkv0axy/image/upload/v1677956488/IMG-20220924-WA0027_teqm2x.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>NSS 3</h4>
            <p>NSS</p>
            <a href="https://res.cloudinary.com/dvbkv0axy/image/upload/v1677956488/IMG-20220924-WA0027_teqm2x.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
            <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
  
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <img src="https://miracorp.us/wp-content/uploads/2019/03/community-service-illustration.png" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>CSP 3</h4>
            <p>CSP</p>
            <a href="https://miracorp.us/wp-content/uploads/2019/03/community-service-illustration.png" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
            <a href="#" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
  
      </div>
  
    </div>
  </section></div></>
  )
}

export default Gallery