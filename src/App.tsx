import React from 'react'; // Import React if not already imported
import { BrowserRouter, Link } from 'react-router-dom'
import Methone, { Header } from 'methone'

export const App = () => {
  const config = {
    color_scheme: 'cerise',
    system_name: 'Example',
    links: [
      <Link key="info" to="/info">Info</Link>
    ],
    login_text: 'Login',
    login_href: '/login',
  }

  return (
    <BrowserRouter>
      <div id="application" className="cerise">
        <Methone config={config} />
        {/* Action optional, don't pass props to not render */}
        <Header title="Methone" action={{onClick: (_: React.MouseEvent) => alert("Hej!"), text: "Test"}}>
          {/* Optional */}
          <Link to="#">« Tillbaka</Link>
        </Header>
        <div>
          {/* ...body here */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App