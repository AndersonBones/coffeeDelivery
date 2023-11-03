import { Header } from "../header/Header"
import { Outlet } from "react-router-dom"
import { Layout } from "./styles"

export const DefaultLayout = ()=>{
    return(
        <Layout>
            <Header></Header>
            <Outlet></Outlet>
        </Layout>
    )
}