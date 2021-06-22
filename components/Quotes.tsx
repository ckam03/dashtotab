import { useState, useEffect, useContext } from "react";
import { ToggleContext } from "./ToggleContext";

const Quotes = () => {
  const [quotes, setQuotes] = useState({ quote: "", author: "" });
  const { toggled5 } = useContext(ToggleContext);
  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("https://quotes.rest/qod");
      const response = await res.json();
      //console.log(response);
      setQuotes({
        quote: response.contents.quotes[0].quote,
        author: response.contents.quotes[0].author,
      });
    };
    fetchQuote();
  }, []);
  return (
    <>
      {toggled5 ? (
        <div>
          <footer className="bottom-0 mb-10 text-lg px-32 text-center">
            { quotes.quote }
            <div className="pt-2">- {quotes.author}</div>
          </footer>
        </div>
      ) : (
        false
      )}
    </>
  );
};
export default Quotes;
