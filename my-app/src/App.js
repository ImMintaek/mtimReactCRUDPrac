import "./App.css";

// header function component
function Header(props){
  return  <header>
            <h1>
              <a href="/">{props.title}</a>
            </h1>
          </header>
};

// navigation function component
// propsにtopicsのarrayを渡す
function Nav(props){
  const list = []
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    list.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>) // key値がid値、href属性にもid値、titleはtopicsのtitle値
  }

  return  <nav>
            <ol>
              {list}
            </ol>
          </nav>
};

// article function component
function Article(props){
  return  <article>
            <h2>{props.title}</h2>
            {props.body}
          </article>
};

function App() {
  const topics = [
    {id:1, title:"html", body:"html is ..."},
    {id:2, title:"css", body:"css is ..."},
    {id:3, title:"javascript", body:"javascript is ..."}
  ];


  return (
  <div className="App">
    <Header title="REACT"></Header>
    <Nav topics= {topics}></Nav>
    <Article title="Welcome" body="Hello, WEB"></Article>
  </div>
  );
};

export default App;
