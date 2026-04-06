import { useState } from "react";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border p-6 rounded-xl mb-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between">
        <h3 className="font-bold">{question}</h3>
        <span>{open ? "-" : "+"}</span>
      </div>

      {open && <p className="mt-4 opacity-70">{answer}</p>}
    </div>
  );
}
export default FAQItem