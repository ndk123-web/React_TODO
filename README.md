# Why React ? 
    -  We can split our app and reuse that 
    - States which means that if it changes then it will change across all the app or components 
    - Uses virtual DOM efficiently without reloading entire app and updating Real DOM 

# What u understands 
    - {}    -> inside JSX means we are telling jsx to inside this bracket all is vanilla js code 
    - {{}}  -> if we write this it means we are telling jsx whatever is now is inline-css
    - React.StrictMode() -> it means for development mode , 2 times it render first for check and second for   actual render  
    
    - Hooks -> There are multiple hooks function provided by React  

        1. useState -> if we chnage value overall in all app state changes 
            - Syntax -> const [ val , fn ] = useState(T) ( T -> Any initial value can accept )
        
        2. useEffect -> when page re - render then this hook will be run 
            - null as function -> for each render it will run 
            - [] as function -> only first time in render it will run 
            - [state] when state changes then only it will run 

        3. useRef -> It only changes that tag instead of re-rendering whole components 
            - Sytnax -> const myRef = useRef(0)  
            - myRef.current = 0 (initially value or ref is inside current)
            - use for DOM manipulation (ref = {ref})
            - not re-render 

        4. Conditional rendering 
            - In 2 ways we can use -> 
                1. using ternary operator 
                    - { btn ? <div> Hello it's true </div> : null }
                2. using && operator (it is like if and else)
                    - { btn && <div> Hello it's true </div> }
        
        5. Rednering Lists 
            - Using Map we can Render List 
            - Ex : {myArr.map((val, idx) => ( <div key={idx}>Hello, value is {val}</div> ))}
        
        6. FramerMotion Which is Moost used Animation Library which is easy to use 
        7. Tailwind css used for this Project 