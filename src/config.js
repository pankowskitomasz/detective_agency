import {Redirect} from "react-router-dom";
import About from "./views/about";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Home from "./views/home";
import PrivacyPolicy from "./views/privacy";
import Services from "./views/services";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home/>},
        {navItem:true, exact:false, path:"/about",name:"About",view:<About/>},
        {navItem:true, exact:false, path:"/services",name:"Services",view:<Services/>},
        {navItem:true, exact:false, path:"/contact",name:"Contact",view:<Contact/>},
        {navItem:false, exact:false, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},                
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:false, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"Privacy Policy",href:"/privacy"}}/>},                
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};
const homeCfg = [
    {navItem:true, exact:false, path:"/about",name:"About",view:<About/>},
    {navItem:true, exact:false, path:"/services",name:"Services",view:<Services/>},
    {navItem:true, exact:false, path:"/contact",name:"Contact",view:<Contact/>}
];

export {
    appCfg,
    homeCfg
}