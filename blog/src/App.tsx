type AppPropsType = {
  children: any;
};

function App({ children }: AppPropsType) {
  return <div className="App">{children}</div>;
}

export default App;
