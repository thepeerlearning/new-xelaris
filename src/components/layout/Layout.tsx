'use client';

import { Nav } from "../nav";

import { Footer } from "./Footer/Footer";
import { Faq } from "./Home/Faq";

export default function Layout({ children }: { children: React.ReactNode }) {
   
    
  return (
    <div>
        <Nav />
        <div className="body">

     
        {children}
           </div>
        <Faq/>
        <Footer onContact={() => {window.location.href = '/contact'} }/>

 
       
    </div>
  );
}