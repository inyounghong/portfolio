class HomeController {
    constructor() {
        this.name = 'home';
        
        this.projects = [
            // {
            //     "name": "Cetera Client Portal",
            //     "preview_image": "",
            //     "type": "Full-stack",
            //     "work": "Sooryen Technologies",
            //     "slug": "brief description here",
            //     "description": "One of my main projects at Sooryen Technologies was creating a client portal for <a href=\"https://www.cetera.com/\">Cetera Financial Group</a> users to register, login, and manage their financial accounts. <br><br>Worked with both the back-end and front-end teams using Java Spring and AngularJS.",
            //     "tags": ["Java", "AngularJS", "HTML5/CSS3", "SASS"],
            //     "img": "cetera1.png",
            //     "img2": "cetera2.png"
            // },
            // {
            //     "name": "Equallet",
            //     "type": "Full-stack",
            //     "work": "Sooryen Technologies",
            //     "description": "Equallet is a project that aims to promote women in business by making it easier to find, invest in, and support women-owend businesses.<br><br> This project involved working closely with the client and leading a team of front and back-end interns to design and develop a yelp-like website for women-owned businesses in Drupal/PHP/MySQL. The MVP allowed users to register and login, add new businesses, claim businesses, and search for businesses with a variety of filters including work hours, location, category and subcategory, and tags.",
            //     "tags": ["Drupal", "PHP", "MySQL", "HTML5/CSS3"],
            //     "img": "equallet.jpg"
            // },
        	{
        		"name": "SimplyDevio.us",
                "preview_image": "simplydevious.png",
                "slug": "Providing non-coders the ability to easily create and purchase their own CSS themes for DeviantART.com.",
        		"description": "Simply Devio.us is a website I built to serve as a platform for selling CSS themes and widgets for DeviantART.com. This site allows users without any coding or design experience to easily create their own CSS skins and themes for DeviantART.com. <br><br> One of the greatest challenges of this project was providing enough functionality without overwhelming the user, who was expected to not have any experience with HTML or CSS. The first iteration of this site began in 2013 and was written in HTML/CSS/JS. Over the next few years, user feedback was used to continuously update the design to make the user experience as intuitive as possible. In addition, PHP was later incorporated for templating, jQuery replaced most JS, and SCSS was used to simplify styling. Now in 2016, I am working on reorganizing the site with AngularJS to make scaling easier, as well as adding backend with MySQL to allow users to save, edit, and share their designs.",
        		"tags": ["JS/jQuery", "HTML5/CSS3", "SASS", "Design", "PHP", "Python", "Responsiveness"],
        		"url": "http://www.simplydevio.us/",
        		"img": "simplydevious.jpg",
        		"img2": "simplydevious2.png"
        	},
            {
        		"name": "Interactive Ranking Chart for Produce 101",
                "preview_image": "produce.jpg",
                "slug": "An interactive visualization to track rankings over time in a highly popular Korean idol survival show.",
        		"description": "VirusClicker is a time-wasting clicking game inspired by the infamous Cookie Clicker. Click on the virus to infect people, and then buy extra spokes for your virus to infect even more people. <br><br>Project was a quick study in AngularJS.",
        		"github": "https://github.com/inyounghong/VirusClicker",
        		"tags": ["AngularJS", "JS/jQuery", "HTML5/CSS3", "Design"],
        		"url": "http://www.simplydevio.us/VirusClicker/",
        		"img": "virusclicker.jpg"
        	},
        	{
        		"name": "Language Learning Translation Website",
                "preview_image": "translation.gif",
        		"slug": "Making language learning easier by providing instant, inline translations for foreign texts and quizzing you on your most frequently translated words.",
        		"description": "This project was an effort to make language learning made easier by providing instant, inline translations for foreign texts. Users can create an account and upload texts to read or browse other texts uploaded by others. Clicking on a word in a text sends an AJAX request to the Yandex translation API and displays a translation above to the word, allowing for a smooth and seamless reading experience. <br><br> All translated words are recorded for the user to later review, edit with a custom translation, or delete. A flashcard function is provided to help users learn any words that haven't been marked as learned. <br><br> This project was a study in Meteor.js and database design. Project inspired by the difficulty of German class.",
        		"tags": ["Meteor.js", "APIs", "JS/jQuery", "MongoDB", "Bootstrap", "HTML5/CSS3"],
        		"url": "http://translationapp.meteor.com/",
        		"img": "translationapp.gif",
        		"github": "https://github.com/inyounghong/translationapp",
        		"img2": "translationapp2.gif"
        	},
        	{
        		"name": "Wanna+",
                "preview_image": "wanna.gif",
        		"slug": "A beautiful, user-friendly online 'Want to Do' list for organizing, prioritizing, and accomplishing all those things you never quite got around to doing.",
        		"work": "Personal Project",
        		"description": "Wanna is an online \"Want to Do\" list. Organize, prioritize, and accomplish all those things you never quite got around to doing. The drag-and-drop <a href=\"http://gridster.net/\">Gridster</a> jQuery library was used to create a user-friendly and dynamic to-do list. All styling and design was created from scratch. <br><br>Project was a practice in design and JS/jQuery.",
        		"tags": ["JS/jQuery", "Design", "HTML5/CSS3", "SASS"],
        		"url": "http://www.simplydevio.us/wanna/",
        		"img": "wanna.gif",
        		"img2": "wanna2.gif"
        	},
        	{
        		"name": "CU Change",
                "preview_image": "cuchange.png",
        		"slug": "A reddit-style forum for Cornell University students to suggest and vote on issues to bring to the attention of Student Assembly.",
        		"description": "CUChange is a reddit-style forum for students to be able to voice their concerns for Cornell's Student Assembly (SA). The problem was that inspired this project was two-fold: students had no organized way of sending in suggestions, and the SA had no way of knowing the problems that the students felt most passionate about.<br><br> CUChange is an online forum that allows anyone with a Cornell email to post suggestions, upvotes suggestions they support, or comment to start discussions about suggestions. Posts are categorized into the various committees of SA to allow each representative to focus on the issues that directly concern them, and posts can be filtered by most popular, newest, or oldest. Admins of the website can mark posts with different statuses, such as open, in progress, or resolved to update students on the status of their posts.<br><br> Made with MeteorJS during the 24-hour Random Hacks of Kindness hackathon.",
        		"tags": ["MeteorJS", "JS", "Bootstrap", "HTML5/CSS3", "Design"],
        		"url": "http://cuchange.meteor.com",
        		"img": "cuchange.jpg",
        		"github": "https://github.com/inyounghong/walrus",
        		"img2": "cuchange1.png"
        	},
        	{
        		"name": "SRI-Rice",
                "preview_image": "sririce.png",
        		"slug": "Complete website redesign for Cornell University's SRI International Network and Resources Center (SRI-Rice)",
        		"description": "SRI-Rice is an organization at Cornell's College of Agriculture and Life Sciences that is dedicated to spreading knowledge and resources for the System of Rice Intensification (SRI) method, which allows farmers to grow more rice with far less inputs. <br><br> This project involved distilling the the organization's main ideas from an older and cluttered website and presenting them in a new, concise, and professional website. Worked closely with the client to determine design needs and strategies. Designed detailed wireframes and mock-ups, iterated upon them, and finally implemented them with HTML5, SASS, Bootstrap, PHP. Ensured that the website is fully responsive so it will be able to be viewed across multiple devices and in areas of the world with low bandwidth connection.",
        		"tags": ["Design", "Bootstrap", "HTML5/CSS3", "Git", "Responsiveness"],
        		"url": "http://simplydevio.us/sri/",
        		"github": "https://github.com/inyounghong/SRI",
        		"img": "sri.png"
        	},
        	{
        		"name": "BelleApps",
                "preview_image": "belleapps.png",
        		"slug": "Full-stack web work and graphic design for Belleapps, a startup for peer-to-peer food delivery service.",
        		"work": "Cornell Startup",
        		"description": "Belleapps is a Cornell-based startup that focuses on peer-to-peer food delivery service. Led a team to develop dynamic front-end designs and a web application from Photoshop mockups and wireframes. Integrated Bootstrap to create a fully responsive website. Designed icons and graphics for web and mobile. Used Git for version control.",
        		"tags": ["Design", "Bootstrap", "HTML5/CSS3", "JS/jQuery", "PHP", "Git", "Responsiveness"],
        		"url": "http://www.belleapps.me/",
        		"img": "belleapps.jpg"
        	},
        	{
        		"name": "Women in Computing at Cornell",
                "preview_image": "wicc.jpg",
        		"slug": "Complete website redesign for Women in Computing at Cornell.",
        		"work": "Work",
        		"description": "WICC is a club at Cornell that aims to empower and support women in computing fields. This project involved completely redesigning an existing website for a more professional and visually-pleasing appearance. Developed a new website architecture to better organize existing content and revamp the way visitors traveled through the site. Used HTML, SASS, Bootstrap, Javascript/jQuery, PHP, Git.",
        		"tags": ["Design", "HTML5/CSS3", "SASS", "Responsiveness"],
        		"url": "http://wicc.acm.org/index.php",
        		"github": "https://github.com/inyounghong/wicc",
        		"img": "prev_wicc.jpg"
        	},
        	{
        		"name": "Fiberspark",
                "preview_image": "fiberspark.png",
        		"slug": "Complete website redesign, involving rebranding and new graphics.",
        		"work": "Cornell Startup",
        		"description": "Fiberspark is a Cornell-based startup that offers the fastest and most reliable fiber optic internet in Ithaca.<br><br> This project involved designing a website from scratch, with an emphasis on clean and clear design. Designed new graphics and rebranded logo.",
        		"tags": ["HTML5/CSS3", "Design", "JS/jQuery", "Responsiveness"],
        		"url": "http://www.fiberspark.com/",
        		"img": "fiberspark.jpg"
        	},
        	{
        		"name": "VirusClicker",
                "preview_image": "virusclicker.jpg",
        		"type": "Design & Front-End",
        		"work": "Personal Project",
        		"description": "VirusClicker is a time-wasting clicking game inspired by the infamous Cookie Clicker. Click on the virus to infect people, and then buy extra spokes for your virus to infect even more people. <br><br>Project was a quick study in AngularJS.",
        		"github": "https://github.com/inyounghong/VirusClicker",
        		"tags": ["AngularJS", "JS/jQuery", "HTML5/CSS3", "Design"],
        		"url": "http://www.simplydevio.us/VirusClicker/",
        		"img": "virusclicker.jpg"
        	},
        	// {
        	// 	"name": "Virtuoso",
        	// 	"type": "Design & Front-End",
        	// 	"installs": 797,
        	// 	"description": "Virtuoso is a free DeviantART Skin designed especially for clean, sleek, and professional designs. The aim was to provide a variety of features while ensuring that the skin remained simple to use, even for those without any HTML experience.",
        	// 	"tags": ["Design", "HTML5/CSS3"],
        	// 	"url": "http://sta.sh/01uzpinlvlhk",
        	// 	"img": "virtuoso.jpg"
        	// }
        ]

        console.log(this);
        console.log(this.experiences);
    }
}

export default HomeController;
