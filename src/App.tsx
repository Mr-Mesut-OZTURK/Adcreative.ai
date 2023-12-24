import { RouterProvider } from "react-router-dom"
import { router } from "@/routes"
import { ApolloWrapper } from "@/apollo"
import { MuiThemeWrapper } from "@/theme"


function App() {

  return (
    <ApolloWrapper>
      <MuiThemeWrapper>
        <RouterProvider router={router} />
      </MuiThemeWrapper>
    </ApolloWrapper>
  )
}

export default App
