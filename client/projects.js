export default [
    {
        title: 'Curato',
        image_url: '../../client/images/curato.png',
        description: 'Helping you find relevant things to do',
        name: 'curato',
        tag: 'web app',
        color: '#BC4432',
        links: {
            github: 'https://github.com/Curato-Capstone',
            npm: ''
        },
        content: {
            idea: 'Helping people sift through all of the choices they have when looking for something to do',
            stack: ['React.js', 'Redux', 'React Native', 'Koa', 'Python'],
            execution: [['What is Curato?', `Curato was my group\'s Capstone project. We focused our audience on college students that move out of state to attend college. This is to help ease the moving process by finding businesses or points of interest that are relevant to them.

Instead of showing a user pages of information like some competitors, we give fewer, more specialized suggestions based on the user’s “preferences.” That way, users don’t need to spend most of their time sifting through all the various options. When they create an account, they set these preferences based on the things that they like, such as art, sports, or food. Using these values, we then use machine learning algorithms to suggest places that most similarly match the user preferences; a user can search on a term or get random suggestions, and change their preferences whenever they change.`]]
        }
    },

    {
        title: 'NBA Career Trajectory',
        image_url: '../../client/images/nba.png',
        description: 'A visualization of the statistic career trajectory of NBA Players',
        name: 'nba',
        tag: 'data viz',
        color: '#004D40',
        links: {
            github: 'https://github.com/NgoKnows/NBA-Career-Trajectory',
            npm: '',
            website: 'http://192.241.220.25/'
        },
        content: {
            idea: 'Visualizing the trajectory of stats of players so that we can compare player\'s careers',
            stack: ['D3', 'React.js', 'Redux', 'Koa'],
            execution: [
                ['Motivation', `This was an assignment for my data viz class, and I decided to see if I would be able to combine using ReactJS (a front-end library) and d3. Despite knowing this was out of scope, I wanted to see if I could do it, knowing fully well that this may be very challenging and increase both the complexity and time needed. I’ve always been someone who likes to learn as much as possible from assignments when given the opportunity, and would rather spend more time to learn more, than copy and paste for a quick solution.

The reason I wanted to combine the two was because React along with Redux (a Flux implementation) makes it very easy to keep track and mutate the state of your application. So first thing I did before I did any d3 was set up the data flow for the application, I figured out all of the data I would need to accomplish the visualization I was aiming for.`]
,
            ['Getting the data', `As I mentioned before one of the things that I needed to get data on the names of all past and present NBA players in order to implement autocomplete. I also needed to get their NBA.com ID’s so that I could make the necessary API calls and serving up the correct images. So I luckily was able to find an index page for present and historic players on NBA.com so I had to implement a scraper in Python to parse that page and obtain names and associate those with ID’s. I tossed all of that data into a JSON file.
`], ['Backend', `I set up a server in Node, so that I was able to set up an API for my application. One of the things I needed to do was have an efficient way of autocompleting searches, so on the server I essentially used a Trie data structure and inserted all of the names into that and would send search autocomplete results to the application.`],
['D3 + React Events', `One of the interesting problems I faced while developing this visualization/application. One problem I thought about was how was I going to coordinate interactions with d3 and React, such as hovering over an element such as a “Chip” and having that affect the visualization controlled by d3? The solution I came up with was using d3 in the React event handlers, and using Redux in the d3 code so that I could mutate data from within d3 and that mutated data would trickle down into my React components.
`]
]
        }
    },

    {
        title: 'Redux Data Flow Visualization',
        image_url: '../../client/images/dataflow.png',
        description: 'Visualizing how data flows through a Redux Application',
        name: 'dataflow',
        tag: 'data viz',
        color: '#4A148C',
        links: {
            website: 'http://159.203.240.30/',
            github: 'https://github.com/NgoKnows/Redux-Dataflow',
            npm: '',
            writeup: 'https://docs.google.com/document/d/1eieU-NNtdLaGkisj_ECs-rdo2On0jS19trFN96yUUCg/edit?usp=sharing'
        },
        content: {
            idea: 'A visualization of how data flows through a Redux Application',
            stack: ['React.js', 'Redux'],
            execution: [
                ['Details', 'For a detailed write-up on how the motivation and implemntation behind this visualization, check out the write-up link above. Check out the visualization above as well.']
            ]
        }
    },

    {
        title: 'Missed Connections for Jerks',
        image_url: '../../client/images/mcfj.png',
        description: 'Was someone a jerk to you?',
        name: 'mcfj',
        tag: 'web app',
        color: '#145270',
        links: {
            website: '',
            github: 'https://github.com/NgoKnows/Missed-Connections-For-Jerks',
            npm: ''
        },
        content: {
            idea: 'A place where people who have negative experiences with others in life, can go to and vent about their experiences',
            stack: ['Node.js', 'Koa', 'React.js', 'Redux', 'Socket.io', 'RethinkDB', 'Redis', 'Webpack'],
            execution: [
                ['Server', 'I used Node.js as the backend, and used Koa as the web framework of choice. The reason I chose Koa was because I felt that using generators was a cleaner and more expressive way of handling asynchronous code. It was definitely a challenge at first, getting used to and learning how to use generators, but it made the server-side code very easy to reason about, especially being able to yield to promises and other generators. Something else I appreciate about Koa is that it is a modular framework, allowing you to add features as needed, and avoiding unneeded bloat.\nWriting the REST API was made really easy thanks to the use of Koa. Some new skills I learned were using Redis to cache API responses because the API I was using to implement autocomplete was rate limited, I turned to Redis as a caching solution.'],
                ['Realtime', 'In addition to this, I used RethinkDB as the data persistence layer, which was a really good choice, both because its query language is very expressive, but also because they implement a feature called change feeds, which allow you to listen to changes on a table, document, or even a query. This makes realtime functionality very easy, so for example you can listen to changes on a table of events, and update your page each time a new event is added.'],
                ['React/Redux', 'To control dataflow in the application I used Redux, which is an implementation of Facebook’s flux architecture. It is heavily influenced by functional programming and revolves around having one state tree for you application, and anytime you want to change the state you dispatch “actions” which are interpreted by a “reducer” which determines how your state is changed.\nSo for example in my application, whenever anything happened such as the user moving around the map to explore events or a new event appearing on the map, an action would dispatch and that would update the state, which is then passed to the root of the application. From here the state would flow down to children components and React figures out what needs to be updated, thus updating the view.'],
                ['Developer Experience', 'For this project I used a lot of technologies that are considered cutting edge, but not because they are so, but rather because I wanted to try out technologies which give the best developer experience. With Koa as I said before uses generators, which I found makes server-side code easy to both write and reason about compared to callbacks and/or promises alone.\nIn addition to this, Redux makes state management so much easier than other solutions I have found. First, Redux touts itself as a “Predictable State Container for JavaScript apps”, this is because it allows you to be able to manage the state in a manner which you know the sequence of actions that occurred to get to this state. The ecosystem built around Redux is growing quickly, and provides DevTools in which you can see actions as they are being dispatched and even do time-travel, where you can reverse actions that have been dispatched as well as redoing them.\nFinally, something else I very much enjoyed using was Hot Module Reloading which is possible to do with React and Webpack. Essentially whenever you make a change to a component, you can see the change immediately without a refresh, and state remains exactly the same. This is the most amazing part about it, not only do you not have to refresh, but your state remains unchanged, and this means that when you are debugging something that requires you to step through many state changes, it can be cumbersome to have to go through all these steps each time you make a change and have to refresh.'],
                ['Final Thoughts', 'Overall this project has been really fun to work on, and I’ve used it as a way to learn things that I’ve always wanted to learn. It may not be the most practical app, but I think I’ve learned so much in regards to full stack development, and a variety of technologies. I plan on learning so much more, and this is only the beginning.']
            ]
        }
    },


    {
        title: 'Everything Sports',
        image_url: '../../client/images/everything-sports.png',
        description: 'Fantasy Tools for the Saavy Fantasy Sports Player',
        name: 'everythingSports',
        tag: 'web app',
        color: '#1BBC9C',
        links: {
            website: '',
            github: 'https://github.com/NgoKnows/Everything-Sports',
            npm: ''
        },
        content: {
            idea: 'A application that provides users tools to help their fantasy basketball team. Including features such as visual comparisons of players, and more easily sortable view of their teams',
            stack: ['AngularJS', 'JavaScript', 'Python', 'D3.js'],
            execution: [
                ['Data Scraping', 'I knew that to implement the features that I wanted to, I would need to get NBA statistics, and at the time there were no free ways of obtaining such information. So I had to scrape the data, and so I implemented a data crawler/scraper in Python. I utilized the BeautifulSoup library to do so, and figured out the general outline of what I would need to do. First I had to access the page which contained all active players of a particular letter, traverse over each letter, and then follow the links leading to each player. Then I analyzed the structure of the page of a player’s statistics and then was able to extract any relevant statistics. I stored all of this data in a dictionary, and I then wrote that dictionary to a JSON file.'],
                ['My First Foray into Web Apps', 'This was my first attempt at making a web application, and is what started my journey into web development.']
            ]
        }
    },

    {
        title: 'Finding Value in Tips (Yelp Data Analysis)',
        image_url: '../../client/images/yelp.jpg',
        description: 'What kind of value do tips provide to Yelp?',
        name: 'yelp',
        tag: 'data science',
        color: '#B22B33',
        links: {
            website: 'http://104.236.104.237:8000/',
            github: '',
            npm: ''
        },
        content: {
            idea: 'We saw that "tips" were a section in Yelp, but we didn\'t know what kind of value they actually had. So we wanted to find out.',
            stack: ['Python', 'R', 'JavaScript'],
            execution: [
                ['Background', 'This project was done as group as part of an assignment for INFO 474 (Intro to Data Science). Check out "method" section of website for detailed information.']
            ]
        }
    },

    {
        title: 'Easy React Calendar',
        image_url: '../../client/images/calendar.png',
        description: 'A simple beautiful calendar made in React',
        name: 'calendar',
        tag: 'react component',
        color: '#1B5E20',
        links: {
            website: '',
            github: 'https://github.com/NgoKnows/easy-react-calendar',
            npm: 'https://www.npmjs.com/package/easy-react-calendar'
        },
        content: {
            idea: 'A simple datepicker made in React.',
            stack: ['React', 'Webpack', 'NPM'],
            execution: [
                ['Inspiration', 'I was working on Missed Connections for Jerks, and I found that I needed a DatePicker component. Rather than use a pre-made component I decided to build my own, and I had always been interested in how DatePickers were implemented. Most of all, I just wanted to see if I could do it, because it seemed fairly complicated.'],
                ['NPM', 'Another aspect of this project was uploading my component as an NPM package so that other people can use it. I had to do learn about how uploading NPM packages worked in general, and while that was fairly straightforward, I ran into a few problems with other aspects. The first problem I had was understanding how to include fonts, and images because while I was developing, these were being provided through a CDN and served up through a server respectively. So I eventually figured out that I would need to bundle them with Webpack.\nMy other problem was how to have this code work, when it required transpiration  and not everyone who is going to be using it will be using Babel to transpile. So I came to the solution that I would need to do the transpilation and bundling before uploading to NPM, and this was through running Webpack in the prepublish step which is run before you upload to NPM.\nThere is a link to the npm package above if you want to check it out.']
            ]
        }
    },

    {
        title: 'Portfolio',
        image_url: '../../client/images/portfolio.png',
        description: 'alexngo.io',
        name: 'portfolio',
        tag: 'website',
        color: '#000000',
        links: {
            website: '',
            github: 'https://github.com/NgoKnows/my-portfolio',
            npm: ''
        },
        content: {
            idea: 'My Portfolio',
            stack: ['Node.js', 'Koa', 'React.js', 'Redux'],
            execution: [
                ['Server-Side Rendering', 'Besides creating a new place to show my works, I used this as an opportunity to learn how to do server-side rendering with React.\nUp to this point I’ve heard all the benefits of server-side rendering, such as load times and allowing web crawlers to index your webpage, to name a few. So I wanted to see how easy (or hard) it would be to do so in React.\nFirst thing I did was try the most simple webpage I could, and that was a plain html page with just a div that said “Hello World!”. It worked and the concept seemed simple enough, you use React.toString(), and it returns the plain html (with react-id’s) of the components which you pass it, you send that html to the client and then once the JavaScript loads, React hooks into your html using the aforementioned react-id’s, and then it’s business as usual!'],
                ['Adding More Complexity', 'The problems that I ran into came as I started adding more complexity. The first being the styling library I use, which is Radium, a CSS in JS solution. The problem being that the way Radium works is that it applies prefixes based on the user-agent, which is available on the client, but not on the server. Same problem with media-queries, which uses the window measurement on the client, but no such equivalent on the server. The solution being a config that Radium accepts as a prop, which you can pass the user-agent and window size which can be obtained by the request made to the server.\nAnother was React Router, but that was fairly simple, essentially using RouterContext rather than Router on the server-side. There was a bug I ran into with Radium interacting with ReactRouter, which surprisingly turned out to be a bug in React, with the fix hopefully being merged in the next release.\nFinally, the last piece pertaining to server-side rendering, was Redux. The basic way in which this is handled is you compose a store, you can dispatch some actions to change the state, and then you grab the state from the store. From there you take the state and convert it to JSON using JSON.stringify so it is serializable and you can attach it to the html you send in the response. Then on the client side, once the JavaScript loads, Redux grabs the state from the html and everything continues as normal.']
            ]
        }
    }
];
