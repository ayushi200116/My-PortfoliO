AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  
  {
    langImage: "assets/images/techstack-page/java.png",
    langName: "Java",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
  },
  {
    langImage: "assets/images/techstack-page/numpy.png",
    langName: "Numpy",
  },
  {
    langImage:"assets/images/techstack-page/pandas.png",
    langName:"Pandas",
  },
  {
    langImage: "assets/images/techstack-page/opencv.png",
    langName: "Opencv",
  },
  {
    langImage:"assets/images/techstack-page/Matplotlib.png",
    langName:"Matplotlib",
  },
  {
    langImage:"assets/images/techstack-page/Microsoft_Office_Excel.png",
    langName:"Microsoft Office Excel",
  },
  {
    langImage:"assets/images/techstack-page/TensorFlow.png",
    langName:"TensorFlow",
  },
  {
    langImage:"assets/images/techstack-page/Scikit_learn.png",
    langName:"Scikit Learn",
  },
  {
    langImage:"assets/images/techstack-page/mysql.jpg",
    langName:"MySql",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
  },
  
  
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
