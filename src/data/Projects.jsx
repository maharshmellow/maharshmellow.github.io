const projectData = [
    {
        title: "Castroom",
        description: '## Castroom is a Podcast Search Engine. It gathers data using a distributed crawler mechanism running on Google Kubernetes Engine and then saves the results to Amazon Elasticsearch service. A React app presents a Search UI where ~250k podcasts can be searched. Currently, it only searches by podcast names but in the future, I would like to index all episodes (including descriptions) and create some type of alert mechanism where users can be alerted if a specified word appears in a podcast.  <img width="100%" alt="Search Engine Image" src="https://user-images.githubusercontent.com/4590693/72404218-c4908a00-3711-11ea-9bd1-c3c6a1bbb4c5.png"><img width="100%" alt="Results Image" src="https://user-images.githubusercontent.com/4590693/72404219-c4908a00-3711-11ea-87ea-762630172249.png">',
        technologies: ["Google Kubernetes Engine", "Amazon Elasticsearch Service", "Amazon Simple Queue Service", "Firebase Hosting", "Heroku", "Docker", "React", "Node.js", "LevelDB", "Datadog"],
        demoLink: "https://castroom.web.app",
        githubLink: "http://www.github.com/maharshmellow/castroom"
    },
    {
        title: "Do",
        description: '## Do is a modern and minimal, but fully-functional task manager. Here is a sneak peek:<iframe style="border: none;" width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEq44mWsD2M8pc5rvuOAZb9Eb%2FDo%3Fnode-id%3D0%253A1" allowfullscreen></iframe>',
        technologies: ["React Native", "Firestore", "Firebase Authentication", "OneSignal"],
        notice: "This project is still under development."
    },
    {
        title: "FL/DP for Mozilla",
        description: "## This was an open-source simulation created with a Mozilla team, over 4 months, to help determine if they should invest in infrastructure to support Federated Learning and Differencial Privacy for their products.",
        technologies: ["Python", "scikit-learn"],
        githubLink: "https://github.com/mozilla/CANOSP-2019/"
    },
    {
        title: "Live Transit",
        description: "## Shows the live location of all the Edmonton Transit System Busses and their estimated arrival times at all stops on the trip.",
        technologies: ["Flask", "Google Transit", "Google Maps", "Edmonton Open Data APIs"],
        demoLink: "https://transit.maharsh.net",
        githubLink: "http://www.github.com/maharshmellow/livetransit"
    },
    {
        title: "Trakr",
        description: "## Trakr is a web application that keeps track of other websites and notifies the user by email if a change is detected. This could be used for job posting pages, scholarship pages, or anything that the user doesn't want to keep checking. Ex: when a new job posting is added, it would email the user saying that there was an update on the website.",
        technologies: ["Django", "Amazon DynamoDB", "Firebase Authentication", "SendGrid"],
        demoLink: "https://trakr.maharsh.net",
        githubLink: "http://www.github.com/maharshmellow/trakr"
    },
    {
        title: "Group Study",
        description: "## Group Study is a study timer. But unlike most other popular tomato timer apps, this allows multiple browsers to sync. The timer is synced between all connected users, and when one person pauses/plays/skips, it does that action on all connected browsers using sockets.",
        technologies: ["Flask", "SocketIO", "Heroku"],
        demoLink: "https://study.maharsh.net",
        githubLink: "https://github.com/maharshmellow/groupstudy"
    },
    {
        title: "Weather Tracker",
        description: "## Simple weather application with a city search and a map. Made primarily to learn Go.",
        technologies: ["Go", "OpenWeatherMap", "Google Maps"],
        demoLink: "https://weather.maharsh.net",
        githubLink: "https://github.com/maharshmellow/weather"
    },
    {
        title: "CanLink Project",
        description: "## A website created for the Canadian Linked Data Initiative that converts Library Metadata into Linked Data. This project is currently used by University Libraries across Canada to convert their data into Linked Data and to help uncover relationships between data that were previously hard to find.",
        technologies: ["Django", "PyMarc", "RDFLib", "Apache Jena Fuseki", "SPARQL"],
        githubLink: "https://github.com/cldi/CanLink",
    },
    {
        title: "Property Searcher",
        description: "## Shows the property values and other information of all Edmonton properties.",
        technologies: ["Django", "Edmonton Open Data APIs"],
        notice: "The data used for this project has not been updated since 2017.",
        demoLink: "https://properties.maharsh.net/",
        githubLink: "https://www.github.com/maharshmellow/edmonton-property-search"
    },
    {
        title: "URL Shortener",
        description: "## A Simple URL Shortener made in ~1 Hour as a challenge against a friend.",
        technologies: ["Flask", "MongoDB"],
        demoLink: "https://url.maharsh.net",
        githubLink: "https://github.com/maharshmellow/urlshortener"
    },
    {
        title: "SMS Verifier",
        description: "## A Simple Demo of SMS verification. It asks for your phone number and then asks for the verification code that you received.",
        notice: "The country code (1 for Canada/US) needs to be added for the demo to work.",
        technologies: ["Django", "Till API"],
        demoLink: "https://sms.maharsh.net/",
        githubLink: "https://github.com/maharshmellow/sms-verify"
    }
];

export default projectData;
