import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "../views/Landing";
import BookDetails from "../views/BookDetails";
import NotFound from '../views/NotFound';
import {Overview} from "../views/Overview";
import {CartV} from "../views/CartV";
import {Header} from "../components/Header";

function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Layout><Overview /></Layout>} />
        <Route path="/books/:bookId" element={<Layout><BookDetails /></Layout>} />
        <Route path="/cart" element={<Layout><CartV /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;    