import { Results } from "./components/Results";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./styles/App.scss";
import "react-tabs/style/react-tabs.css";
import { usePapersStore } from "./stores/usePapersStore";
import { useKeywordStore } from "./stores/useKeywordStore";
import { Analytics } from "./components/Analytics";

function App() {
  const { papers } = usePapersStore();
  const { searchQuery } = useKeywordStore();
  return (
    <div className="app-container">
      <Tabs selectedTabClassName="tab-selected" forceRenderTabPanel>
        <TabList>
          <Tab>
            <h3>Publications</h3>
          </Tab>
          <Tab>
            <h3>Analytics</h3>
          </Tab>
        </TabList>
        <TabPanel>
          <div className="column" style={{ alignItems: "center" }}>
            <Results />
          </div>
        </TabPanel>
        <TabPanel>
         <Analytics papers={papers} searchQuery={searchQuery} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
