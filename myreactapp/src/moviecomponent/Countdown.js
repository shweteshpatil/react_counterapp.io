import { useState } from "react";

const Countdown = () => {
  const [count, setCount] = useState(0);

  // Lang hook

  const [lang, setLang] = useState(["HTML", "CSS"]);

  const inCount = () => {
    setCount(count + 1);
  };

  const downCount = () => {
    setCount(count - 1);
  };

  const addLang = () => {
    let userLang = window.prompt("enter lang");
    setLang([...lang, userLang]);
  };

  return (
    <>
      <div className="container text-center my-5">
        <h1 className="text-info">React counter app</h1>
        <button onClick={inCount} className="btn btn-success">
          Count up
        </button>

        <h1>{count}</h1>

        <button onClick={downCount} className="btn btn-danger">
          Count down
        </button>
      </div>

      <div className="container">
        <table className="table table-striped">
          <thead>
            <button className="btn btn-primary" onClick={addLang}>
              Add Lang
            </button>
            <tr/>



            <th>No</th>
            <th>Lang</th>
            <th>Action</th>
          </thead>
          <tbody>
            {lang.map((cval, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{cval}</td>
                  <td>
                    <button className="btn btn-danger">delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Countdown;

// <div className="container">
//     <ul>

// {lang.map((value,i)=>{

//   return<li key={i}>{value}</li>
// })

// }

//     </ul>

//     </div>
