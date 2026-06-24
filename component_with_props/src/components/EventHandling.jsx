import React, { useState } from "react";

const EventHandling= () => {
  const [message, setMessage] = useState("Trigger an event to see the result");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("✅ Form Submitted");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-6">
          React Event Handling Demo
        </h1>

        <div className="bg-slate-700 p-4 rounded-lg mb-6">
          <p className="text-lg font-medium">{message}</p>
        </div>

        {/* Mouse Events */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Mouse Events</h2>

          <button
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition"
            onClick={() => setMessage("🖱️ Button Clicked")}
            onDoubleClick={() => setMessage("🖱️ Double Clicked")}
            onMouseEnter={() => setMessage("➡️ Mouse Entered")}
            onMouseLeave={() => setMessage("⬅️ Mouse Left")}
          >
            Hover / Click Me
          </button>
        </section>

        {/* Form Events */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Form Events</h2>

          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              placeholder="Type here..."
              className="flex-1 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={(e) =>
                setMessage(`⌨️ Typing: ${e.target.value}`)
              }
              onFocus={() => setMessage("🎯 Input Focused")}
              onBlur={() => setMessage("❌ Input Blurred")}
              onKeyDown={(e) =>
                setMessage(`⬇️ Key Down: ${e.key}`)
              }
              onKeyUp={(e) =>
                setMessage(`⬆️ Key Up: ${e.key}`)
              }
            />

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-5 rounded-lg"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Clipboard Events */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Clipboard Events
          </h2>

          <input
            type="text"
            placeholder="Copy / Cut / Paste"
            className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600"
            onCopy={() => setMessage("📋 Copied")}
            onCut={() => setMessage("✂️ Cut")}
            onPaste={() => setMessage("📥 Pasted")}
          />
        </section>

        {/* Drag & Drop */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Drag & Drop Events
          </h2>

          <div
            draggable
            onDragStart={() => setMessage("🚀 Drag Started")}
            onDragEnd={() => setMessage("🏁 Drag Ended")}
            className="bg-purple-600 w-fit px-5 py-3 rounded-lg cursor-grab mb-4"
          >
            Drag Me
          </div>

          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => setMessage("📦 Dropped")}
            className="h-32 border-4 border-dashed border-cyan-500 rounded-xl flex items-center justify-center"
          >
            Drop Here
          </div>
        </section>

        {/* Scroll Event */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Scroll Event
          </h2>

          <div
            onScroll={() => setMessage("📜 Scrolling")}
            className="h-32 overflow-y-scroll bg-slate-700 rounded-lg p-4"
          >
            {[...Array(20)].map((_, index) => (
              <p key={index}>Scrollable Content {index + 1}</p>
            ))}
          </div>
        </section>

        {/* Image Events */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Image Events
          </h2>

          <img
            src="https://picsum.photos/400/200"
            alt="demo"
            className="rounded-lg"
            onLoad={() => setMessage("🖼️ Image Loaded")}
            onError={() => setMessage("❌ Image Failed")}
          />
        </section>

        {/* Touch Events */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Touch Events
          </h2>

          <div
            onTouchStart={() => setMessage("👆 Touch Started")}
            onTouchMove={() => setMessage("👉 Touch Moving")}
            onTouchEnd={() => setMessage("✋ Touch Ended")}
            className="bg-orange-500 h-32 rounded-xl flex items-center justify-center text-xl font-semibold"
          >
            Touch Area (Mobile)
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventHandling ;