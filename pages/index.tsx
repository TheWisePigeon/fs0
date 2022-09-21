import type { NextPage } from 'next'
import Header from '../components/header'
import Menu from '../components/menu'
import Announcements from '../components/announcements'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      {/* <Menu/> */}
      <Announcements/>
    </>
  )
}

export default Home
