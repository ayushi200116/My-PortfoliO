AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  { 
    title: "Fundamentals of Data Analytics  ",
    cardImage: "assets/images/education-page/futureskills.png",
    moocLink: "https://drive.google.com/file/d/1gRbUl-kQrCFvr_7hnQBojlIdgXE8eQT8/view",
  },
  { 
    title: "AWS Machine Learning Foundation Course",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://confirm.udacity.com/RVVA7ZK5",
  },
  {
    title: "Applied Machine Learning in Python",
    cardImage: "assets/images/education-page/coursera.svg",
    moocLink: "https://coursera.org/share/06210c50679cb5b9f916b1e2f4327afa",
  },
  {
    title: "Learning Python",
    cardImage: "assets/images/education-page/linkedln.jpg",
    moocLink: "https://drive.google.com/file/d/1Ao5UJ0o0fHul-81rpEi-bWzJIr1ENRdR/view?usp=sharing",
  },
  {
    title: "Python Bootcamp 2021 Build 15 working Applications and Games",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/certificate/UC-c3c31409-7535-4069-9cf5-b8e4d55dd293/",
  },
  {
    title: "opencv",
    cardImage: "assets/images/education-page/linkedln.jpg",
    moocLink: "https://www.linkedin.com/learning/certificates/b17af1cb4c9cae607a8ae2b895296342afbe6467e2da53985ab647c6ca13980b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bp2is40GpRreXa5Byb%2Fqilg%3D%3D",
  },
  {
    title: "Convolutional Neural Networks in Python: CNN Computer Vision",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/certificate/UC-0228cd65-b894-4481-8437-ebe0c33aed41/",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Timeline Section*/

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }
  
  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });


});