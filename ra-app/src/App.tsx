import { Admin, Resource } from "react-admin";

import jsonServerProvider from 'ra-data-json-server'
import { PosterList } from "./components/PosterList";
import { PosterEdit } from "./components/PosterEdit";
import { PosterCreate } from "./components/PosterCreate";
import { CategoryList } from "./components/CategoryList";
import { CategoryEdit } from "./components/CategoryEdit";

const dataProvider = jsonServerProvider("http://localhost:4000")

const App = () => <Admin  dataProvider={dataProvider } >
  <Resource name="categories" 
    list={CategoryList} 
    edit={CategoryEdit} 
    create={PosterCreate}
    recordRepresentation="name"
  />
  <Resource name="posters" 
    list={PosterList} 
    edit={PosterEdit} 
    create={PosterCreate}
  />
</Admin>

export default App