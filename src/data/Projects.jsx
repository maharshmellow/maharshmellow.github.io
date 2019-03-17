const projectData = [
    {
        title: "Do",
        description: '## Do is a modern and minimal, but fully-functional task manager. Here is a sneak peek:<iframe style="border: none;" width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEq44mWsD2M8pc5rvuOAZb9Eb%2FDo%3Fnode-id%3D0%253A1" allowfullscreen></iframe>',
        technologies: ["React Native", "Firestore", "Firebase Authentication", "OneSignal"],
        notice: "This project is still under active development."
    },
    {
        title: "Trakr",
        description: "## Trakr is a web application that keeps track of other websites and notifies the user by email if a change is detected. Could be used for job posting pages, scholarship pages, or anything that the user doesn't want to keep checking. Ex: when a new job posting is added, it would email the user saying that there was an update.",
        technologies: ["Django", "Amazon DynamoDB", "Firebase Authentication", "SendGrid"],
        demoLink: "https://trakr.maharsh.net",
        githubLink: "http://www.github.com/maharshmellow/trakr"
    },
    {
        title: "Live Transit",
        description: "## Shows the live location of all the Edmonton Transit System Busses and their estimated arrival times at all stops on the trip.",
        technologies: ["Flask", "Google Transit", "Google Maps", "Edmonton Open Data APIs"],
        demoLink: "https://transit.maharsh.net",
        githubLink: "http://www.github.com/maharshmellow/livetransit"
    },
    {
        title: "Group Study",
        description: "## A study timer that is different from the rest of the tomato timer apps because this allows multiple browsers to sync. The timer is synced between all connected users, and when one person pauses/plays/skips, it does that action on all connected browsers using sockets.",
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
        description: "## A website created for the Canadian Linked Data Initiative that converts Library Metadata into Linked Data. This project will be used by University Libraries across Canada to convert their data into Linked Data and to help uncover relationships between data that were previously hard to find.",
        technologies: ["Django", "PyMarc", "RDFLib", "Apache Jena Fuseki", "SPARQL"],
        githubLink: "https://github.com/cldi/CanLink",
    },
    {
        title: "Property Searcher",
        description: "## Shows the updated prices and other information of all Edmonton properties.",
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
    },
    {
        title: "Sprintr",
        description: "## A website that allows a user to upload a book and read it using a Rapid Serial Visual Representation Method similar to the one offered by Spritz Inc. This project no longer works after a chrome update removed a functionality it depended on.",
        notice: "Due to a chrome update breaking the changes, the live demo is no longer active. There is however a gif of the app in action in the Github repo.",
        githubLink: "https://github.com/maharshmellow/sprintr"
    },

];

export default projectData;