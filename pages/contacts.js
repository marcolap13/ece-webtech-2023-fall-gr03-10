import { useState } from "react";
import { supabase } from '../utils/supabaseClients';
import { useTheme } from "../context/ThemeContext";

export default function Page() {
  const { theme } = useTheme();
  const [message, setMessage] = useState(null);
  const onSubmit = async function (e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const { error } = await supabase
      .from("contacts")
      .insert(Object.fromEntries(data), { returning: "minimal" });
    if (error) {
      setMessage("Sorry, an unexpected error occured.");
    } else {
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Thank you for contacting us. We will get back to you promptly.</p>
        </div>
      );
    }
  };

  const Layoutstyle = {
    backgroundColor: theme === 'dark' ? 'var(--background-color-dark)' : 'var(--background-color-light)',
    color: theme === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)',
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div className="p-20">
      <div className="p-20  flex flex-col justify-center items-center"
        style={Layoutstyle}>
        <h1 className="wt-title">Contact us</h1>

        <form className="[&_span]:block grid gap-3" onSubmit={onSubmit}>
          <div>
            <label>
              <span>First name</span>
              <input type="text" name="firstname" />
            </label>
          </div>
          <div>
            <label>
              <span>Last name</span>
              <input type="text" name="lastname" />
            </label>
          </div>
          <div>
            <label>
              <span>Email</span>
              <input type="text" name="email" />
            </label>
          </div>
          <div>
            <label>
              <span>Message</span>
              <textarea name="message" />
            </label>
          </div>
          <div>
            <button className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500">
              Submit
            </button>
          </div>
        </form>
        {message && (
          <div
            aria-label="Overlow below the drawer dialog"
            className="fixed inset-0 bg-black/80 flex items-center justify-center"
            onClick={() => setMessage(null)}
            role="dialog"
          >
            <div
              aria-label="Alert pane"
              className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
            >
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
