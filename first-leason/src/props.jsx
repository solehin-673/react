function Userinfo({info,rn,bn,course}) {
  return (
    <div>
      <h1>Name:{info.name}</h1>
      <h1>Age: {info.age}</h1>
      <h1>roll:{rn}</h1>
      <h1>batch:{bn}</h1>
      <h1>subject:{course[1]}</h1>
    </div>
  );
}

export default Userinfo;