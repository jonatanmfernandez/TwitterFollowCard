// import './App.css'
// import TwitterFollowCard from './components/TwitterFollowCard';

// function App() {
//   const formattedUserName = (<span> </span>)

//   return (
//     < section className="App">
//     <TwitterFollowCard
//       formattedUserName={formattedUserName} 
//       isFollowing={false} 
//       userName="elpeluca"
//       name="elpeluca"/>

//     <TwitterFollowCard formattedUserName={formattedUserName}
//       isFollowing
//       userName="midudev" 
//       name="Miguel Angel"/>

//     <TwitterFollowCard formattedUserName={formattedUserName} 
//       isFollowing
//       userName="julepev"
//       name="Cuasimodo Ferandez"/>
//     </section>
//   )
// } DECLARATIVO

// export default App
import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'


function App() {
  const twitterUsers = [
    { userName: 'BarackObama', name: 'Barack Obama', isFollowing: false },
    { userName: 'ladygaga', name: 'Lady Gaga', isFollowing: true },
    { userName: 'justinbieber', name: 'Justin Bieber	', isFollowing: false },
    { userName: 'youtube', name: 'YouTube', isFollowing: true },

  ];

  const sortedTwitterUsers = [...twitterUsers].sort((a, b) =>
    a.userName.localeCompare(b.userName)
  );
  //restoperator

  const Title = {
    color: "white"
  }

  return (
    <> 
      <h1 style={Title}> 
        Suggestions for you 
      </h1>
      <section className="App">
      {sortedTwitterUsers.map((user, index) => (
        <TwitterFollowCard
          key={index} //tiene que ser un identificador unico
          formattedUserName={<span>@{user.userName}</span>}
          isFollowing={user.isFollowing}
          userName={user.userName}
          name={user.name} //funciones como parametro, tambén se pueden pasar elementos. 
        />
      ))}
    </section>
    </>
  );
}

export default App;