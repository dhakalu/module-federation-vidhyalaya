import React, { useEffect } from 'react';
const Header = React.lazy(() => import("header/Header"));
const NavigationPane = React.lazy(() => import("navigation-pane/NavigationPane"));

import './index.css';
const Search = React.lazy(() => import("search/Search"));
import Classes from "./components/Classes";
import Assignments from "./components/Assignments";
// import Search from "./components/Search";
import { load, setSearchText } from './store';


const H3 = ({ children }) => (
    <h3>
      {children}
    </h3>
  );
   
  const App = () => {

    useEffect(() => {
        load();
    }, [])

    return(<>
    <React.Suspense fallback={'Loading Header..'}>
        <Header />
    </React.Suspense>
      <div style={{ marginTop: 50, marginLeft: 320 }}>
        <React.Suspense fallback="Loading Navigation Pane">
            <NavigationPane title={'Welcome!'} />
        </React.Suspense>
      <div
        style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
        }}
      >
        <div>
          <H3>Search</H3>
          <React.Suspense fallback={'Loading Search..'}>
            <Search onSearch={setSearchText} />
         </React.Suspense>
        </div>
        <div>
          <H3>Enrolled Subjects</H3>
          <Classes />
        </div>
        <div>
          <Assignments />
        </div>
      </div>
      </div>
    </>
  );
    }

export default App;