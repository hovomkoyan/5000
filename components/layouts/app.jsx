import React from 'react';
import  Header from "@/components/layouts/header"
import Footer from "@/components/layouts/footer";


const App = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default App;