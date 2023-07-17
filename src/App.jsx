import { useEffect } from "react";
import Layout from "./components/Layout/Layout"
import Loader from "./components/Loader/Loader"
import Router from "./components/Route"
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
function App() {

  useEffect(()=>{
    setTimeout(() => {
      $(".page-loader").addClass("hid")
    }, 1500);
  })

  return (
    <>
      <Loader />
      <Layout>
        <Router />
      </Layout>
    </>
  )
}

export default App
