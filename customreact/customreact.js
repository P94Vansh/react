function customRender(mainContainer,reactElement){
    // basic approach
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props['href'])
    domElement.setAttribute('target',reactElement.props['target'])
    mainContainer.appendChild(domElement)
    //modular approach
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // for (const prop  in reactElement.props) {
    //     if(prop=='children') continue
    //     domElement.setAttribute(prop,reactElement.props[prop])
    // }
    // mainContainer.appendChild(domElement)
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click Me To visit google'
}
const mainContainer=document.getElementById('root')
customRender(mainContainer,reactElement)