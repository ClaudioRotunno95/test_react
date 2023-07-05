import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Core from "./Core/Core";
import Footer from "./Footer/Footer";

const API = "https://jsonplaceholder.typicode.com/todos";
const ELEMENTS_PER_PAGE = 6;

function App() {
  

  const [data, setData] = useState([]);
  const [backup, setBackup] = useState([]);
  const [page, setPage] = useState(0);
  const paginationInfo = {
    from: page * ELEMENTS_PER_PAGE,
    to: page * ELEMENTS_PER_PAGE + ELEMENTS_PER_PAGE,
  };
  const ultimaPagina = Math.round(data.length / 6);
  console.log(ultimaPagina);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setBackup(response);
      });
  }, []);

  const StampaPaginazione = ({ page }) => {
    console.log("page ", page);
    switch (page) {
      case 0:
        return (
          <>
            <li onClick={() => setPage(page + 1)}>{page + 2}</li>
            <li onClick={() => setPage(page + 2)}>{page + 3}</li>
            <li>...</li>
          </>
        );
      case 1:
        return (
          <>
            <li onClick={() => setPage(page)}>{page + 1}</li>
            <li onClick={() => setPage(page + 1)}>{page + 2}</li>
            <li>...</li>
          </>
        );

      case 2:
        return (
          <>
            <li onClick={() => setPage(page - 1)}>{page}</li>
            <li onClick={() => setPage(page)}>{page + 1}</li>
            <li onClick={() => setPage(page + 1)}>{page + 2}</li>
            <li>...</li>
          </>
        );

      case 31:
        return (
          <>
            <li>...</li>
            <li onClick={() => setPage(page)}>{page}</li>
            <li onClick={() => setPage(page + 1)}>{page + 1}</li>
          </>
        );
      case 32:
        return (
          <>
            <li>...</li>
            <li onClick={() => setPage(page - 1)}>{page - 1}</li>
            <li onClick={() => setPage(page)}>{page}</li>
          </>
        );
      case 33:
        return (
          <>
            <li>...</li>
            <li onClick={() => setPage(page - 2)}>{page - 2}</li>
            <li onClick={() => setPage(page - 1)}>{page - 1}</li>
          </>
        );
      default:
        return (
          <>
            <li>...</li>
            <li onClick={() => setPage(page - 1)}>{page}</li>
            <li onClick={() => setPage(page)}>{page + 1}</li>
            <li onClick={() => setPage(page + 1)}>{page + 2}</li>
            <li>...</li>
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="Wrap">
        <Navbar data={data} setBackup={setBackup} />
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 3 }}>
          <Core backup={backup} paginationInfo={paginationInfo} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button disabled={page === 0} onClick={() => setPage(page - 1)}>
              -
            </button>
            <ul style={{ margin: "20px 30px" }}>
              <li value="0" onClick={() => setPage(0)}>
                1
              </li>
              <StampaPaginazione page={page} />
              <li onClick={() => setPage(ultimaPagina)}>{ultimaPagina}</li>
            </ul>
            <button
              disabled={page === ultimaPagina}
              onClick={() => setPage(page + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
