import {
  RouterProvider
} from "react-router-dom";
import router from "./router/routers";
function App() {
  return (
    <>
     <section>
    {/* <Login /> */}
      {/* <Layout/> */}
      <RouterProvider router={router} />
     </section>
    </>
  );
}

export default App;
