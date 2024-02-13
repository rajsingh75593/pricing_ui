export const questions=[
    {
        id: 1,
        question: 'what is the virtual Dom?',
        answer: 'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.',
    },
    {
        id:2 ,
        question:'What is JSX?' ,
        answer:'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.' ,
    },
    {
        id: 3,
        question:'Can web browsers read JSX directly?' ,
        answer:'Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object' ,
    },
    {
        id: 4,
        question:'What is the virtual DOM?' ,
        answer:'DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects. React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.' ,
    },
    {
        id: 5,
        question:'Why use React instead of other frameworks, like Angular?',
        answer:' 1-Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it provides less coding and provides more functionality, whereas, with JavaScript applications, code tends to get complex very quickly. 2-Improved performance: React uses virtual DOM, which makes web applications perform faster. 3-Reusable components: Components are the building blocks of any React application, and a single app usually consists of multiple components. 4-Unidirectional data flow: React follows a unidirectional data flow. This means that when designing a React app, we often nest child components within parent components. 5-Dedicated tools for easy debugging: Facebook has released a chrome extension that we can use to debug React applications.' ,
    }
]