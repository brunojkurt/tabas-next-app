import { Header } from 'components/UI/modules'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header
        position="static"
        scrollElevation={3}
      />
      { children }
    </>
  )
}

export default DefaultLayout
