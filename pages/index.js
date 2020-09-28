import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layouts   from "../components/Layouts"
export default function Home({children}) {
  return (
        <Layouts>
        {children}
        </Layouts>
  )
}
